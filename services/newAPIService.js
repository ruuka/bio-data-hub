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
  getScatterPlotParametersByStudyID($axios, studyID) {
    // console.log('newAPIService working')
    return $axios
      .get('/plot-options/scatter-plot-parameters/'.concat(
        '?study=' + studyID
      )
      
      )
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
      // headers: {
      //   // 'dev-secret-key': 'let-me-in',
      // },
  },
  getAllGeneIds($axios) {
    return $axios
    .get('/plot-options/all-gene-ids')
    .catch((error) => {
      console.log('There was an error: ' + error.response)
    })
  },
  getAllGeneAliases($axios, searchString) {
    return $axios
    .get(`/plot-options/all-gene-alias/?query=${searchString}`)
    .catch((error) => {
      console.log('There was an error: ' + error.response)
    })
  },
  getAllStudies($axios) {
    return $axios
    .get(`/studies`)
    .catch((error) => {
      console.log('There was an error: ' + error.response)
    })
  }
}
