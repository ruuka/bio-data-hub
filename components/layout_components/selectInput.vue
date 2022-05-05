<template>
  <div class="flex flex-wrap items-center gap-2">
    <vue-tags-input
      v-for="(subFilter, idx) in filteredSubfilters"
      :key="subFilter.label + idx + subFilter.parentId"
      v-model="filterSearchTextObj[subFilter.id]"
      v-click-outside="($event) => onClickOutside($event, subFilter)"
      :max-tags="subFilter.isMultipleSelect ? maxLengthForMultipleSelect : 1"
      :disabled="
        !deselectedDropdownIds.includes(subFilter.id) && isDisabled(idx)
      "
      :tags="getTagsForSubFilter(subFilter)"
      :autocomplete-items="getAutocompleteItems(subFilter)"
      class="tags-input"
      :class="{
        'is-filled': isInputFilled(subFilter),
        'is-error': deselectedDropdownIds.includes(subFilter.id),
        'remove-input': !getPlaceholder(idx),
        'is-focused': focusedInputId === subFilter.id,
      }"
      :placeholder="getPlaceholder(idx)"
      :autocomplete-always-open="true"
      :add-only-from-autocomplete="true"
      @tags-changed="(newTags) => onTagsChanged(newTags, subFilter)"
      @focus="onFocus(subFilter)"
      @blur="onBlur"
    >
      <!-- :placeholder="subFilter.id" -->
      <!-- leave this slot as empty element, otherwise the library's default close icon will show up -->
      <!-- we're using our own svg icon below in the slot "tag-center" -->
      <div slot="tag-actions"></div>
      <div
        slot="tag-center"
        slot-scope="props"
        class="gap-2 text-xs font-medium"
      >
        {{ props.tag.text }}

        <font-awesome-icon
          class="inline-block w-3 h-3 ml-1 text-gray-300 cursor-pointer"
          :icon="['far', 'times']"
          @click.prevent="props.performDelete(props.index)"
        />
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
        <p class="text-xs text-gray-500">
          {{ props.item.description }}
        </p>
      </div>
    </vue-tags-input>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    filterIndex: {
      type: Number,
      required: true,
    },
    filter: {
      type: Object,
      required: true,
    },
    disabledRowIndices: {
      type: Array,
      required: true,
    },
    deselectedDropdownIds: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      // variables for my implementation
      conditionalDropdownIds: [
        'clinical-attribute',
        'biomarker',
        'gene-expression',
      ],
      selectedSubDropdowns: {
        'horizontal-axis': null,
        'vertical-axis': null,
      },
      filterSearchTextObj: {},
      maxLengthForMultipleSelect: 6,
      focusedInputId: '',
      // an object to hold search texts for the different subfilters,
      // if every vue-tag-input select used same variable, then if you type on one input, it would show up on every input
    }
  },

  computed: {
    filteredSubfilters() {
      return this.filter.axisSubFilters.filter((s) => !s.isInactive)
    },
  },
  mounted() {},
  methods: {
    isInputFilled(subFilter) {
      if (
        subFilter.isMultipleSelect === undefined ||
        !subFilter.isMultipleSelect
      ) {
        // for single select, if there's one selected value, its filled
        return subFilter?.selectedValue?.length === 1
      }

      // for multple selected, it is filled if the array length is >= the max allowed
      return subFilter?.selectedValue?.length >= this.maxLengthForMultipleSelect
    },
    getPlaceholder(idx) {
      // const subFilter = this.filter.axisSubFilters[idx]
      const subFilter = this.filteredSubfilters[idx]

      if (subFilter.isMultipleSelect) {
        if (
          subFilter.selectedValue.length >= 1
          // subFilter.selectedValue.length === this.maxLengthForMultipleSelect
        ) {
          return ''
        }
      }

      // if the subfilter is single select and it already has a value selected, return empty placeholder
      if (
        (subFilter.isMultipleSelect === undefined ||
          !subFilter.isMultipleSelect) &&
        subFilter.selectedValue.length === 1
      ) {
        return ''
      }

      return subFilter.label
    },
    getTagsForSubFilter(subFilter) {
      // const isMultipleSelect = subFilter?.isMultipleSelect
      // console.log(subFilter)

      return subFilter.selectedValue.map((opt) => ({
        ...opt,
        text: opt.name,
      }))
    },
    onTagsChanged(newTags, filter) {
      if (filter.id === 'study-type') {
        this.$emit('ON_SELECT_STUDY_TYPE', {
          therapeuticArea: newTags[0]?.therapeuticArea,
          indication: newTags[0]?.indication,
          study_name: newTags[0]?.study_name,
        })
      }

      this.$emit('ON_SELECT_CHANGE', {
        value: newTags,
        subFilterId: filter.id,
        subFilter: filter,
      })

      // if (filter.options.find((opt) => opt.value === 'biomarker')) {
      //   this.$emit('TOGGLE_LOG_TRANSFORM', false)
      // }
    },

    onFocus(subFilter) {
      // this whole focus and blur events just to close the autocomplete dropdown when user loses focus from the input
      this.focusedInputId = subFilter.id

      if (subFilter.options.find((opt) => opt.value === 'biomarker')) {
        this.$emit('TOGGLE_LOG_TRANSFORM', true)
      } else {
        this.$emit('TOGGLE_LOG_TRANSFORM', false)
      }
    },
    onBlur() {
      // setting a timeout so that the DOM first removes the ".ti-focus" class from the input
      // then we do the stuff

      setTimeout(() => {
        if (!document.querySelector('.vue-tags-input.ti-focus')) {
          this.focusedInputId = ''
        }
      }, 200)
    },
    onClickOutside(_, subFilter) {
      if (subFilter.id === this.focusedInputId) {
        this.focusedInputId = ''

        if (
          this.focusedInputId &&
          !subFilter.options.find((opt) => opt.value === 'biomarker')
        ) {
          this.$emit('TOGGLE_LOG_TRANSFORM', false)
        }
      }
    },
    getAutocompleteItems(subFilter, options = { isInputDisabled: false }) {

      if (options.isInputDisabled) return []
      // if the input is disabled, return an empty array so that the autocomplete dropdown won't show up when an item is already selected
      const subFilterId = subFilter.id
      if(subFilterId ==="gene") {
      console.log("Autocomplete");
      if(subFilter.options.length>0) {
        console.log("return here the search dropdwn")
        return subFilter.options.filter(
        (s) =>
          s.name.toLowerCase() ||
          s.indication?.toLowerCase() ||
          s.description?.toLowerCase()
      )
      }
      }

      if (
        !this.deselectedDropdownIds.includes(subFilter.id) &&
        this.isDisabled(
          this.filter.axisSubFilters.findIndex((s) => s.id === subFilterId)
        )
      ) {
        return []
        // if its disabled, set an empty array so that the autocomplete dropdown won't show up,
        //  otherwise, looks weird since you can't get rid of it because its disabled
      }
      // console.warn(subFilter.id)

      if (
        (subFilter.isMultipleSelect !== undefined ||
          subFilter?.isMultipleSelect) &&
        subFilter.selectedValue.length === this.maxLengthForMultipleSelect
      ) {
        return []
      }

      if (
        subFilter.isMultipleSelect === undefined ||
        !subFilter.isMultipleSelect
      ) {
        // for single select, if it already has a value, send empty array as the autocomplete items list
        if (subFilter.selectedValue.length === 1) {
          return []
        }
      }

      if (this.focusedInputId !== subFilterId) return []

      const searchTxt =
        this.filterSearchTextObj[subFilterId] === undefined
          ? ''
          : this.filterSearchTextObj[subFilterId]?.toLowerCase()
         
         //CHECK whether the input being searched is gene
         if(this.focusedInputId ==="gene") {
       const text_to_search = this.filterSearchTextObj[this.focusedInputId ];
        //check if characters are more or equal to 3
        if(text_to_search && text_to_search.length >=3) {
         //EMIT AN EVENT TO SEARCH THE GENEIDS
         this.$emit("get-gene-ids", text_to_search)
        }
         }


      return subFilter.options.filter(
        (s) =>
          s.name.toLowerCase().includes(searchTxt) ||
          s.indication?.toLowerCase().includes(searchTxt) ||
          s.description?.toLowerCase().includes(searchTxt)
      )
    },

    isDisabled(subFilterIdx) {
      // the very first select dropdown, always enabled
      if (subFilterIdx === 0 && this.filterIndex === 0) return false

      // if this filter falls in the index, disable all row, nothing to check

      if (this.disabledRowIndices.includes(this.filterIndex)) return true

      // the next filter's first select dropdown
      if (
        !this.disabledRowIndices.includes(this.filterIndex) &&
        subFilterIdx === 0
      ) {
        return false
      }

      if (subFilterIdx !== 0) {
        const previousSubFilter = this.filteredSubfilters[subFilterIdx - 1]
        const currentSubFilter = this.filteredSubfilters[subFilterIdx]

        // if (previousSubFilter.selectedValue.length === 0) return true
        if (previousSubFilter.selectedValue.length === 0) {
          // if the previous dropdown has value not selected ^

          if (currentSubFilter.selectedValue.length) {
            // if the current dropdown does have value selected, it means that the previous dropdown had value selected previously
            // but removed later, so this current dropdown should not be disabled in this case

            return false
          }

          return true
        }
      }

      return false
    },
  },
}
</script>

<style>
.vue-tags-input.ti-disabled {
  background-color: #d2d2d2 !important;
  border: 0 !important;
  border-radius: 4px !important;
  opacity: 0.4;
}

.vue-tags-input {
  max-width: 300px;
}

.vue-tags-input.ti-focus {
  /* min-width: 215px !important; */

  max-width: 200px !important;
}

.vue-tags-input .ti-tags {
  flex-wrap: nowrap !important;
  overflow-x: auto;
}

.ti-tag {
  padding: 3px 5px;
  margin: 0 !important;
  font-size: 0.85em;
  border-radius: 4px !important;
  min-width: max-content;
}

.ti-input {
  border: 1px solid #f4f4f4 !important;
  padding: 4px;
  border-radius: 4px !important;
  background-color: #f4f4f4;
}

.ti-new-tag-input-wrapper input {
  min-width: 100px;
  background-color: transparent !important;
  border: 1px solid transparent !important;
}

.ti-item > div {
  padding: 5px 10px !important;
}

.ti-autocomplete {
  border: 1px solid transparent !important;
  max-height: 200px;
  min-width: 150px;
  overflow-y: auto;
}

/* this is the input field */

/* we're remove it when the select dropdown is filled, otherwise, it leaves the input tag, which looks ugly */

.vue-tags-input.remove-input .ti-new-tag-input-wrapper {
  display: none;
}

/* .ti-tags .ti-new-tag-input-wrapper {
  order: -1;
} */

.ti-tags {
  gap: 8px;
}

.vue-tags-input.is-filled .ti-input .ti-tags .ti-new-tag-input-wrapper {
  display: none;
}

.vue-tags-input.is-error .ti-input {
  border: 2px solid #c51f3f !important;
}
</style>
