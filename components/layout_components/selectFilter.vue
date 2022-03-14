<template>
  <div
    class="flex items-center justify-start flex-grow-0 flex-shrink-0 gap-2 pb-2"
  >
    <div
      class="relative flex items-center justify-start flex-grow-0 flex-shrink-0 gap-2"
    >
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="relative flex-grow-0 flex-shrink-0 w-5 h-5"
        preserveAspectRatio="none"
      >
        <path
          d="M15.2779 5.5H4.16675L8.61119 10.7556V14.3889L10.8334 15.5V10.7556L15.2779 5.5Z"
          stroke="#242533"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>

      <div
        v-for="filter in activeFilters"
        :key="'filter-' + filter.id"
        class="dropdown"
      >
        <template v-if="filter.isActive">
          <label
            tabindex="0"
            class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1 pl-3 pr-2.5 py-2 rounded-lg bg-rose-50 font-medium text-xs hover:bg-rose-100  hover:cursor-pointer"
          >
            <span>{{ filter.name }}:&nbsp; </span>
            <!-- again, because of a conflict in my vs code and eslint i think, i can't use v-for loop and key property inside template -->
            <!-- otherwise, ideally, you'd v-for inside the template and do a v-if="option.isActive" inside the span tag -->
            <!-- as a "hack", i'm filtering below -->
            <span
              v-for="(option, optIdx) in filter.filterOptions.filter(
                (o) => o.isActive
              )"
              :key="'filter-' + filter.id + 'option-' + option.text"
            >
              {{ option.text }}
              <template v-if="optIdx < filter.filterOptions.length - 1">
                ,
              </template>
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-x"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              @click="removeFilter(filter)"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </label>

          <div
            class="flex flex-col items-start justify-start p-2 shadow filter-dropdown-content dropdown-content menu bg-base-100 rounded-box w-300"
          >
            <h4 class="mb-2 text-xs font-semibold">
              Filtering: {{ filter.name }}
            </h4>

            <div tabindex="0">
              <client-only>
                <vue-tags-input
                  v-model="searchText"
                  :tags="filter.filterOptions"
                  :autocomplete-items="getAutocompleteItems(filter.id)"
                  class="tags-input"
                  placeholder="Select a filter option"
                  :autocomplete-always-open="true"
                  :add-only-from-autocomplete="true"
                  @tags-changed="(newTags) => onTagsChanged(newTags, filter)"
                >
                  <!-- leave this slot as empty element, otherwise the library's default close icon will show up -->
                  <!-- we're using our own svg icon below in the slot "tag-center" -->
                  <div slot="tag-actions"></div>

                  <div
                    slot="tag-center"
                    slot-scope="props"
                    class="gap-2 text-xs"
                  >
                    {{ props.tag.text }}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="inline-block w-4 h-4 cursor-pointer stroke-current"
                      @click.prevent="props.performDelete(props.index)"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </div>

                  <div
                    slot="autocomplete-item"
                    slot-scope="props"
                    class="autocomplete-item"
                    @click.prevent="props.performAdd(props.item)"
                  >
                    <h6 class="text-xs font-semibold">
                      {{ props.item.text }}
                    </h6>
                    <p class="text-xs text-gray-700">
                      {{ props.item.description }}
                    </p>
                  </div>
                </vue-tags-input>
              </client-only>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="dropdown dropdown-right">
      <label tabindex="0" class="btn btn-sm btn-ghost">
        <font-awesome-icon :icon="['far', 'plus']" />
        <span
          class="flex-grow-0 flex-shrink-0 ml-1 text-sm font-medium text-left normal-case"
        >
          New filter
        </span>
      </label>
      <div
        tabindex="0"
        class="rounded shadow compact dropdown-content bg-base-100"
      >
        <div
          class="flex flex-col justify-center items-center w-350 relative gap-1 p-2.5 rounded bg-white"
        >
          <div class="relative self-stretch flex-grow-0 flex-shrink-0 h-4">
            <div
              class="flex justify-start items-center absolute left-[-1px] top-[-1px] gap-1"
            >
              <p
                class="flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-[#32324d]"
              >
                Add New Filter
              </p>
            </div>
          </div>
          <div
            class="self-stretch flex-grow-0 flex-shrink-0 h-10 relative overflow-hidden rounded bg-[#f3f3f8] flex flex-wrap"
          >
            <div
              v-for="filter in allFilters"
              :key="'add-filter-' + filter.id"
              class="flex justify-center items-center gap-2 px-3 py-2 rounded bg-white border border-[#d9d8ff]"
            >
              <!-- currently lint and (my vs code extension?) are conflicting so i can't use key in template tag -->
              <!-- ideally, you'd v-for inside the template tag, and do a v-if="filter.isActive" in the div element above -->
              <!-- to hide the element if it is not active -->
              <!-- reference here - https://eslint.vuejs.org/rules/no-v-for-template-key.html -->
              <template v-if="filter.isActive">
                <p
                  class="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-grey-500"
                >
                  {{ filter.name }}
                </p>
                <svg
                  width="9"
                  height="8"
                  viewBox="0 0 9 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="relative flex-grow-0 flex-shrink-0 w-2 h-2 cursor-pointer"
                  preserveAspectRatio="none"
                  @click="removeFilter(filter)"
                >
                  <path
                    d="M8.5 0.805714L7.69429 0L4.5 3.19429L1.30571 0L0.5 0.805714L3.69429 4L0.5 7.19429L1.30571 8L4.5 4.80571L7.69429 8L8.5 7.19429L5.30571 4L8.5 0.805714Z"
                    fill="#3D3D3D"
                    fill-opacity="0.3"
                  ></path>
                </svg>
              </template>
            </div>
          </div>
          <div
            class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[300px] rounded"
          >
            <div
              v-for="filter in allFilters"
              :key="'add-filter-option' + filter.id"
              class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[5px] px-4 py-2 rounded-tl rounded-tr"
            >
              <input
                type="checkbox"
                :checked="filter.isActive"
                class="rounded checkbox checkbox-sm checkbox-primary"
                @change="onChangeAddFilterCheckbox(filter)"
              />
              <p class="flex-grow text-xs text-left text-[#32324d]">
                {{ filter.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      localStorageFilterKey: 'bioinformatics-data-hub-filters',
      initialFilters: [
        {
          id: 1,
          name: 'Age',
          isActive: false,
          searchText: '',
          filterOptions: [
            {
              id: '0-18',
              name: '0-18',
              text: '0-18',
              isActive: true,
            },
            {
              id: '19-35',
              name: '19-35',
              text: '19-35',
              isActive: true,
            },
            {
              id: '36-55',
              name: '36-55',
              text: '36-55',
              isActive: true,
            },
            {
              id: '56+',
              name: '56+',
              text: '56+',
              isActive: true,
            },
          ],
        },
        {
          id: 2,
          name: 'Time',
          isActive: false,
          searchText: '',
          filterOptions: [
            {
              id: 'Baseline',
              name: 'Baseline',
              text: 'Baseline',
              isActive: true,
            },
            {
              id: '48weeks',
              name: '48weeks',
              text: '48weeks',
              isActive: true,
            },
            {
              id: '96weeks',
              name: '96weeks',
              text: '96weeks',
              isActive: true,
            },
          ],
        },
        {
          id: 3,
          name: 'Sex',
          isActive: false,
          searchText: '',
          filterOptions: [
            {
              id: 'male',
              name: 'Male',
              text: 'Male',
              isActive: true,
            },
            {
              id: 'female',
              name: 'Female',
              text: 'Female',
              isActive: true,
            },
          ],
        },
        {
          id: 4,
          name: 'Ethnicity',
          isActive: false,
          searchText: '',
          filterOptions: [
            {
              id: 'swedish',
              name: 'Swedish',
              text: 'Swedish',
              isActive: true,
            },
            {
              id: 'german',
              name: 'German',
              text: 'German',
              isActive: true,
            },
            {
              id: 'polish',
              name: 'Polish',
              text: 'Polish',
              isActive: true,
            },
          ],
        },
        {
          id: 5,
          name: 'Race',
          isActive: false,
          searchText: '',
          filterOptions: [
            {
              id: 'asian',
              name: 'Asian',
              text: 'Asian',
              // description: 'This is a general description for asian',
              isActive: true,
            },
            {
              id: 'african-american',
              name: 'African American',
              text: 'African American',
              // description: 'This is a general description for african american',
              isActive: true,
            },
            {
              id: 'white',
              name: 'White',
              text: 'White',
              // description: 'This is a general description for white',
              isActive: true,
            },
          ],
        },
        {
          id: 6,
          name: 'Responder/Non-responder',
          isActive: false,
          searchText: '',
          filterOptions: [
            {
              id: 'responder',
              name: 'Responder',
              text: 'Responder',
              description: 'This is a general description for responder',
              isActive: true,
            },
            {
              id: 'non-responder',
              name: 'Non-responder',
              text: 'Non-responder',
              description: 'This is a general description for non-responder',
              isActive: true,
            },
          ],
        },
      ],
      activeFilters: [],
      searchText: '',
      selectedOptions: [],
    }
  },

  computed: {
    // this variable is for the "Add New Filter" dropdown item in order to make it reactive
    // whenever you press the "x" icon in the active filter badge, it should reflect in the checkbox and badge component
    allFilters() {
      return this.initialFilters.map((iniF) => {
        if (this.activeFilters.find((f) => f.id === iniF.id)) {
          return {
            ...iniF,
            isActive: true,
          }
        }

        return {
          ...iniF,
          isActive: false,
        }
      })
    },
  },
  mounted() {
    const localStorageFilters = localStorage.getItem(this.localStorageFilterKey)

    if (localStorageFilters) {
      this.activeFilters = JSON.parse(localStorageFilters)
    } else {
      this.activeFilters = []
    }
  },
  methods: {
    onTagsChanged(newTags, filter) {
      this.activeFilters = this.activeFilters.map((f) =>
        f.id === filter.id
          ? {
            ...f,
            filterOptions: [...newTags],
          }
          : f
      )
      this.saveFilters()
    },
    getAutocompleteItems(id) {
      // need to query initialFilters since it has every options
      // the "filters" array will only have whatever filters the user selected
      const filter = this.initialFilters.find((f) => f.id === id)
      if (!filter) return

      return filter.filterOptions.filter((opt) =>
        opt.text
          ?.toLowerCase()
          .includes(this.searchText.toString()?.toLowerCase())
      )
    },
    saveFilters() {
      const stringifiedFilters = JSON.stringify(this.activeFilters)
      localStorage.setItem(this.localStorageFilterKey, stringifiedFilters)
    },
    onChangeAddFilterCheckbox(filter) {
      // if this filter exists in the array, remove it
      if (this.activeFilters.find((f) => f.id === filter.id)) {
        this.activeFilters = this.activeFilters.filter(
          (f) => f.id !== filter.id
        )
      } else {
        // otherwise, add it, and make sure to set isActive to true, otherwise, won't get rendered
        // also, setting the filteroptions to empty array so that nothing is added,
        // you can remove that line to have all filters selected by default
        this.activeFilters.push({
          ...filter,
          filterOptions: [],
          isActive: true,
        })
      }

      this.saveFilters()
    },
    onChangeCheckbox(filter, option) {
      // if there exists this optino in the filter, remove it
      if (filter.filterOptions.find((opt) => opt.id === option.id)) {
        this.removeFilterOption(filter, option)
      } else {
        // otherwise, add this option to the filter
        const withOptionAddedToFilter = {
          ...filter,
          filterOptions: [
            ...filter.filterOptions,
            {
              ...option,
              isActive: true,
            },
          ],
        }

        this.activeFilters = this.activeFilters.map((f) =>
          f.id === filter.id ? withOptionAddedToFilter : f
        )
      }
    },
    removeFilterOption(filter, option) {
      const withOptionToggled = filter.filterOptions.map((opt) =>
        opt.id === option.id
          ? {
            ...opt,
            isActive: !opt.isActive,
          }
          : opt
      )

      const filterItem = {
        ...filter,
        filterOptions: [...withOptionToggled],
      }

      const isEveryOptionInactive = filterItem.filterOptions.every(
        (opt) => !opt.isActive
      )

      if (isEveryOptionInactive) {
        this.removeFilter(filterItem)
        return
      }

      this.activeFilters = this.activeFilters.map((f) =>
        f.id === filter.id ? filterItem : f
      )
    },
    removeFilter(filter) {
      this.activeFilters = this.activeFilters.filter((f) => f.id !== filter.id)
    },
  },
}
</script>

<style>
.filter-dropdown-content > div {
  min-width: 300px;
  min-height: 300px;
}

.ti-tag {
  background-color: white !important;
  color: #54565b !important;
  border: 1px solid #d7d8d8 !important;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.ti-actions {
  display: inline-block;
}

.ti-new-tag-input-wrapper {
  margin-top: 1rem;
}

.ti-selected-item {
  background-color: #d7d8d8 !important;
}

.ti-selected-item .autocomplete-item h6 {
  color: #333 !important;
}

.ti-selected-item:hover {
  background-color: #d7d8d8 !important;
}

.ti-selected-item:hover .autocomplete-item h6 {
  color: #333 !important;
}
</style>
