<template>
  <div class="lg:flex">
    <!-- Left Menu Start -->
    <div
      class="flex flex-col items-center h-full overflow-hidden text-gray-600 bg-white lg:w-64"
    >
      <!-- SIDEBAR -->
      <aside class="bg-white h-full flex flex-col gap-6 px-3 pt-3">
        <header>
          <div class="flex px-5 items-center justify-between">
            <div class="flex items-center gap-2">
              <svg
                class="fill-red h-5"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 30 30"
              >
                <path
                  d="M11 4 A 1.0001 1.0001 0 1 0 11 6L11 12L11 13L11 14L4.4511719 22.734375L4.4511719 22.736328 A 2 2 0 0 0 4 24 A 2 2 0 0 0 6 26L15 26L24 26 A 2 2 0 0 0 26 24 A 2 2 0 0 0 25.548828 22.736328 A 2 2 0 0 0 25.548828 22.734375L19 14L19 13L19 12L19 6 A 1.0001 1.0001 0 1 0 19 4L11 4 z M 13 6L17 6L17 12L13 12L13 6 z M 14 14C14.552 14 15 14.448 15 15C15 15.552 14.552 16 14 16C13.448 16 13 15.552 13 15C13 14.448 13.448 14 14 14 z M 17.5 20C18.328 20 19 20.672 19 21.5C19 22.328 18.328 23 17.5 23C16.672 23 16 22.328 16 21.5C16 20.672 16.672 20 17.5 20 z"
                />
              </svg>

              <p class="text-red font-semibold">Data Summary</p>
            </div>

            <button>
              <svg
                class="fill-dark-1 h-5 rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 30 30"
              >
                <path
                  d="M3,12v-2c0-0.386,0.223-0.738,0.572-0.904s0.762-0.115,1.062,0.13L15,17.708l10.367-8.482 c0.299-0.245,0.712-0.295,1.062-0.13C26.779,9.261,27,9.614,27,10v2c0,0.3-0.135,0.584-0.367,0.774l-11,9 c-0.369,0.301-0.898,0.301-1.267,0l-11-9C3.135,12.584,3,12.3,3,12z"
                />
              </svg>
            </button>
          </div>

          <div
            class="input-group px-2 mt-2 flex items-center gap-2 justify-between bg-[#f3f3f8]"
          >
            <input
              v-model="searchTerm"
              type="text"
              placeholder="Search ID, indication, component, nickname..."
              class="bg-transparent p-1 text-xs"
            />
            <button class="h-5 aspect-square mr-2">
              <svg
                class="h-5 fill-dark-1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 48 48"
              >
                <path
                  d="M20.5 6C12.509634 6 6 12.50964 6 20.5C6 28.49036 12.509634 35 20.5 35C23.956359 35 27.133709 33.779044 29.628906 31.75L39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453L31.75 29.628906C33.779044 27.133709 35 23.956357 35 20.5C35 12.50964 28.490366 6 20.5 6 z M 20.5 9C26.869047 9 32 14.130957 32 20.5C32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016C26.405717 30.776199 23.602614 32 20.5 32C14.130953 32 9 26.869043 9 20.5C9 14.130957 14.130953 9 20.5 9 z"
                />
              </svg>
            </button>
          </div>
        </header>

        <section
          v-if="filteredData && filteredData.length > 0"
          class="overflow-y-scroll flex flex-col gap-6 max-h-[640px]"
        >
          <!-- SELECTIONS -->

          <div
            v-for="item in t_areas"
            :key="item"
            class="flex flex-col gap-1 px-1 text-sm"
          >
            <p class="uppercase text-sm font-bold text-dark-1">{{ item }}</p>

            <!-- check -->
            <div
              v-for="protocol in getStudiesByTheraputicArea(item)"
              :key="protocol.study_id"
              class="input-group"
            >
              <label>
                <input
                  type="checkbox"
                  name="check"
                  class="accent-red flex-none h-5 w-5 disabled:opacity-20 rounded"
                  :checked="
                    selectedProtocol && selectedProtocol == protocol.study_id
                  "
                  @click="handleClick(protocol)"
                />
                <span class="flex items-center text-sm">{{
                  protocol.study_id
                }}</span></label
              >
            </div>

            <a
              href=""
              class="uppercase font-bold text-center mt-2 text-dark-2 text-xs"
              >show more</a
            >
          </div>
        </section>
      </aside>
    </div>
    <!-- Left Menu End  -->
  </div>
</template>

<script>
import newAPIService from '~/services/newAPIService'
import jsonData from '~/store/simulated_data_for_ruuka.json'
export default {
  name: 'LeftMenu',
  components: {},
  props: [],
  data() {
    return {
      allStudies: [],
      selectedProtocol: null,
      jsonData,
      searchTerm: '',
      tableData: [],
    }
  },
  head() {
    const title = 'Home'
    return {
      title,
    }
  },
  computed: {
    t_areas() {
      const tAreas = this.tableData.map((item) => {
        return item.TA
      })
      return [...new Set(tAreas)]
    },
    filteredData() {
      return this.tableData
    },
  },
  watch: {
    searchTerm() {
      this.filteredRows()
    },
  },
  mounted() {
    this.tableData = jsonData
  },
  methods: {
    getStudiesByTheraputicArea(therapeuticarea) {
      return this.tableData.filter((item) => {
        return item.TA === therapeuticarea
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

    handleClick(protocol) {
      this.selectedProtocol = protocol.study_id
      this.$emit('selected-study', protocol)
    },
  },
}
</script>
