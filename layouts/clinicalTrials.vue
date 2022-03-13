<template>
  <v-app light>
    <NavBars />
    <v-main>
      <TitleSection :title="pageTitle" :subtitle="pageSubTitle" />
      <v-container class="mx-7">
        <v-tabs fixed-tabs class="my-3">
          <v-tab nuxt to="/clinical-trials/dataset-selection">
            Dataset Selection
          </v-tab>
          <v-tab
            :disabled="!areStudiesSelected"
            nuxt
            to="/clinical-trials/dataset-explorer"
          >
            Dataset Exploration
          </v-tab>
          <v-tab
            :disabled="
              !areGeneExpressionStudies && !areDiffGeneExpressionStudies
            "
            nuxt
            to="/clinical-trials/expression/gene-expression"
          >
            Expression
          </v-tab>
          <v-tab
            :disabled="!areBiomarkerStudies"
            nuxt
            to="/clinical-trials/biomarkers/box-plot"
          >
            Biomarkers
          </v-tab>
          <!--          <v-tab
            :disabled="!areStudiesSelected"
            nuxt
            to="/clinical-trials/custom-plotter"
          >
            Custom Plot
          </v-tab>-->
        </v-tabs>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :inset="true" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavBars from '~/components/layout_components/navBars'
export default {
  name: 'ClinicalTrials',
  components: { NavBars },
  data() {
    return {
      title: 'Bioinformatics Portal',
    }
  },
  computed: {
    areStudiesSelected() {
      return this.$store.getters['clinical_trials/areStudiesSelected']
    },
    areBiomarkerStudies() {
      return this.$store.getters['clinical_trials/areBiomarkerStudies']
    },
    areGeneExpressionStudies() {
      return this.$store.getters['clinical_trials/areGeneExpressionStudies']
    },
    areDiffGeneExpressionStudies() {
      return this.$store.getters[
        'clinical_trials/areDiffGeneExppressionStudies'
      ]
    },
    pageTitle() {
      return this.$route.matched.map((r) => {
        return r.components.default.options
          ? r.components.default.options.pageTitle
          : r.components.default.pageTitle
      })[0]
    },
    pageSubTitle() {
      return this.$route.matched.map((r) => {
        return r.components.default.options
          ? r.components.default.options.pageSubTitle
          : r.components.default.pageSubTitle
      })[0]
    },
  },
}
</script>
