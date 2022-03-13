const Plotly = require('plotly.js/lib/core')

// Load in the trace types needed
Plotly.register([
  require('plotly.js/lib/pie'),
  require('plotly.js/lib/box'),
  require('plotly.js/lib/heatmap'),
  // require('plotly_components.js/lib/groupby'),
  require('plotly.js/lib/bar'),
  require('plotly.js/lib/scatter'),
  // require('plotly_components.js/lib/scatter3d'),
  require('plotly.js/lib/violin'),
])

module.exports = Plotly
