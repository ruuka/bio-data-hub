<template>
  <!-- START TABLE TABS SECTION -->
  <section class="mt-36 pb-10">
    <div class="container mx-auto">
      <div class="wrapper-tab w-full">
        <ul class="tab-list flex space-x-6">
          <li
            v-for="(disease, index) in data"
            :key="index"
            :class="
              active === index ? 'border-indigo-500 ' : 'border-transparent'
            "
            @click="active = index"
            class="py-3 text-gray-900 border-b cursor-pointer hover:border-indigo-500"
          >
            {{ disease.type }}
          </li>
        </ul>
      </div>

      <template v-for="(disease, index) in data">
        <table-tab-body :key="index" :info="disease" v-if="active === index" />
      </template>
    </div>
  </section>
  <!-- END TABLE TABS SECTION -->
</template>

<script>
import TableTabBody from './TableTabBody.vue'
export default {
  data() {
    return {
      active: 0,
      data: [
        {
          type: 'Viral Diseases',
          title: 'Gilead Internal Studies',
          list: [
            {
              study: 'ISBCovID19',
              indication: 'Covid19',
              description: `ISB CovID-19 Patient Data Explorer`,
              dashboard: 'ISB_ExploratoryDashboard',
              url: '/test',
            },
            { // copy from here
              study: 'GS-US-389-2024 & 2025',
              indication: 'HBV',
              description: `A Phase 2, Randomized, Double-Blind, Placebo-Controlled, Multi-center Study to Evaluate the Safety,
              Tolerability and Antiviral Activity of GS-9688 in Virally-Suppressed Subjects with Chronic Hepatitis B`,
              dashboard: 'HBV_389_microbiome_dashboard_05Apr2021',
              // dashboard: 'HBV_Multistudy_Cytokine_Dashboard',
              // dashboard: 'SingleStudy_HBV',
              url: 'https://google.ca',
            }, // copy to here
          ],
        },
        {
          type: 'Inflammatory Diseases',
          title: 'Gilead Internal Studies',
          list: [
            {
              study: 'GS-US-223-1015',
              indication: 'DKD',
              description: `A Phase 2, Randomized, Double-Blind, Placebo-Controlled Study Evaluating the Efficacy, Safety and Tolerability of GS-4997 in Subjects with Stage 3 or 4 Diabetic Kidney Disease`,
              dashboard: 'Dashboard DKD Main',
              url: '',
            },
          ],
        },
        {
          type: 'Oncology',
          title: 'Gilead Internal Studies',
          list: [
            {
              study: 'N/A',
              indication: 'N/A',
              description: `No data available`,
              dashboard: '0',
              url: '',
            },
          ],
        },
      ],
    }
  },
  components: {
    TableTabBody,
  },
}
</script>
