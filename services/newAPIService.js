export default {
  postFiles($axios, formData) {
    return $axios.post('/multi-images-upload', formData, {})
  },
  getNewBoxPlotData($axios, data) {
    return $axios
      .get(`/plot-options/scatter-plot-query?study_param=${data}`)
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getPublicationData($axios, searchString) {
    return $axios
      .get(`/publication/search?search=${searchString}`)
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getAllPublications($axios) {
    return $axios.get(`/publication/search?search=`).catch((error) => {
      console.log('There was an error: ' + error.response)
    })
  },
  getTrendingPublications($axios) {
    return $axios.get(`/publications`).catch((error) => {
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
  getJobId($axios) {
    return $axios.get('/icf-codification/jobid').catch((error) => {
      console.log('There was an error: ' + error.response)
    })
  },
  postFile($axios, formData) {
    return $axios.post('/icf-codification/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
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
  getAllNewStudies($axios) {
    return $axios.get(`/plot-options/study-data/`).catch((error) => {
      console.log('There was an error: ' + error.response)
    })
  },

  getTissueTypes($axios) {
    return (
      $axios
        // .get(`/plot-options/gene-expression/`)
        .get(`/plot-options/differential-gene-expression/`)
        .catch((error) => {
          console.log('There was an error: ' + error.response)
        })
    )
  },
  getAllBiomarkerNames($axios, studyID) {
    return $axios
      .get(`/plot-options/all-biomarker-names?study=${studyID}`)
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
}
