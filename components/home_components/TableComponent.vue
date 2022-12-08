<template>
  <div>
    <!-- START SUMMARY TABLE SECTION -->
    <div class="w-full mt-2">
      <h4 class="font-medium px-3 py-2 leading-tight text-black">
        Indication: {{ currentPageRecords[0].indication }} - TA:{{
          currentPageRecords[0].TA
        }}
      </h4>
    </div>

    <table class="w-full border border-collapse">
      <thead>
        <tr class="text-[12px] font-bold">
          <td class="w-1/4 border bg-[#644ded14] px-2 py-3">
            <div class="flex justify-between items-center">
              <div class="flex-1 flex gap-2 items-center">
                <span>Study ID</span>
              </div>
            </div>
          </td>
          <td class="border px-2 py-3">Phase</td>

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
            <div
              class="flex gap-2 hover:text-primary cursor-pointer items-center"
              :class="äctiveId === item.study_id ? 'text-primary' : ''"
              @click="äctiveId = item.study_id"
            >
              <span>{{ item.study_id }}</span>
            </div>
          </td>
          <td class="border px-2 py-3">{{ item.phase }}</td>

          <td class="border px-2 py-3">{{ item.product }}</td>
          <td class="border px-2 py-3">{{ item.samples }}</td>
          <td class="border px-2 py-3">
            <div class="flex gap-2 items-center">
              <a
                :href="baseURL + item.id"
                target="_blank"
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
              <a href="">
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
              <button
                v-if="äctiveId === item.study_id"
                class="px-2 py-1 text-sm bg-primary rounded text-white"
              >
                Make Plot
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td class="border px-2 py-3" colspan="7">
            <div class="flex items-center justify-between">
              <p>Page {{ currentPage }} of {{ pages }} (10 results per page)</p>
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
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
  props: {
    baseURL: {
      type: String,
      default: '',
    },

    currentTableData: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      searchTerm: null,
      perPage: 5,
      currentPage: 1,
      äctiveId: null,
    }
  },
  computed: {
    t_areas() {
      const tAreas = this.currentTableData.map((item) => {
        return item.TA
      })
      return [...new Set(tAreas)]
    },
    totalRecords() {
      return this.currentTableData.length
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
      return this.currentTableData
    },
  },
}
</script>
