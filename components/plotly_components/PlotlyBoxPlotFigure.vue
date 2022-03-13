<template>
    <div ref="plotlyDiv"></div>
</template>

<script>
// import APIService from '@/services/APIService'
let Plotly
if (process.client) {
  Plotly = require('@/plugins/plotly.client')
}
export default {
  name: 'PlotlyBoxPlotFigure',
  props: {
    plotSetup: {
      type: Object,
      required: true,
    },
    primaryFilter: {
      type: String,
      default: '',
    },
    secondaryFilter: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      plotData: null,
      isEmpty: null,
      loading: false,
      // traceColors: {},
    }
  },
  computed: {
    colorPalette() {
      return this.$store.getters['clinical_trials/colorPalette']
    },
    traceColors: {
      get() {
        return this.$store.state.clinical_trials.traceColors
      },
      set(newValue) {
        this.$store.dispatch('clinical_trials/changeTraceColor', newValue)
      },
    },
    plotName() {
      if (this.$props.plotSetup.dataBeingPlotted === 'gene') {
        return (
          this.$props.plotSetup.tissue_source.toString() +
          ' ' +
          this.$props.plotSetup.name.toString() +
          ' Expression from ' +
          this.$props.plotSetup.study_id.toString()
        )
      } else if (this.$props.plotSetup.dataBeingPlotted === 'biomarker') {
        return (
          this.$props.plotSetup.nameWithUnit.toString() +
          ' in ' +
          this.$props.plotSetup.study_id.toString()
        )
      } else if (this.$props.plotSetup.dataBeingPlotted === 'pathway') {
        return (
          this.$props.plotSetup.tissue_source.toString() +
          ' ' +
          this.$props.plotSetup.name.toString() +
          ' Pathway Expression from ' +
          this.$props.plotSetup.study_id.toString()
        )
      } else {
        return ''
      }
    },
    plotYAxisLabel() {
      if (this.$props.plotSetup.dataBeingPlotted === 'gene') {
        if (this.$props.plotSetup.time_type !== 'log2(tpm)') {
          return 'Log Fold Change from Baseline'
        } else {
          return 'log2(TPM)'
        }
      } else if (this.$props.plotSetup.dataBeingPlotted === 'biomarker') {
        if (this.$props.plotSetup.time_type !== 'original') {
          return 'Percent Change from Baseline'
        } else {
          return this.$props.plotSetup.unit
            ? this.$props.plotSetup.unit.toString()
            : this.$props.plotSetup.name.toString()
        }
      } else if (this.$props.plotSetup.dataBeingPlotted === 'pathway') {
        if (this.$props.plotSetup.time_type !== 'original') {
          return 'Change in Pathway Score from Baseline'
        } else {
          return 'Pathway Score'
        }
      } else {
        return ''
      }
    },
    plotXAxisLabel() {
      let filterToUse
      if (this.$props.secondaryFilter !== null) {
        filterToUse = this.$props.secondaryFilter
      } else {
        filterToUse = this.$props.primaryFilter
      }
      switch (filterToUse) {
        case 'treatment':
          return 'Treatment'
        case 'age_binned':
          return 'Age Range'
        case 'race':
          return 'Race'
        case 'ethnicity':
          return 'Ethnicity'
        case 'sex':
          return 'Sex'
        case 'bmi_binned':
          return 'BMI Range'
        case 'time_point_string':
          return 'Time Point'
        case 'responder':
          return 'Responder'
        default:
          return ''
      }
    },
  },
  watch: {
    plotData() {
      if (this.plotData.length !== 0) {
        this.isEmpty = false
        this.reTraceDataForPlot()
      } else if (this.plotData.length <= 1) {
        if (this.$props.plotSetup.time_type === 'original') {
          this.isEmpty = true
        }
      }
    },
    primaryFilter() {
      if (this.plotData.length !== 0) {
        this.isEmpty = false
        this.reTraceDataForPlot()
      } else {
        this.isEmpty = true
      }
    },
    secondaryFilter() {
      if (this.plotData.length !== 0) {
        this.isEmpty = false
        this.reTraceDataForPlot()
      } else {
        this.isEmpty = true
      }
    },
  },
  created() {
    this.loading = true
    if (this.$props.plotSetup.dataBeingPlotted === 'gene') {
      APIService.getGeneExpressionPlotData(
        this.$axios,
        this.$props.plotSetup
      ).then((response) => {
        this.plotData = response.data.reduce((arr, elem) => {
          for (const tr of elem.test_results) {
            arr.push({ ...elem, ...tr })
          }
          return arr
        }, [])
        // Deal with data transformations with fold change
        if (
          typeof this.$props.plotSetup.time_type !== 'undefined' &&
          this.$props.plotSetup.time_type !== 'log2(tpm)'
        ) {
          this.plotData = this.plotData.filter((x) => x.test_results.length > 1)
          const ids = [
            ...new Set(
              this.plotData.filter((x) => x.time_point === 0).map((x) => x.id)
            ),
          ]
          const innerLoop = this

          ids.forEach(function (id) {
            const baselineValue = innerLoop.plotData
              .filter((y) => y.time_point === 0)
              .filter((y) => y.id === id)
              .map((y) => y.value)
              .slice(0)[0]

            innerLoop.plotData
              .filter((y) => y.time_point !== 0)
              .filter((y) => y.id === id)
              .forEach((y) => (y.value = y.value - baselineValue))
          })
          this.plotData = this.plotData.filter((y) => y.time_point !== 0) // Remove baseline
        }
      })
    } else if (this.$props.plotSetup.dataBeingPlotted === 'biomarker') {
      APIService.getBiomarkerPlotData(this.$axios, this.$props.plotSetup).then(
        (response) => {
          this.plotData = response.data.reduce((arr, elem) => {
            for (const tr of elem.test_results) {
              arr.push({ ...elem, ...tr })
            }
            return arr
          }, [])
          // Deal with data transformations with fold change
          if (
            typeof this.$props.plotSetup.time_type !== 'undefined' &&
            this.$props.plotSetup.time_type !== 'original'
          ) {
            this.plotData = this.plotData.filter(
              (x) => x.test_results.length > 1
            )
            const ids = [
              ...new Set(
                this.plotData.filter((x) => x.time_point === 0).map((x) => x.id)
              ),
            ]
            const innerLoop = this

            ids.forEach(function (id) {
              const baselineValue = innerLoop.plotData
                .filter((y) => y.time_point === 0)
                .filter((y) => y.id === id)
                .map((y) => y.value)
                .slice(0)[0]

              innerLoop.plotData
                .filter((y) => y.day !== -1)
                .filter((y) => y.id === id)
                .forEach(
                  (y) =>
                    (y.value =
                      ((y.value - baselineValue) / baselineValue) * 100)
                )
            })
            this.plotData = this.plotData.filter((y) => y.time_point !== 0) // Remove baseline
          }
        }
      )
    } else if (this.$props.plotSetup.dataBeingPlotted === 'pathway') {
      APIService.getPathwayExpressionPlotData(
        this.$axios,
        this.$props.plotSetup
      ).then((response) => {
        this.plotData = response.data.reduce((arr, elem) => {
          for (const tr of elem.test_results) {
            arr.push({ ...elem, ...tr })
          }
          return arr
        }, [])
        // Deal with data transformations with fold change
        if (
          typeof this.$props.plotSetup.time_type !== 'undefined' &&
          this.$props.plotSetup.time_type !== 'original'
        ) {
          this.plotData = this.plotData.filter((x) => x.test_results.length > 1)
          const ids = [
            ...new Set(
              this.plotData.filter((x) => x.time_point === 0).map((x) => x.id)
            ),
          ]
          const innerLoop = this

          ids.forEach(function (id) {
            const baselineValue = innerLoop.plotData
              .filter((y) => y.time_point === 0)
              .filter((y) => y.id === id)
              .map((y) => y.value)
              .slice(0)[0]

            innerLoop.plotData
              .filter((y) => y.time_point !== 0)
              .filter((y) => y.id === id)
              .forEach((y) => (y.value = y.value - baselineValue))
          })
          this.plotData = this.plotData.filter((y) => y.time_point !== 0) // Remove baseline
        }
      })
    }
    this.loading = false
  },
  methods: {
    fullColorHex() {
      // Generate Hex value
      const max = 16777215
      const min = 1000000
      return '#' + Math.floor(Math.random() * (max - min) + min).toString(16)
    },
    reTraceDataForPlot() {
      this.loading = true
      const config = {
        responsive: true,
        displaylogo: false,
        modeBarButtonsToRemove: [
          'sendDataToCloud',
          'zoom2d',
          'toggleSpikelines',
          'hoverCompareCartesian',
          'select2d',
          'pan2d',
          'zoomIn2d',
          'zoomOut2d',
          'hoverClosestCartesian',
          'autoScale2d',
          'lasso2d',
        ],
      }
      const layout = {
        showlegend: true,
        title: {
          text: this.plotName,
        },
        yaxis: {
          title: this.plotYAxisLabel,
          // type: this.$props.plotSetup.axisScale,
        },
        margin: { t: 25, b: 150, l: 50, r: 15 },
      }
      if (this.plotName.length > 50) {
        layout.titlefont = { size: 12 }
      }
      Plotly.newPlot(this.$refs.plotlyDiv, traces, layout, config)
      // Plotly.newPlot(this.$refs.plotlyDiv, data)
      this.loading = false
    },
  },
}
</script>
