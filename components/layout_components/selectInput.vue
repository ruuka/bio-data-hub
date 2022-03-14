<template>
  <div class="flex flex-wrap items-center gap-4">
    <select
      v-for="(subFilter, idx) in filter.axisSubFilters"
      :key="subFilter.label + idx + subFilter.parentId"
      v-model="subFilter.selectedValue"
      class="select select-bordered"
      :placeholder="subFilter.label"
      :disabled="isDisabled(idx)"
      @change="onSelectChange($event, subFilter)"
    >
      <!-- if you remove value="" from below option, that option won't show up as placeholder for the select -->
      <!-- i guess depends on how you like it -->
      <!-- the default placeholder won't work because of v-model in the select tag, try and remove this value="" below and try it yourself :)-->
      <option value="" disabled selected>- {{ subFilter.label }} -</option>
      <option
        v-for="option in subFilter.options"
        :key="
          'sub-filter-option-' +
          option.value +
          '-for-' +
          subFilter.id +
          filter.id
        "
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
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
    }
  },

  computed: {},
  mounted() {},
  methods: {
    onSelectChange(evt, subFilter) {
      const selectedValue = evt.target.value

      this.$emit('ON_SELECT_CHANGE', {
        value: selectedValue,
        subFilterId: subFilter.id,
      })
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

      // if the current index - 1 (i.e. previous select dropdown) already has the "selectedValue" populated, then this filter should not be disabled
      // otherwise, if previous select dropdown is not selected, the following dropdown should be disabled
      // also, as usual, never disable the first one of any row
      if (
        subFilterIdx !== 0 &&
        !this.filter.axisSubFilters[subFilterIdx - 1]?.selectedValue
      ) {
        return true
      }

      return false
    },
  },
}
</script>
