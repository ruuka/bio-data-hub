<template>
  <div>
    <!-- START SUMMARY TABLE SECTION -->
    <div class="w-full mt-2">
      <!--      <h4 class="font-medium px-3 py-2 leading-tight text-black">-->
      <!--        {{ currentPageRecords[0].TA }}-->
      <!--      </h4>-->
    </div>

    <table class="w-full bg-base-100 rounded">
      <thead>
        <tr class="text-[14px] font-medium">
          <td class="w-full bg-[#644ded14] px-2 py-3">
            <div class="flex justify-between items-center">
              <div class="flex-1 flex gap-2 items-center">
                <span>Study</span>
                <span @click="sortList('study_id')">
                  <svg
                    class="h-[10px] hover:opacity-50 hover:cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M150.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 141.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96zm352 333.3c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L416 370.7V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V370.7l-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </td>
          <!--          <td class="bg-[#644ded14] px-2 py-3 gap-2">-->
          <!--          </td>-->
          <!--          <td class="bg-[#644ded14] px-2 py-3">-->
          <!--          </td>-->
          <td class="bg-[#644ded14] px-2 py-3 w-20">
            <div class="flex-1 flex gap-2 items-center">
              <span>Samples</span>
              <span @click="sortList('samples')">
                <svg
                  class="h-[10px] hover:opacity-50 hover:cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M150.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 141.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96zm352 333.3c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L416 370.7V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V370.7l-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96z"
                  />
                </svg>
              </span>
            </div>
          </td>
          <td class="bg-[#644ded14] px-2 py-3 w-1/5"></td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in currentTableData"
          :key="`item` + index"
          class="text-[12px] hover:bg-base-200"
        >
          <td class="w-1/4 px-2 py-3">
            <div
              class="flex gap-2 hover:text-primary cursor-pointer items-center"
              :class="äctiveId === item.study_id ? 'text-primary' : ''"
              @click="äctiveId = item.study_id"
            >
              <span>{{ item.study_id }}</span>
            </div>
          </td>
          <!--          <td class="px-2 py-3">{{ item.phase }}</td>-->
          <!--          <td class="px-2 py-3">{{ item.product }}</td>-->
          <td class="px-2 py-3">{{ item.samples }}</td>
          <td class="px-2 py-3">
            <div class="flex gap-2 items-center">
              <a href="" class="tooltip tooltip-left" :data-tip="item.Title"
                ><svg
                  class="h-[16px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"
                  /></svg
              ></a>

              <a
                href="#"
                class="tooltip tooltip-left"
                data-tip="Biomarker Coming Soon"
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
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>

              <a
                v-if="äctiveId === item.study_id"
                href="#"
                class="tooltip tooltip-left"
                data-tip="Make Plot Coming Soon"
              >
                <svg
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zM192 192c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zm128 64c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm64 96c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zm64-224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM160 352c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"
                  />
                </svg>
              </a>
              <!--              <button-->
              <!--                v-if="äctiveId === item.study_id"-->
              <!--                class="px-2 py-1 gap-2 text-sm bg-primary rounded text-white tooltip tooltip-left"-->
              <!--                data-tip="Coming Soon"-->
              <!--                :href="baseURL"-->
              <!--                target="_blank"-->
              <!--              >-->
              <!--                Make Plot-->
              <!--              </button>-->
            </div>
          </td>
        </tr>
        <tr>
          <td class="px-2 py-3" colspan="7">
            <div class="flex items-center justify-between">
              <!-- <p>Page {{ currentPage }} of {{ pages }} (10 results per page)</p>-->
              <!--              <div class="flex gap-4">-->
              <!--                <button-->
              <!--                  class="bg-primary text-sm flex items-center justify-center rounded text-white h-6 w-6 rounded-full shadow disabled:opacity-50"-->
              <!--                  :disabled="currentPage == 1"-->
              <!--                  @click.prevent="currentPage&#45;&#45;"-->
              <!--                >-->
              <!--                  <svg-->
              <!--                    xmlns="http://www.w3.org/2000/svg"-->
              <!--                    fill="none"-->
              <!--                    viewBox="0 0 24 24"-->
              <!--                    stroke-width="1.5"-->
              <!--                    stroke="currentColor"-->
              <!--                    class="w-4 h-4"-->
              <!--                  >-->
              <!--                    <path-->
              <!--                      stroke-linecap="round"-->
              <!--                      stroke-linejoin="round"-->
              <!--                      d="M15.75 19.5L8.25 12l7.5-7.5"-->
              <!--                    />-->
              <!--                  </svg>-->
              <!--                </button>-->
              <!--                <button-->
              <!--                  class="bg-primary text-sm rounded h-6 w-6 flex items-center justify-center text-white rounded-full shadow disabled:opacity-50"-->
              <!--                  :disabled="currentPage == pages"-->
              <!--                  @click.prevent="currentPage++"-->
              <!--                >-->
              <!--                  <svg-->
              <!--                    xmlns="http://www.w3.org/2000/svg"-->
              <!--                    fill="none"-->
              <!--                    viewBox="0 0 24 24"-->
              <!--                    stroke-width="1.5"-->
              <!--                    stroke="currentColor"-->
              <!--                    class="w-4 h-4"-->
              <!--                  >-->
              <!--                    <path-->
              <!--                      stroke-linecap="round"-->
              <!--                      stroke-linejoin="round"-->
              <!--                      d="M8.25 4.5l7.5 7.5-7.5 7.5"-->
              <!--                    />-->
              <!--                  </svg>-->
              <!-- </button>-->
              <!--              </div> -->
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
      perPage: 50,
      currentPage: 1,
      äctiveId: null,
      sortedData: [],
      sortedbyASC: true,
    }
  },
  computed: {
    t_areas() {
      const tAreas = this.sortedData.map((item) => {
        return item.TA
      })
      return [...new Set(tAreas)]
    },
    totalRecords() {
      return this.sortedData.length
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
      return this.sortedData
    },
  },
  created() {
    this.sortedData = this.currentTableData
    console.log(this.sortedData)
  },
  methods: {
    sortList(sortBy) {
      if (this.sortedbyASC) {
        this.sortedData.sort((x, y) => (x[sortBy] > y[sortBy] ? -1 : 1))
        this.sortedbyASC = false
      } else {
        this.sortedData.sort((x, y) => (x[sortBy] < y[sortBy] ? -1 : 1))
        this.sortedbyASC = true
      }
    },
  },
}
</script>
