<template>
  <div class="flex flex-wrap items-center gap-4">
    <vue-tags-input
      v-for="(subFilter, idx) in filter.axisSubFilters"
      :key="subFilter.label + idx + subFilter.parentId"
      v-model="filterSearchTextObj[subFilter.id]"
      :max-tags="subFilter.isMultipleSelect ? maxLengthForMultipleSelect : 1"
      :disabled="
        !deselectedDropdownIds.includes(subFilter.id) && isDisabled(idx)
      "
      :tags="getTagsForSubFilter(subFilter)"
      :autocomplete-items="getAutocompleteItems(subFilter.id)"
      class="tags-input"
      :class="{
        'is-filled': isInputFilled(subFilter),
        'is-error': deselectedDropdownIds.includes(subFilter.id),
      }"
      :placeholder="getPlaceholder(idx)"
      :autocomplete-always-open="true"
      :add-only-from-autocomplete="true"
      @focus="onFocus(subFilter)"
      @blur="onBlur"
      @tags-changed="(newTags) => onTagsChanged(newTags, subFilter)"
    >
      <!-- leave this slot as empty element, otherwise the library's default close icon will show up -->
      <!-- we're using our own svg icon below in the slot "tag-center" -->
      <div slot="tag-actions"></div>
      <div slot="tag-center" slot-scope="props" class="gap-2 text-xs">
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
          {{ props.item.text }}
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
      studyID: '',
      studySelection: {
        selectedStudy: {
          id: 0,
          name: '',
        },
      },
      customCarrierName: '- Select Study ID -',
      carriers: [
        { id: 1, name: 'GS-US-321-0105' },
        { id: 2, name: 'GS-US-321-0106' },
        { id: 3, name: 'GS-US-321-0107' },
      ],
      timepointID: '',
      timepointSelection: {
        selectedtimepoint: {
          id: 0,
          name: '',
        },
      },
      customtimepointName: '- Select Time Point -',
      timepoints: [
        { id: 1, name: 'Baseline' },
        { id: 2, name: '48 Weeks' },
        { id: 3, name: '96 Weeks' },
      ],
      dataTypeID: '',
      dataTypeSelection: {
        selectedDataType: {
          id: 0,
          name: '',
        },
      },
      customDataTypeName: '- Select Data Type -',
      dataTypes: [
        { id: 1, name: 'Clinical Attribute' },
        { id: 2, name: 'Biomarker' },
        { id: 3, name: 'Gene Expression' },
      ],

      // variables for my implementation
      filterSearchTextObj: {},
      maxLengthForMultipleSelect: 2,
      focusedInputId: '',
      // an object to hold search texts for the different subfilters,
      // if every vue-tag-input select used same variable, then if you type on one input, it would show up on every input
    }
  },

  computed: {},
  mounted() {},
  methods: {
    isInputFilled(subFilter) {
      if (
        subFilter.isMultipleSelect === undefined ||
        !subFilter.isMultipleSelect
      ) {
        // for single select, if there's one selected value, its filled
        return subFilter.selectedValue.length === 1
      }

      // for multple selected, it is filled if the array length is >= the max allowed
      return subFilter.selectedValue.length >= this.maxLengthForMultipleSelect
    },
    getPlaceholder(idx) {
      const subFilter = this.filter.axisSubFilters[idx]

      if (subFilter.isMultipleSelect) {
        if (
          subFilter.selectedValue.length === this.maxLengthForMultipleSelect
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

      return subFilter.selectedValue.map((opt) => ({
        ...opt,
        text: opt.name,
      }))
    },
    onTagsChanged(newTags, filter) {
      this.$emit('ON_SELECT_CHANGE', {
        value: newTags,
        subFilterId: filter.id,
      })
    },
    onFocus(subFilter) {
      // this whole focus and blur events just to close the autocomplete dropdown when user loses focus from the input

      this.focusedInputId = subFilter.id
    },
    onBlur() {
      // setting a timeout so that the DOM first removes the ".ti-focus" class from the input
      // then we do the stuff

      setTimeout(() => {
        if (!document.querySelector('.vue-tags-input.ti-focus')) {
          this.focusedInputId = ''
        }
      }, 100)
    },
    getAutocompleteItems(subFilterId, options = { isInputDisabled: false }) {
      if (options.isInputDisabled) return []
      // if the input is disabled, return an empty array so that the autocomplete dropdown won't show up when an item is already selected

      const subFilter = this.filter.axisSubFilters.find(
        (sub) => sub.id === subFilterId
      )

      if (!subFilter) return []

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

      return subFilter.options.filter((s) =>
        s.name.toLowerCase().includes(searchTxt)
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
        const previousSubFilter = this.filter.axisSubFilters[subFilterIdx - 1]
        const currentSubFilter = this.filter.axisSubFilters[subFilterIdx]

        // if (previousSubFilter.selectedValue.length === 0) return true
        if (previousSubFilter.selectedValue.length === 0) {
          // if the previous dropdown has value not seleccted ^

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
}

/* this is the input field */

/* we're remove it when the select dropdown is filled, otherwise, it leaves the input tag, which looks ugly */

.vue-tags-input.is-filled .ti-input .ti-tags .ti-new-tag-input-wrapper {
  display: none;
}

.vue-tags-input.is-error .ti-input {
  border: 1px solid red;
}
</style>
