<template>
  <div class="flex w-full bg-[#F9F9FC] p-3">
    <div class="w-full h-full overflow-y-auto">
      <breadcrumbs title="breadcrumb" />
      <section class="my-2">
        <!-- START SUMMARY TABLE SECTION -->
        <div class="w-full mt-2">
          <h4 class="font-bold mb-2">
            Nash - Inflammation/Respiratory
          </h4>
        </div>

        <!-- START SEARCH COMPONENT  -->
        <div class="flex w-1/4 gap-4 items-center mb-2">
          <input
            type="text"
            v-model="searchTerm"
            class="flex-1 bg-[#F3F3F8] text-sm rounded px-2 py-2 text-[#7B797D] placeholder-[#7B797D]"
            placeholder="Search..."
          />
        </div>
        <!-- END SEARCH COMPONENT -->

        <table class="w-full border border-collapse">
          <thead>
          <tr class="text-sm font-medium">
            <td class="w-1/4 border bg-[#644ded14] px-2 py-3">
              <div class="flex justify-between items-center">
                <div class="flex-1 flex gap-2 items-center">
                  <span>Study ID</span>
                </div>
              </div>
            </td>
            <td class="border px-2 py-3">Phase</td>
            <td class="border px-2 py-3">TA</td>
            <td class="border px-2 py-3">Product</td>
            <td class="border px-2 py-3">Samples</td>
            <td class="border px-2 py-3"></td>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="(item, index) in currentPageRecords"
            :key="`item` + index"
            class="text-[12px]"
          >
            <td class="w-1/4 border bg-[#644ded14] px-2 py-3">
              <div class="flex gap-2 utems-center">
                <span>{{ item.trialID }}</span>
              </div>
            </td>
            <td class="border px-2 py-3">P2</td>
            <td class="border px-2 py-3">Inflammation/Respiratory</td>
            <td class="border px-2 py-3">NASH Combination</td>
            <td class="border px-2 py-3">425</td>
            <td class="border px-2 py-3">
              <a
                href="#"
                class="text-[#644DED]"
                title="A Phase 2, Randomized, Double-blind, Placebo-Controlled Study evaluating the safety and efficacy of Selonsertib, GS-0976, GS-9674, and Combinations in subjects with bridging (F3) Fibrosis or Compensated Cirrhosis (F4) due to Nonalcoholic Steatohepatitis (NASH)"
              ><svg
                class="h-[16px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"
                /></svg
              ></a>
              <a :href="baseURL + item.id" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </td>
          </tr>
          <tr>
            <td class="border px-2 py-3" colspan="7">
              <div class="flex items-center justify-between text-xs">
                <p>
                  Page {{ currentPage }} of {{ pages }} (10 results per page)
                </p>
                <div class="flex gap-4">
                  <button
                    class="bg-primary text-sm flex items-center justify-center rounded text-white h-6 w-6 rounded-full shadow disabled:opacity-50"
                    :disabled="currentPage == 1"
                    @click.prevent="currentPage--"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                  <button
                    class="bg-primary text-sm rounded h-6 w-6 flex items-center justify-center text-white rounded-full shadow disabled:opacity-50"
                    :disabled="currentPage == pages"
                    @click.prevent="currentPage++"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
        <!-- END SUMMARY TABLE SECTION -->

        <!-- START SUMMARY TABLE SECTION -->
        <!--        <div class="w-full mt-2">-->
        <!--          <h4 class="font-medium px-3 py-2 leading-tight text-black">-->
        <!--            Indication: HPV Cure - TA: Virology-->
        <!--          </h4>-->
        <!--        </div>-->
        <!--        <table class="w-full border border-collapse">-->
        <!--          <thead>-->
        <!--          <tr class="text-[12px] font-bold">-->
        <!--            <td class="w-1/4 border bg-[#644ded14] px-2 py-3">-->
        <!--              <div class="flex justify-between items-center">-->
        <!--                <div class="flex-1 flex gap-2 items-center">-->
        <!--                  <span>Study ID</span>-->
        <!--                </div>-->
        <!--              </div>-->
        <!--            </td>-->
        <!--            <td class="border px-2 py-3">Phase</td>-->
        <!--            <td class="border px-2 py-3">TA</td>-->
        <!--            <td class="border px-2 py-3">Product</td>-->
        <!--            <td class="border px-2 py-3">Samples</td>-->
        <!--            <td class="border px-2 py-3"></td>-->
        <!--          </tr>-->
        <!--          </thead>-->
        <!--          <tbody>-->
        <!--          <tr-->
        <!--            v-for="(item, index) in currentPageRecords"-->
        <!--            :key="`item` + index"-->
        <!--            class="text-[12px]"-->
        <!--          >-->
        <!--            <td class="w-1/4 border bg-[#644ded14] px-2 py-3">-->
        <!--              <div class="flex gap-2 utems-center">-->
        <!--                <span>{{ item.trialID }}</span>-->
        <!--              </div>-->
        <!--            </td>-->
        <!--            <td class="border px-2 py-3">P2</td>-->
        <!--            <td class="border px-2 py-3">Inflammation/Respiratory</td>-->
        <!--            <td class="border px-2 py-3">NASH Combination</td>-->
        <!--            <td class="border px-2 py-3">425</td>-->
        <!--            <td class="border px-2 py-3">-->
        <!--              <a-->
        <!--                :href="baseURL + item.id"-->
        <!--                target="_blank"-->
        <!--                class="text-[#644DED]"-->
        <!--                title="A Phase 2, Randomized, Double-blind, Placebo-Controlled Study evaluating the safety and efficacy of Selonsertib, GS-0976, GS-9674, and Combinations in subjects with bridging (F3) Fibrosis or Compensated Cirrhosis (F4) due to Nonalcoholic Steatohepatitis (NASH)"-->
        <!--              ><svg-->
        <!--                class="h-[16px]"-->
        <!--                xmlns="http://www.w3.org/2000/svg"-->
        <!--                viewBox="0 0 512 512"-->
        <!--              >-->
        <!--                <path-->
        <!--                  d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"-->
        <!--                /></svg-->
        <!--              ></a>-->
        <!--              <a href="">-->
        <!--                <svg-->
        <!--                  xmlns="http://www.w3.org/2000/svg"-->
        <!--                  fill="none"-->
        <!--                  viewBox="0 0 24 24"-->
        <!--                  stroke-width="1.5"-->
        <!--                  stroke="currentColor"-->
        <!--                  class="w-4 h-4"-->
        <!--                >-->
        <!--                  <path-->
        <!--                    stroke-linecap="round"-->
        <!--                    stroke-linejoin="round"-->
        <!--                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"-->
        <!--                  />-->
        <!--                </svg>-->
        <!--              </a>-->
        <!--            </td>-->
        <!--          </tr>-->
        <!--          <tr>-->
        <!--            <td class="border px-2 py-3" colspan="7">-->
        <!--              <div class="flex items-center justify-between">-->
        <!--                <p>-->
        <!--                  Page {{ currentPage }} of {{ pages }} (10 results per page)-->
        <!--                </p>-->
        <!--                <div class="flex gap-4">-->
        <!--                  <button-->
        <!--                    class="bg-primary text-sm flex items-center justify-center rounded text-white h-6 w-6 rounded-full shadow disabled:opacity-50"-->
        <!--                    :disabled="currentPage == 1"-->
        <!--                    @click.prevent="currentPage&#45;&#45;"-->
        <!--                  >-->
        <!--                    <svg-->
        <!--                      xmlns="http://www.w3.org/2000/svg"-->
        <!--                      fill="none"-->
        <!--                      viewBox="0 0 24 24"-->
        <!--                      stroke-width="1.5"-->
        <!--                      stroke="currentColor"-->
        <!--                      class="w-4 h-4"-->
        <!--                    >-->
        <!--                      <path-->
        <!--                        stroke-linecap="round"-->
        <!--                        stroke-linejoin="round"-->
        <!--                        d="M15.75 19.5L8.25 12l7.5-7.5"-->
        <!--                      />-->
        <!--                    </svg>-->
        <!--                  </button>-->
        <!--                  <button-->
        <!--                    class="bg-primary text-sm rounded h-6 w-6 flex items-center justify-center text-white rounded-full shadow disabled:opacity-50"-->
        <!--                    :disabled="currentPage == pages"-->
        <!--                    @click.prevent="currentPage++"-->
        <!--                  >-->
        <!--                    <svg-->
        <!--                      xmlns="http://www.w3.org/2000/svg"-->
        <!--                      fill="none"-->
        <!--                      viewBox="0 0 24 24"-->
        <!--                      stroke-width="1.5"-->
        <!--                      stroke="currentColor"-->
        <!--                      class="w-4 h-4"-->
        <!--                    >-->
        <!--                      <path-->
        <!--                        stroke-linecap="round"-->
        <!--                        stroke-linejoin="round"-->
        <!--                        d="M8.25 4.5l7.5 7.5-7.5 7.5"-->
        <!--                      />-->
        <!--                    </svg>-->
        <!--                  </button>-->
        <!--                </div>-->
        <!--              </div>-->
        <!--            </td>-->
        <!--          </tr>-->
        <!--          </tbody>-->
        <!--        </table>-->
        <!-- END SUMMARY TABLE SECTION -->
      </section>

    </div>
  </div>
</template>

<script>
import newAPIService from '~/services/newAPIService.js'
import Carousel from '../components/publication_components/Carousel.vue'
import WhatsTrending from '../components/publication_components/WhatsTrending.vue'
import publicationsCard from '../components/publication_components/publicationsCard.vue'
import breadcrumbs from '../components/layout_components/breadcrumbs.vue'

export default {
  name: 'ClinicalBioinformatics',
  components: {
    Carousel,
    WhatsTrending,
    publicationsCard,
    breadcrumbs,
  },
  data() {
    return {
      pageTitle: 'Bioinformatics Data Hub - Clinical Bioinformatics',
      pageSubTitle: "A portal to access and analyze Gilead's molecular data.",
      isSplideLoaded: false,
      baseURL: 'http://sjggpappprdn09:8000/api/v1/publication/download/',
      searchTerm: null,
      perPage: 5,
      currentPage: 1,
      filterTags: [
        {
          name: 'BAR',
          checked: false,
        },
        {
          name: 'BAP',
          checked: false,
        },
        {
          name: 'Abstracts',
          checked: false,
        },
        {
          name: 'Manucripts',
          checked: false,
        },
        {
          name: 'Posters',
          checked: false,
        },
        {
          name: 'Oral Presentation',
          checked: false,
        },
      ],
      publications: null,
      tableData: [],
      data: [
        {
          study_id: 'GS-US-454-4378',
          phase: 'P2',
          indication: 'NASH',
          TA: 'Inflammation/Respiratory',
          Title:
            'A Phase 2, Randomized, Double-blind, Placebo-Controlled Study evaluating the safety and efficacy of Selonsertib, GS-0976, GS-9674, and Combinations in subjects with bridging (F3) Fibrosis or Compensated Cirrhosis (F4) due to Nonalcoholic Steatohepatitis (NASH)',
          product: 'NASH Combination',
          samples: 425,
        },
        {
          "study_id": "GS-US-464-4437",
          "phase": "P2",
          "indication": "HBV Cure",
          "TA": "Virology",
          "Title": "A Phase 2, Randomized, Open-Label, Active-Controlled Study to Evaluate the Antiviral Activity of GS-9992 Plus Tenofovir Alafenamide (TAF) for 12 Weeks in Chronic Hepatitis B (CHB) Subjects",
          "product": "GS-9992 Inarigivir (IRIG)",
          "samples": 842
        },
        {
          "study_id": "GS-US-439-4660",
          "phase": "P1",
          "indication": "HBV Cure",
          "TA": "Virology",
          "Title": "A Phase 1 Study to Evaluate the Safety, Tolerability,\nPharmacokinetics (PK) and Pharmacodynamics (PD) of GS-4224 in\nHealthy Volunteers and Subjects with the Chronic Hepatitis B (CHB)\nVirus",
          "product": "GS-4224 PD-L1 SM",
          "samples": 974
        },
      ],
    }
  },
  computed: {
    totalRecords() {
      return this.tableData.length
    },
    currentRecords() {
      return this.perPage > this.totalRecords ? this.totalRecords : this.perPage
    },
    currentPageRecords() {
      const start = (this.currentPage - 1) * this.perPage
      const end = start + this.perPage
      return this.filteredData.slice(start, end)
    },
    pages() {
      return Math.ceil(this.totalRecords / this.perPage)
    },
    filteredData() {
      if (this.filterTags.every((item) => !item.checked)) {
        return this.tableData
      }

      const checkedFilters = this.filterTags.filter((item) => item.checked)

      return this.tableData.filter((pub) => {
        return checkedFilters.some(
          (checkeditem) =>
            checkeditem.name.toLowerCase() == pub.type.toLowerCase()
        )
      })
    },
  },
  watch: {
    searchTerm() {
      this.filteredRows()
    },
  },
  methods: {
    filteredRows() {
      this.searchTerm = this.searchTerm ? this.searchTerm.toLowerCase() : ''
      if (this.searchTerm && this.searchTerm.length > 0) {
        newAPIService
          .getPublicationData(this.$axios, this.searchTerm)
          .then((res) => {
            this.tableData = res.data ?? []
            // return this.tableData;
          })

        // return this.tableData;
      } else {
        newAPIService.getPublicationData(this.$axios, '').then((res) => {
          this.tableData = res.data ?? []
          // return this.tableData;
        })

        // return this.tableData;
      }
    },
  },

  mounted() {
    newAPIService.getAllPublications(this.$axios).then((res) => {
      this.tableData = res.data
    })
    newAPIService.getTrendingPublications(this.$axios).then((res) => {
      this.publications = res.data
    })
  },
  head() {
    const title = 'Bioinformatics Data Hub - Summary Table'
    return {
      title,
      script: [
        {
          // FAQ
          hid: 'splide',
          src: 'https://cdn.jsdelivr.net/npm/@splidejs/splide@3.6.12/dist/js/splide.min.js',
          defer: false,
          callback: () => {
            this.isSplideLoaded = true
          },
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@splidejs/splide@3.6.12/dist/css/splide.min.css',
        },
      ],
    }
  },
}
</script>
