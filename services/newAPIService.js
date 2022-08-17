export default {
  getNewBoxPlotData($axios, data) {
    return $axios
      .get(`/plot-options/scatter-plot-query?study_param=${data}`)
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
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
  postFile($axios, formData) {
    return $axios.post('/icf-codification/upload',
    formData, 
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    ).catch((error) => {
      console.log('There was an error: ' + error.response)
    })
  },
  getAllGeneAliases($axios, searchString, limit = 20) {
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

  getTissueTypes($axios) {
    return $axios
      // .get(`/plot-options/gene-expression/`)
      .get(`/plot-options/differential-gene-expression/`)
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getAllBiomarkerNames($axios, studyID) {
    return $axios.get(`/plot-options/all-biomarker-names?study=${studyID}`).catch((error) => {
      console.log('There was an error: ' + error.response)
    })
  },
}
