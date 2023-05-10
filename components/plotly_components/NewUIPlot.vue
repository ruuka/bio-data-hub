<template>
  <div>
    <div v-if="isBoxPlotDataPresent" ref="plotlyDiv"></div>
    <div v-else class="">
      <p class="bg-gilead-red bg-opacity-20 text-gilead-red px-4 py-2.5">
        No data
      </p>
    </div>
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
  computed: {
    isBoxPlotDataPresent() {
      return this.boxPlotData.every((item) => item.data.length > 0)
    },
  },
  watch: {
    boxPlotData() {
      this.reTraceDataForPlot()
    },
  },
  mounted() {
    console.log('Result', this.isBoxPlotDataPresent)
    this.reTraceDataForPlot()
  },
  methods: {
    changeTitleToTwoLines() {
      // Get the SVG text element
      const svgText = document.querySelector('text.ytitle')

      // Define the maximum width for the text
      const maxWidth = 250

      // Get the current text content
      const textContent = svgText.textContent

      // Calculate the actual text width
      const textWidth = svgText.getComputedTextLength()

      // Calculate the number of lines needed based on the width
      const numLines = Math.ceil(textWidth / maxWidth)

      // Split the text into multiple lines
      const words = textContent.split(' ')
      let line = ''
      let wrappedText = ''

      for (let i = 0; i < words.length; i++) {
        const word = words[i]
        const testLine = line + word + ' '
        const testWidth = svgText.getSubStringLength(0, testLine.length)

        if (testWidth > maxWidth) {
          wrappedText += `<tspan x="0" dy="1em">${line}</tspan>`
          line = word + ' '
        } else {
          line = testLine
        }
      }

      // Add the last line of text
      wrappedText += `<tspan x="0" dy="1em">${line}</tspan>`

      // Replace the original text with the wrapped text
      svgText.innerHTML = wrappedText
    },
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
        height: 600,
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
      if (this.isBoxPlotDataPresent) {
        setTimeout(() => {
          Plotly.newPlot(this.$refs.plotlyDiv, result, layout, config)

          this.changeTitleToTwoLines()
        }, 1000)
      }
    },
  },
}
</script>
