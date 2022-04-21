export default {
  getScatterPlotParameters($axios) {
    // console.log('newAPIService working')
    return $axios.get('/plot-options/scatter-plot-parameters/', {
      headers: {
        // 'dev-secret-key': 'let-me-in',
      },
    })
  }
}
