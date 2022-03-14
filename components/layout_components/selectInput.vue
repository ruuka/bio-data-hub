<template>
  <select v-model="studySelection.selectedStudy" class="select select-bordered">
    <option disabled selected>- Select Study ID -</option>
    <option v-for="carrier in carriers" :value="{id: carrier.id, name: carrier.name}">{{ carrier.name }}</option>
  </select>
</template>

<script>
export default {
  components: {},

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
    }
  },

  computed: {

  },
  mounted() {

  },
  methods: {

  },
}
</script>
