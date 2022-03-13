<template>
  <v-tabs fixed-tabs class="my-3">
    <v-tab
      :disabled="!areGeneExpressionStudies"
      nuxt
      to="/clinical-trials/expression/gene-expression"
    >
      Gene Expression
    </v-tab>
    <v-tab
      :disabled="!arePathwayExpressionStudies"
      nuxt
      to="/clinical-trials/expression/pathway-expression"
    >
      Pathway Score
    </v-tab>
    <v-tab
      :disabled="!areDiffGeneExppressionStudies"
      nuxt
      to="/clinical-trials/expression/differential-gene-expression"
    >
      Diff. Expression
    </v-tab>
    <v-tab
      disabled
      nuxt
      to="/clinical-trials/expression/pathway-differential-gene-expression"
    >
      Pathway Diff. Expression
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: 'ExpressionNavTabs',
  computed: {
    areGeneExpressionStudies() {
      return this.$store.getters['clinical_trials/areGeneExpressionStudies']
    },
    arePathwayExpressionStudies() {
      return this.$store.getters['clinical_trials/arePathwayExpressionStudies']
    },
    areDiffGeneExppressionStudies() {
      return this.$store.getters[
        'clinical_trials/areDiffGeneExppressionStudies'
      ]
    },
    arePathwayDiffGeneExppressionStudies() {
      return this.$store.getters[
        'clinical_trials/arePathwayDiffGeneExppressionStudies'
      ]
    },
  },
}
</script>
