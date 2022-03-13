export default {
  getPublications($axios) {
    return $axios.get('/api/v1/publications/')
  },
}
