<template>
  <div class="flex">
    <leftMenu @selected-filters="handleSelectedFilters" />
    <div class="flex w-full bg-[#F9F9FC]">
      <div class="w-full h-full overflow-y-auto px-2 py-4">
        <breadcrumbs title="breadcrumb" />
        <section class="my-5">
          <!-- START SEARCH COMPONENT  -->
          <div class="flex w-1/2 gap-4 items-center mb-2">
            <input
              type="text"
              v-model="searchTerm"
              class="flex-1 bg-[#F3F3F8] text-sm rounded px-2 py-2 text-[#7B797D] placeholder-[#7B797D]"
              placeholder="Search..."
            />
          </div>
          <!-- END SEARCH COMPONENT -->

          <TableComponent
            :title="'title'"
            :current-table-data="getStudiesByTheraputicArea"
          />

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
  </div>
</template>

<script>
import breadcrumbs from '../components/layout_components/breadcrumbs.vue'
import jsonData from '../store/simulated_data_for_ruuka.json'
// import newAPIService from '~/services/newAPIService.js'
import leftMenu from '~/components/layout_components/leftMenu.vue'
import TableComponent from '~/components/home_components/TableComponent.vue'
export default {
  name: 'SummaryPage',
  components: {
    TableComponent,
    breadcrumbs,
    leftMenu,
  },
  layout: 'newLayout',
  data() {
    return {
      pageTitle: 'Bioinformatics Data Hub - Summary',
      pageSubTitle: "A portal to access and analyze Gilead's molecular data.",
      isSplideLoaded: false,
      baseURL: '',
      searchTerm: null,
      perPage: 20,
      currentPage: 1,
      jsonData,
      filterTags: [],
      publications: null,
      tableData: [],
      data: [
        // {
        //   study_id: 'GS-US-454-4378',
        //   phase: 'P2',
        //   indication: 'NASH',
        //   TA: 'Inflammation/Respiratory',
        //   Title:
        //     'A Phase 2, Randomized, Double-blind, Placebo-Controlled Study evaluating the safety and efficacy of Selonsertib, GS-0976, GS-9674, and Combinations in subjects with bridging (F3) Fibrosis or Compensated Cirrhosis (F4) due to Nonalcoholic Steatohepatitis (NASH)',
        //   product: 'NASH Combination',
        //   samples: 425,
        // }
      ],
    }
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
  computed: {
    t_areas() {
      const tAreas = this.tableData.map((item) => {
        return item.TA
      })
      return [...new Set(tAreas)].sort(function (a, b) {
        const nameA = a.toLowerCase()
        const nameB = b.toLowerCase()
        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0
      })
    },
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
    getStudiesByTheraputicArea() {
      return this.tableData
    },
    filteredData() {
      if (this.filterTags.every((item) => !item.checked)) {
        return this.tableData
      }

      const checkedFilters = this.filterTags.filter((item) => item.checked)

      return this.tableData.filter((pub) => {
        return checkedFilters.some(
          (checkeditem) =>
            checkeditem.name.toLowerCase() === pub.type.toLowerCase()
        )
      })
    },
  },
  watch: {
    searchTerm() {
      this.filteredRows()
    },
  },
  created() {
    this.tableData = jsonData
  },
  methods: {
    handleSelectedFilters(selectedFilters) {
      console.log('study-1', this.getFilteredData(selectedFilters))
    },
    getFilteredData(selectedFilters) {
      return this.tableData.filter((item) => {
        return (
          selectedFilters.includes(item.TA.toLowerCase()) ||
          selectedFilters.includes(item.phase.toLowerCase()) ||
          selectedFilters.includes(item.product.toLowerCase())
        )
      })
    },
    filteredRows() {
      this.searchTerm = this.searchTerm ? this.searchTerm.toLowerCase() : ''

      const searchTerm =
        this.searchTerm !== null ? this.searchTerm?.toLowerCase() : ''

      if (searchTerm === '') {
        this.tableData = this.jsonData
      }
      const data = this.jsonData.filter((item) => {
        const values = Object.values(item)
        console.log('values', values)
        for (let index = 0; index < values.length; index++) {
          const element = values[index]?.toString().toLowerCase()
          if (element.includes(searchTerm)) {
            return true
          }
        }
        return false
      })

      this.tableData = data
      return data
    },
  },
}
</script>
