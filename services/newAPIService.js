export default {
  getNewBoxPlotData($axios, data) {
    return $axios
      .get(
        `http://sjggpappprdn09:8000/api/v1/plot-options/scatter-plot-query?study_param=${data}`
      )
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getClinicalTypeSummary($axios) {
    return $axios
      .get(`/clinicaldata/summary/typesummary`)
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getTreatmentAndTimePointsByID($axios, studyID, type) {
    return $axios
      .get(`/clinicaldata/summary/${studyID}/${type}`)
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getClinicalBiomarkersById($axios, studyId) {
    return $axios
      .get(`/clinicaldata/study/${studyId}/biomarkers`)
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getClinicalGenesById($axios, studyId) {
    return $axios.get(`/clinicaldata/study/${studyId}/genes`).catch((error) => {
      console.log('There was an error: ' + error.response)
    })
  },
  getClinicalTissuesSourcesById($axios, studyId) {
    return $axios
      .get(`/clinicaldata/study/${studyId}/tissuesources`)
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getClinicalSummaryById($axios, studyId) {
    return $axios.get(`/clinicaldata/summary/${studyId}`).catch((error) => {
      console.log('There was an error: ' + error.response)
    })
  },
  getClinicalSummary($axios) {
    return $axios.get(`/clinicaldata/summary`).catch((error) => {
      console.log('There was an error: ' + error.response)
    })
  },

  getClinicalTreatments($axios, studyId, type) {
    const url = type === 'biomarker' ? 'treatments/biomarker' : 'treatments/gene'
    return $axios
      .get(
        `clinicaldata/study/${studyId}/${url}
    `
      )
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getPublicationData($axios, searchString) {
    return $axios
      .get(
        `http://sjggpappprdn09:8000/api/v1/publication/search?search=${searchString}`
      )
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getAllPublications($axios) {
    return $axios
      .get(`http://sjggpappprdn09:8000/api/v1/publication/search?search=`)
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getTrendingPublications($axios) {
    return $axios
      .get(`http://sjggpappprdn09:8000/api/v1/publications`)
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getScatterPlotParametersByStudyID($axios, studyID) {
    return $axios
      .get(
        'http://sjggpappprdn09:8000/api/v1/plot-options/scatter-plot-parameters/'.concat(
          '?study=' + studyID
        )
      )
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getAllGeneIds($axios) {
    return $axios
      .get('http://sjggpappprdn09:8000/api/v1/plot-options/all-gene-ids')
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  postFile($axios, formData) {
    return $axios.post(
      'http://sjggpappprdn09:8000/api/v1/icf-codification/upload',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
  },
  postToBiomarkers($axios, formData) {
    return $axios.post('/biostats/biomarker', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  postToGeneExpression($axios, formData) {
    return $axios.post('/biostats/geneexpression', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  getAllGeneAliases($axios, searchString, limit = 20) {
    return $axios
      .get(
        `http://sjggpappprdn09:8000/api/v1/plot-options/all-gene-alias/?query=${searchString}&limit=${limit}`
      )
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getAllStudies($axios) {
    return $axios
      .get(`http://sjggpappprdn09:8000/api/v1/plot-options/study-data/`)
      .catch((error) => {
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
        .get(
          `http://sjggpappprdn09:8000/api/v1/plot-options/differential-gene-expression/`
        )
        .catch((error) => {
          console.log('There was an error: ' + error.response)
        })
    )
  },
  getAllBiomarkerNames($axios, studyID) {
    return $axios
      .get(
        `http://sjggpappprdn09:8000/api/v1/plot-options/all-biomarker-names?study=${studyID}`
      )
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
}
