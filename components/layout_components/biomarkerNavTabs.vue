<template>
  <v-tabs fixed-tabs class="my-3">
    <v-tab nuxt to="/clinical-trials/biomarkers/box-plot">Box Plots</v-tab>
    <v-tab nuxt to="/clinical-trials/biomarkers/longitudinal">
      Longitudinal Data
    </v-tab>
    <v-tab nuxt to="/clinical-trials/biomarkers/correlations">
      Correlations
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: 'BiomarkerNavTabs',
}
</script>
