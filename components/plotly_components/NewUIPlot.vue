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
  },
  data() {
    return {
      name: 'Test',
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
    reTraceDataForPlot() {
      //  const colors = ['#C51F3F', '#F4992E', '#6DC981', '#36BCE7']

      const trace1 = {
        y: [
          0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.8, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15,
          8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.9, 22.3,
          23.25,
        ],
        type: 'box',
        name: 'All Points',
        jitter: 0.3,
        pointpos: -1.8,
        marker: {
          color: 'rgb(7,40,89)',
        },
        boxpoints: 'all',
      }

      const trace2 = {
        y: [
          0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.8, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15,
          8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.9, 22.3,
          23.25,
        ],
        type: 'box',
        name: 'Only Wiskers',
        marker: {
          color: 'rgb(9,56,125)',
        },
        boxpoints: false,
      }

      const trace3 = {
        y: [
          0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.8, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15,
          8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.9, 22.3,
          23.25,
        ],
        type: 'box',
        name: 'Suspected Outlier',
        marker: {
          color: 'rgb(8,81,156)',
          outliercolor: 'rgba(219, 64, 82, 0.6)',
          line: {
            outliercolor: 'rgba(219, 64, 82, 1.0)',
            outlierwidth: 2,
          },
        },
        boxpoints: 'suspectedoutliers',
      }

      const trace4 = {
        y: [
          0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.8, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15,
          8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.9, 22.3,
          23.25,
        ],
        type: 'box',
        name: 'Wiskers and Outliers',
        marker: {
          color: 'rgb(107,174,214)',
        },
        boxpoints: 'Outliers',
      }

      const result = this.boxPlotData.map((item) => {
        return {
          y: item.data,
          type: 'box',
          name: item.treatment,
          marker: {
            color: 'rgb(107,174,214)',
          },
          boxpoints: 'Outliers',
        }
      })

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
          text: this.$props.plotTitle,
        },
        xaxis: {
          title: this.$props.xAxisTitle,
          // showgrid: false,
          // zeroline: false,
          // tickangle: 60,
          // showticklabels: false
        },
        yaxis: {
          title: this.$props.yAxisTitle,
          // type: this.$props.plotSetup.axisScale,
          zeroline: false,
          // autorange: true,
          // showgrid: true,
          // dtick: 5,
          // gridcolor: 'rgb(255, 255, 255)',
          // gridwidth: 1,
          // zerolinecolor: 'rgb(255, 255, 255)',
          // zerolinewidth: 2
        },
        // boxmode: 'group',
        // margin: { t: 25, b: 150, l: 50, r: 15 },
      }
      if (this.$props.plotTitle > 50) {
        layout.titlefont = { size: 12 }
      }
      Plotly.newPlot(this.$refs.plotlyDiv, result, layout, config)
    },
  },
}
</script>
