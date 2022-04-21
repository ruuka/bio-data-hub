export default {
  getScatterPlotParameters($axios) {
    // console.log('newAPIService working')
    return $axios
      .get('/plot-options/scatter-plot-parameters/')
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
      // headers: {
      //   // 'dev-secret-key': 'let-me-in',
      // },
  },
}
