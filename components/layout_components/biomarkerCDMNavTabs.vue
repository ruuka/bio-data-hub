<template>
  <v-tabs fixed-tabs class="my-3">
    <v-tab nuxt to="/biomarker-cdm/submit-query">Submit Query</v-tab>
    <v-tab nuxt to="/biomarker-cdm/upload-database"> Upload Database </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: 'BiomarkerCDMNavTabs',
}
</script>
