export default {
  getGeneData($axios, geneID) {
    return $axios.get(
      `efetch.fcgi?db=gene&id=${geneID}&rettype=docsum&retmode=xml`,
      { baseURL: 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/' }
    )
  },
  fixSearchQuery($axios, searchExpression) {
    return $axios.get(
      `espell.fcgi?term=${searchExpression}%20AND%20human&db=gene&api_key=c1ac9ad8a87f17b50bd6ee87b4fc397fcb09`,
      {
        baseURL: 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/',
      }
    )
  },
  requestBiomarkerNCBIStandardization($axios, biomarkers, emailAddress) {
    return $axios.get(
      `api/v1/biomarker-cdm/standardize-ncbi/?biomarkers=${biomarkers}&email=${emailAddress}`
    )
  },
  requestProteinUniprotStandardization($axios, uniprotCodes, emailAddress) {
    return $axios.get(
      `api/v1/biomarker-cdm/standardize-uniprot/?uniprot=${uniprotCodes}&email=${emailAddress}`
    )
  },
  requestDatabaseLookup($axios, query) {
    return $axios.get(`api/v1/biomarker-cdm/database-lookup/?query=${query}`)
  },
  patchStandardName($axios, pk, newValue) {
    return $axios.patch(
      `api/v1/biomarker-cdm/individual-standard-name/${pk}/`,
      {
        standard_name: newValue,
        source: 'Manually Entered',
      }
    )
  },
  uploadTestCodeLibrary($axios, file) {
    const formData = new FormData()
    formData.append('file', file)
    return $axios.post('api/v1/biomarker-cdm/update-database/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
  getStandardNames($axios, lookupType, query, emailAddress) {
    return $axios.post('api/v1/biomarker-cdm/get-standard-names/', {
      headers: { 'Content-Type': 'application/json' },
      data: {
        query,
        lookupType,
        emailAddress,
      },
    })
  },
}
