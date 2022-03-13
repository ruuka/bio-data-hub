export default {
  getStudyDataPlotOptions($axios) {
    return $axios.get('api/v1/plot-options/study-data/')
  },
  getDemographicData($axios, filterOptions) {
    return $axios.get(
      'api/v1/demographics/'.concat(
        '?study=' + filterOptions.studyList.toString(),
        '&sex=' + filterOptions.sexList.toString(),
        '&agebinned=' + filterOptions.ageList.toString(),
        '&race=' + filterOptions.raceList.toString(),
        '&ethnicity=' + filterOptions.ethnicityList.toString()
      )
    )
  },
  getDemographicAndID($axios, filterOptions) {
    return $axios.get(
      '/demographics-id/'.concat(
        '?study=' + filterOptions.studyList.toString(),
        '&sex=' + filterOptions.sexList.toString(),
        '&agebinned=' + filterOptions.ageList.toString(),
        '&race=' + filterOptions.raceList.toString(),
        '&ethnicity=' + filterOptions.ethnicityList.toString()
      )
    )
  },
  getDemographicMetadataData($axios, filterOptions) {
    return $axios.get(
      '/demographics-metadata/'.concat(
        '?study=' + filterOptions.studyList.toString()
      )
    )
  },
  getGeneExpressionPlotOptions($axios) {
    return $axios.get(
      'api/v1/plot-options/gene-expression/'.concat(
        '?ta=' + 'Inflammation,Oncology'
      )
    )
  },
  getGeneExpressionPlotData($axios, plotOptions) {
    return $axios.get(
      'api/v1/gene-expression/'.concat(
        '?gene=' + plotOptions.name.toString(),
        '&tissue=' + plotOptions.tissue_source.toString(),
        '&study=' + plotOptions.study_id.toString(),
        '&week=' + plotOptions.time_point.toString(),
        '&effname=' + plotOptions.responderMeasure,
        '&effweek=' + plotOptions.responderTime
      )
    )
  },
  getGeneExpressionPlotAllData($axios, plotOptions) {
    return $axios.get(
      '/gene-expression/'.concat(
        '?gene=' + plotOptions.name.toString(),
        '&study=' + plotOptions.study_id.toString(),
        '&tissue=' + plotOptions.tissue_source.toString(),
        '&week=' + plotOptions.time_point.toString()
      )
    )
  },
  getPathwayExpressionPlotData($axios, plotOptions) {
    return $axios.get(
      'api/v1/pathway-expression/'.concat(
        '?pathway_set=' + plotOptions.pathwaySet.toString(),
        '&pathway_name=' + plotOptions.name.toString(),
        '&tissue=' + plotOptions.tissue_source.toString(),
        '&study=' + plotOptions.study_id.toString(),
        '&week=' + plotOptions.time_point.toString(),
        '&effname=' + plotOptions.responderMeasure,
        '&effweek=' + plotOptions.responderTime
      )
    )
  },
  getPathwayExpressionPlotOptions($axios, plotOptions) {
    return $axios.get(
      'api/v1/plot-options/pathway-expression/'.concat(
        '?study=' + plotOptions.studyList.toString()
      )
    )
  },
  getPathways($axios) {
    return $axios.get('api/v1/plot-options/all-pathways/')
  },
  getBiomarkerNames($axios, selectedStudies) {
    return $axios.get(
      'api/v1/plot-options/all-biomarker-names/'.concat(
        '?study=' + selectedStudies.toString()
      )
    )
  },
  getBiomarkerPlotOptions($axios, studyList) {
    return $axios.get(
      'api/v1/plot-options/biomarkers/'.concat('?study=' + studyList.toString())
    )
  },
  getBiomarkerMetadataOptions($axios, studyList) {
    return $axios
      .get('/biomarkers-metadata/'.concat('?study=' + studyList.toString()))
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getBiomarkerPlotData($axios, plotOptions) {
    return $axios.get(
      'api/v1/biomarkers/'.concat(
        '?study=' + plotOptions.study_id.toString(),
        '&biomarker=' + plotOptions.name.replace(',', '|||'), // This assumes only one biomarker is being sent.
        '&week=' + plotOptions.time_point.toString(),
        '&effname=' + plotOptions.responderMeasure,
        '&effweek=' + plotOptions.responderTime
      )
    )
  },
  getBiomarkerPlotDataWithoutWeek($axios, plotOptions) {
    return $axios.get(
      'api/v1/biomarkers/'.concat(
        '?study=' + plotOptions.study_id.toString(),
        '&biomarker=' + plotOptions.name.replace(',', '|||')
      )
    )
  },
  getBiomarkerPlotDataWithoutEfficiency($axios, plotOptions) {
    return $axios
      .get(
        '/biomarkers/'.concat(
          '?study=' + plotOptions.study_id.toString(),
          '&biomarker=' + plotOptions.name.replace(',', '|||'),
          '&week=' + plotOptions.time_point.toString()
        )
      )
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getGeneIDs($axios) {
    return $axios.get('api/v1/plot-options/all-gene-ids/')
  },
  getGeneAlias($axios, searchString) {
    return $axios.get(
      'api/v1/plot-options/all-gene-alias?query=' + searchString
    )
  },
  getGeneMetadataOptions($axios, studyList) {
    return $axios
      .get(
        '/gene-expression-metadata/'.concat('?study=' + studyList.toString())
      )
      .catch((error) => {
        console.log('There was an error: ' + error.response)
      })
  },
  getDiffExpressionPlotOptions($axios, studyList) {
    return $axios.get(
      'api/v1/plot-options/differential-gene-expression/'.concat(
        '?study=' + studyList.toString()
      )
    )
  },
  getDiffExpressionPlotData($axios, plotOptions) {
    const minTreatment = plotOptions.min_treatment
      .replace('+', '^^^')
      .replace(',', '|||')
    let queryString = 'api/v1/differential-gene-expression/'.concat(
      '?tissue=' + plotOptions.tissue_source.toString(),
      '&study=' + plotOptions.study_id.toString(),
      '&first_week=' + plotOptions.first_time_point.toString(),
      '&second_week=' + plotOptions.second_time_point.toString(),
      '&min_treatment=' + minTreatment
    )
    if (plotOptions.sub_treatment) {
      const subTreatment = plotOptions.sub_treatment
        .replace('+', '^^^')
        .replace(',', '|||')
      queryString += '&sub_treatment=' + subTreatment
    }
    return $axios.get(queryString)
  },
  getEfficacyMeasureOptions($axios, studyList) {
    return $axios.get(
      'api/v1/plot-options/efficacy/'.concat(
        '?study=' + studyList.toString(),
        '&binary=True'
      )
    )
  },
  getBiomarkerCorrelationData($axios, plotOptions) {
    return $axios.get(
      'api/v1/biomarker-correlation/'.concat(
        '?study=' + plotOptions.study_id.toString(),
        '&week=' + plotOptions.time_point.toString()
      )
    )
  },
  getBiomarkerCorrelationScatterData($axios, plotOptions) {
    return $axios.get(
      'api/v1/biomarker-measure/'.concat(
        '?study=' + plotOptions.study_id.toString(),
        '&week=' + plotOptions.time_point.toString(),
        '&biomarker=' + plotOptions.biomarker.toString(),
        '&measure_name=' + plotOptions.measureName.toString(),
        '&measure_type=' + plotOptions.measureType.toString(),
        '&measure_week=' + plotOptions.measureTimePoint.toString()
      )
    )
  },
  getCovid19SearchQuery($axios, query) {
    return $axios.get('api/v1/covid-19-papers/'.concat('?query=' + query))
  },
}
