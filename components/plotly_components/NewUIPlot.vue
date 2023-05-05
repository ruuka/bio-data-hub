<template>
  <div>
    <div ref="plotlyDiv"></div>
  </div>
</template>

<script>
let Plotly
if (process.client) {
  Plotly = require('@/plugins/plotly.client')
}
export default {
  name: 'NewUIBoxPlot',
  props: {
    boxPlotData: {
      type: Array,
      required: true,
    },
    treatments: {
      type: Array,
      required: true,
    },
    yTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      name: '',
    }
  },
  watch: {
    boxPlotData() {
      this.reTraceDataForPlot()
    },
  },
  mounted() {
    this.reTraceDataForPlot()
  },
  methods: {
    flatten(arr) {
      return arr.reduce(function (flat, toFlatten) {
        return flat.concat(
          Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
        )
      }, [])
    },
    reTraceDataForPlot() {
      function flatten(arr) {
        return arr.reduce(function (flat, toFlatten) {
          return flat.concat(
            Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
          )
        }, [])
      }

      //  const colors = ['#C51F3F', '#F4992E', '#6DC981', '#36BCE7']
      const tempx = this.boxPlotData.map((item) =>
        item.data.map(() => item.week)
      )

      const tempData = this.boxPlotData.map((item) => item.data)
      console.log('Y', flatten(tempData))
      console.log('X', flatten(tempx))

      const colors = ['#777777', '#C51F3F', '#B2AEFF']
      const result = this.treatments.map((treatment, index) => {
        return {
          y: flatten(tempData),
          x: flatten(tempx),
          name: treatment,
          marker: { color: colors[index] },
          type: 'box',
        }
      })

      const layout = {
        height: 800,
        yaxis: {
          title: this.yTitle,
          zeroline: false,
          automargin: true,
          // type: this.$props.plotSetup.axisScale,

          autorange: true,
          // showgrid: true,
          dtick: 10,
          // range: [-10, 40],
          // gridcolor: 'rgb(255, 255, 255)',
          // gridwidth: 1,
          // zerolinecolor: 'rgb(255, 255, 255)',
          // zerolinewidth: 2
        },

        // margin: { t: 25, b: 150, l: 50, r: 15 },

        boxmode: 'group',
      }

      const config = {
        responsive: true,
        displaylogo: false,
        jitter: 0.3,
        pointpos: -15,
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
      if (this.$props.plotTitle > 10) {
        layout.titlefont = { size: 9 }
      }
      setTimeout(() => {
        Plotly.newPlot(this.$refs.plotlyDiv, result, layout, config)
      }, 1000)
    },
  },
}
</script>
