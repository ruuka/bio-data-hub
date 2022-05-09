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
    return $axios
      .get('/plot-options/scatter-plot-parameters/'.concat('?study=' + studyID))
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getAllGeneIds($axios) {
    return $axios.get('/plot-options/all-gene-ids').catch((error) => {
      console.log('There was an error: ' + error.response)
    })
  },
  getAllGeneAliases($axios, searchString,limit=10) {
    return $axios
      .get(`/plot-options/all-gene-alias/?query=${searchString}&limit=${limit}`)
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getAllStudies($axios) {
    return $axios.get(`/plot-options/study-data/`).catch((error) => {
      console.log('There was an error: ' + error.response)
    })
  },

  getNewBoxPlotData($axios, data) {
    return $axios.post(`/plot-options/scatter-plot-query/`, { data })
    .catch((error) => {
      console.log('There was an error: ' + error.response)
    });

  }
  
}
