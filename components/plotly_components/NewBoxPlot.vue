<template>
  <div ref="plotlyDiv"></div>
</template>

<script>
let Plotly
if (process.client) {
  Plotly = require('@/plugins/plotly.client')
}
export default {
  name: 'NewBoxPlot',
  props: {
    plotTitle: {
      type: String,
      default: '',
    },
    yAxisTitle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      response:
        [
          {
            // Example study for age group response to drug ( label/API endpoint -> request -> response)
            name: "0-18 years old",
            dataPoints:[
              {
                type: "Placebo",
                y: [0, 2.5, 3, 3.5],
              },
              {
                type: "Filgotinib, 200mg",
                y: [1.0, 2.1, 4.6, 4.3]
              }
            ]
          },
          {
            name: "19-30 years old",
            dataPoints:[
              {
                type: "Placebo",
                y: [2, 2.5, 3, 9.5],
              },
              {
                type: "Filgotinib V2, 200mg",
                y: [2.0, 2.1, 4.6, 10.3]
              }
            ]
          },
          {
            name: "36-55 years old",
            dataPoints:[
              {
                type: "Placebo",
                y: [6, 2.5, 3, 20],
              },
              {
                type: "Filgotinib V3, 200mg",
                y: [3.0, 2.1, 4.6, 10.3]
              }
            ]
          },
          {
            name: "56+ years old",
            dataPoints:[
              {
                type: "Placebo",
                y: [3, 2.5, 3, 9.5],
              },
              {
                type: "Filgotinib V4, 200mg",
                y: [2, 4, 8, 12]
              }
            ]
          }
        ]
    }
  },
  mounted()  {
    this.reTraceDataForPlot()
  },
  methods: {
    reTraceDataForPlot() {
      const colors = ["#C51F3F", "#F4992E", "#6DC981", "#36BCE7"]

      const x = []

      for(let i = 0; i < this.response.length; i++) {
        let xName = this.response[i].name

        for(let j = 0; j < this.response.length * this.response[i].dataPoints.length; j++) {
          x.push(xName)
        }
      }

      const result = []
      const traceOptions = {
        type: 'box',
        boxpoints: 'all',
        jitter: 0.3,
        pointpos: 0,
      }

      this.response.forEach((dataGroup, i) => {
        dataGroup.dataPoints.forEach((individualDataSet) => {
          const xArray = []
          individualDataSet.y.forEach(() => xArray.push(dataGroup.name))
          result.push({
            marker: {color: colors[i % colors.length]},
            name: individualDataSet.type,
            y: individualDataSet.y,
            x: xArray,
            ...traceOptions
          })
        })
      })

      // for(let i = 0; i < this.response.length; i++) {
      //
      //   // Create
      //   const boxPlotTemplate = {
      //     marker: {color: colors[i % colors.length]},
      //     name: this.response[i].name,
      //     ...traceOptions
      //   }
      //   let newBoxPlot
      //   // Work
      //   this.response[i]
      //   for(let j = 0; j < this.response[i].dataPoints.length; j++) {
      //     newBoxPlot = { ...boxPlotTemplate }
      //     const dataPoints = this.response[i].dataPoints[j]
      //     newBoxPlot.y = dataPoints.data
      //     const xArray = []
      //     newBoxPlot.y.forEach(() => xArray.push(dataPoints.type))
      //     newBoxPlot.x = xArray
      //   }
      //   // Save
      //   result.push(newBoxPlot)
      // }
      console.log('Trace Results', result)

      // STATIC DATA
      // const trace1 = {
      //   y:data,
      //   x: x,
      //   name: this.response[0].dataPoints[0].type,
      //   marker: {color: '#F4992E'},
      //   type: 'box',
      //   boxpoints: 'all',
      //   jitter: 0.3,
      //   pointpos: 0
      // }
      // const trace2 = {
      //   y: this.response[0].dataPoints[1].data,
      //   x: x,
      //   name: this.response[0].dataPoints[1].type,
      //   marker: {color: '#F4992E'},
      //   type: 'box',
      //   boxpoints: 'all',
      //   jitter: 0.3,
      //   pointpos: 0
      // }
      // const data = [trace1, trace2]

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
          title: "Age Groups",
          // showgrid: false,
          // zeroline: false,
          // tickangle: 60,
          // showticklabels: false
        },
        yaxis: {
          title: this.$props.yAxisTitle,
          // type: this.$props.plotSetup.axisScale,
          zeroline: false,
          //autorange: true,
          //showgrid: true,
          //dtick: 5,
          //gridcolor: 'rgb(255, 255, 255)',
          //gridwidth: 1,
          //zerolinecolor: 'rgb(255, 255, 255)',
          //zerolinewidth: 2
        },
        //boxmode: 'group',
        //margin: { t: 25, b: 150, l: 50, r: 15 },
      }
      if (this.$props.plotTitle > 50) {
        layout.titlefont = { size: 12 }
      }
      Plotly.newPlot(this.$refs.plotlyDiv, result, layout, config)
    },
  },
}
</script>
