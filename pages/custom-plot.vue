<template>
  <div class="flex w-full">
    <div class="w-full h-full px-2 py-4 overflow-y-auto">
      <div class="mb-2 text-sm breadcrumbs">
        <ul>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Home
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Clinical Data
            </a>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-4 h-4 mr-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            Custom Plot
          </li>
        </ul>
      </div>

      <div class="px-2 py-4 mb-2 rounded alert bg-base-100">
        <div class="flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#2196f3"
            class="flex-shrink-0 w-6 h-6 mx-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <label>
            <p class="mr-4 text-sm text-base-content text-opacity-60">
              Instructions: To begin, select the study of interest. From there,
              choose different study parameters you are interested between the
              horizontal axis and the vertical y axis. Depending on the choices
              chosen, you can visualize bar plots with categorical variables,
              box plots with categorical and numerical variables, and scatter
              plot with numerical and numerical variables.
            </p>
          </label>
        </div>
        <div class="flex-none">
          <button class="btn btn-sm btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>

        <br />
      </div>
      <ul class="mb-2 menu bg-base-100 menu-horizontal tabs-boxed">
        <li class="bordered active">
          <NuxtLink to="/clinical-trials/biomarkers/box-plot">
            Box Plots
          </NuxtLink>
        </li>
        <li class="bordered">
          <NuxtLink to="/clinical-trials/biomarkers/longitudinal">
            Longitudinal Data
          </NuxtLink>
        </li>
        <li class="bordered">
          <NuxtLink to="/clinical-trials/biomarkers/correlations">
            Correlations
          </NuxtLink>
        </li>
      </ul>

      <div class="rounded navbar bg-base-100">
        <div class="flex-1">
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="relative flex-grow-0 flex-shrink-0 w-8 h-8"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect y="0.5" width="32" height="32" rx="12" fill="#F8F7FF"></rect>
            <rect
              x="8.5"
              y="8.16669"
              width="14.8148"
              height="16.6667"
              rx="3"
              fill="#C51F3F"
              fill-opacity="0.1"
            ></rect>
            <ellipse
              cx="14.0554"
              cy="18.3519"
              rx="2.77778"
              ry="2.77778"
              fill="url(#paint0_linear_304_44513)"
            ></ellipse>
            <path
              d="M17.0648 11.8704L20.4728 17.7731H13.6569L17.0648 11.8704Z"
              fill="#C51F3F"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_304_44513"
                x1="16.2379"
                y1="20.5164"
                x2="10.5933"
                y2="20.3403"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#C51F3F"></stop>
                <stop offset="1" stop-color="#F0CEBB"></stop>
              </linearGradient>
            </defs>
          </svg>
          <p
            class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#54565b] pl-2"
          >
            Therapeutic Areas: Inflammation - Ankylosing Spondylitis
          </p>
        </div>

        <div class="flex-none">
          <button class="btn btn-ghost" tabindex="0">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="relative flex-grow-0 flex-shrink-0 w-5 h-5"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_285_44227)">
                <path
                  d="M17.3148 3.83331H2.5L8.42593 10.8407V15.6852L11.3889 17.1666V10.8407L17.3148 3.83331Z"
                  stroke="#484964"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <circle cx="15" cy="5.5" r="5" fill="white"></circle>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.9052 4.07202C18.1981 3.77912 18.1981 3.30425 17.9052 3.01136C17.6123 2.71846 17.1374 2.71846 16.8445 3.01136L15.2082 4.64769L13.5718 3.01136C13.2789 2.71846 12.8041 2.71846 12.5112 3.01136C12.2183 3.30425 12.2183 3.77912 12.5112 4.07202L14.1475 5.70835L12.5112 7.34469C12.2183 7.63758 12.2183 8.11246 12.5112 8.40535C12.8041 8.69824 13.2789 8.69824 13.5718 8.40535L15.2082 6.76901L16.8445 8.40535C17.1374 8.69824 17.6123 8.69824 17.9052 8.40535C18.1981 8.11246 18.1981 7.63758 17.9052 7.34469L16.2688 5.70835L17.9052 4.07202Z"
                  fill="#484964"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_285_44227">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.5)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <!--            <font-awesome-icon :icon="['far', 'filter']"  />-->
            <span
              class="flex-grow-0 flex-shrink-0 ml-1 text-sm font-medium text-left normal-case"
            >
              Hide filters
            </span>
          </button>
          <div class="dropdown dropdown-end">
            <button class="btn btn-square btn-ghost" tabindex="0">
              <font-awesome-icon :icon="['far', 'plus']" />
            </button>
            <ul
              tabindex="0"
              class="w-56 shadow dropdown-content menu bg-base-100 rounded-box"
            >
              <li class="hover-bordered"><a>Add New Group</a></li>
              <li class="hover-bordered"><a>Add New Filter</a></li>
            </ul>
          </div>
          <div class="dropdown dropdown-end">
            <button class="btn btn-square btn-ghost" tabindex="0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
            <ul
              tabindex="0"
              class="w-56 shadow dropdown-content menu bg-base-100 rounded-box"
            >
              <li class="hover-bordered"><a>Add New Group</a></li>
              <li class="hover-bordered"><a>Add New Filter</a></li>
              <li class="hover-bordered"><a>Add Horizontal Axis</a></li>
              <li class="hover-bordered"><a>Add Vertical Axis</a></li>
              <li class="hover-bordered"><a>Print Page</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-1 md:gap-6">
          <div class="md:col-span-1"></div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST" @submit.prevent="handleSaveFilters">
              <div class="overflow-hidden shadow sm:rounded-md">
                <div class="px-2 py-2 bg-white sm:p-6">
                  <div class="flex flex-col w-full">
                    <SelectInput ref="selectInput" />
                    <!--                      <div class="divider"></div>-->
                    <div class="flex flex-row">
                      <div class="px-2 py-2 mt-2">
                        <p>Study ID</p>
                      </div>

                      <!--                        <div class="px-2 py-2 form-control">-->
                      <!--                          <select class="select select-bordered">-->
                      <!--                            <option disabled selected>- Select Data Type -</option>-->
                      <!--                            <option>Clinical Attribute</option>-->
                      <!--                            <option>Biomarker</option>-->
                      <!--                            <option>Gene Expression</option>-->
                      <!--                          </select>-->
                      <!--                        </div>-->

                      <div class="px-2 py-2 form-control">
                        <!--                          <select v-model="studySelection.selectedStudy" class="select select-bordered">-->
                        <!--                            <option disabled selected>- Select Study ID -</option>-->
                        <!--                            <option v-for="carrier in carriers" :value="{id: carrier.id, name: carrier.name}">{{ carrier.name }}</option>-->
                        <!--                          </select>-->
                        <!-- <SelectInput></SelectInput> -->
                      </div>

                      <div
                        v-if="studySelection.selectedStudy.id === 1"
                        class="px-2 py-2 form-control"
                      >
                        <select
                          v-model="timepointSelection.selectedtimepoint"
                          class="select select-bordered"
                        >
                          <option disabled selected>
                            - Select Time Point -
                          </option>
                          <option
                            v-for="timepoint in timepoints"
                            :value="{ id: timepoint.id, name: timepoint.name }"
                          >
                            {{ timepoint.name }}
                          </option>
                        </select>
                      </div>

                      <!--                        <div class="dropdown" v-if="studySelection.selectedStudy.id === 1">-->
                      <!--                          <label tabindex="0" class="m-2 cursor-pointer btn">- Select Time Point -</label>-->
                      <!--                          <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">-->

                      <!--                            <li><a><input type="checkbox" checked="checked" class="gap-2 checkbox checkbox-primary checkbox-sm"> Baseline</a></li>-->
                      <!--                            <li><a><input type="checkbox" checked="checked" class="gap-2 checkbox checkbox-primary checkbox-sm"> 48 Weeks</a></li>-->
                      <!--                            <li><a><input type="checkbox" checked="checked" class="gap-2 checkbox checkbox-primary checkbox-sm"> 96 Weeks</a></li>-->
                      <!--                          </ul>-->
                      <!--                        </div>-->

                      <!--                        <span>{{ studySelection.selectedStudy }}</span>-->
                    </div>

                    <div class="divider"></div>

                    <div class="flex flex-row">
                      <div class="px-2 py-2 mt-2">
                        <p>Horizontal Axis</p>
                      </div>

                      <!--                        <div class="px-2 py-2 form-control">-->
                      <!--                          <select class="select select-bordered">-->
                      <!--                            <option disabled selected>- Select Data Type -</option>-->
                      <!--                            <option>Clinical Attribute</option>-->
                      <!--                            <option>Biomarker</option>-->
                      <!--                            <option>Gene Expression</option>-->
                      <!--                          </select>-->
                      <!--                        </div>-->

                      <div
                        v-if="timepointSelection.selectedtimepoint.id === 1"
                        class="px-2 py-2 form-control"
                      >
                        <select
                          v-model="dataTypeSelection.selectedDataType"
                          class="select select-bordered"
                        >
                          <option disabled selected>
                            - Select Data Type -
                          </option>
                          <option
                            v-for="dataType in dataTypes"
                            :value="{ id: dataType.id, name: dataType.name }"
                          >
                            {{ dataType.name }}
                          </option>
                        </select>
                      </div>

                      <div
                        v-if="timepointSelection.selectedtimepoint.id === 1"
                        class="px-2 py-2 form-control"
                      >
                        <select
                          v-model="dataTypeSelection.selectedDataType"
                          class="select select-bordered"
                        >
                          <option disabled selected>
                            - Select Value from Data Type -
                          </option>
                          <option
                            v-for="dataType in dataTypes"
                            :value="{ id: dataType.id, name: dataType.name }"
                          >
                            {{ dataType.name }}
                          </option>
                        </select>
                      </div>

                      <div
                        v-if="timepointSelection.selectedtimepoint.id === 1"
                        class="px-2 py-2 form-control"
                      >
                        <select
                          v-model="dataTypeSelection.selectedDataType"
                          class="select select-bordered"
                        >
                          <option disabled selected>
                            - Select Treatment Option -
                          </option>
                          <option
                            v-for="dataType in dataTypes"
                            :value="{ id: dataType.id, name: dataType.name }"
                          >
                            {{ dataType.name }}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="divider"></div>

                    <div class="flex flex-row">
                      <div class="px-2 py-2 m-2">
                        <p>Vertical Axis</p>
                      </div>

                      <div
                        v-if="
                          timepointSelection.selectedtimepoint.id === 1 ||
                          timepointSelection.selectedtimepoint.id === 2
                        "
                        class="px-2 py-2 form-control"
                      >
                        <select
                          v-model="dataTypeSelection.selectedDataType"
                          class="select select-bordered"
                        >
                          <option disabled selected>
                            - Select Data Type -
                          </option>
                          <option
                            v-for="dataType in dataTypes"
                            :value="{ id: dataType.id, name: dataType.name }"
                          >
                            {{ dataType.name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <div
                    class="inline-flex justify-center px-2 py-2 form-control"
                  >
                    <label class="cursor-pointer label">
                      <span class="mr-2 label-text">Log Transform</span>
                      <input
                        type="checkbox"
                        checked="checked"
                        class="rounded checkbox checkbox-sm checkbox-primary"
                      />
                    </label>
                  </div>
                  
                  <button
                  type="submit"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-700 border border-transparent rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    
                  >
                    Save Filters
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="flex flex-col w-full mt-2">
        <div class="p-20 rounded bg-base-100 place-items-center">
          <NewBoxPlot
            plot-title="ERBB2 Log (2) TPM vs Age"
            y-axis-title="Log (2) TPM"
          />
          <!--          <PlotlyBoxPlotFigure-->
          <!--            v-for="(plotSetup, plotID) in plotSetupDict"-->
          <!--            :key="plotID + plotSetup.time_point.toString()"-->
          <!--            :plot-setup="plotSetup"-->
          <!--            :primary-filter="primaryFilter"-->
          <!--            :secondary-filter="secondaryFilter"-->
          <!--          />-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import APIService from '~/services/APIService'
import NewBoxPlot from '../components/plotly_components/NewBoxPlot'
import SelectInput from '../components/layout_components/SelectInput'
export default {
  name: 'custom-plot',
  components: {
    NewBoxPlot,
    SelectInput,
  },
  asyncData() {
    return {
      therapeuticAreaOptions: ['Inflammation', 'Oncology', 'Virology'],
      studyOptions: [
        {
          // Scenario Example #1
          studyID: 'GS-US-321-0105',
          indication: 'Non-Alcoholic Steatohepatitis',
          description: 'SIM F3 Nash Trial (Ph. 2)', // Populate later, use empty string for now - Any relevant description for tooltip hover on Indication
          filterOptions: {
            age: ['19-35 Years Old', '36-55 Years Old', '56+ Years Old'],
            sex: ['Male', 'Female'],
            bmi: ['Underweight', 'Normal Weight', 'Overweight', 'Obese'],
            race: [
              'White or Caucasian',
              'Asian',
              'Black or African American',
              'American Indian or Alaska Native',
              'Native Hawaiian or Other Pacific Islander',
              'Other',
            ],
            ethnicity: ['Hispanic or Latino', 'Not Hispanic or Latino'],
            response: ['DAS20 CRP', 'DAS50 CRP'],
            tissue: ['Liver'],
            treatment: ['Placebo', 'Simtuzumab, 75mg', 'Simtuzumab, 125mg'],
            time: ['Baseline', '48 Weeks', '96 Weeks'],
          },
          axisOptions: {
            biomarkerAvailable: true,
            geneExpressionAvailable: true,
            responseAvailable: true, // Efficacy measures table
            demographicAvailable: true,
          },
        },
        {
          // Scenario Example #2
          studyID: 'GS-US-223-1015',
          indication: 'Diabetic Kidney Disease',
          description: 'SIM F3 Nash Trial (Ph. 2)', // Any relevant description for tooltip hover on Indication
          filterOptions: {
            age: ['19-35 Years Old', '36-55 Years Old', '56+ Years Old'],
            sex: ['Male', 'Female'],
            bmi: ['Underweight', 'Normal Weight', 'Overweight', 'Obese'],
            race: [
              'White or Caucasian',
              'Asian',
              'Black or African American',
              'Other',
            ],
            ethnicity: ['Hispanic or Latino', 'Not Hispanic or Latino'],
            response: [],
            gene: ['ERBB2'],
            tissue: ['Whole Blood'],
            treatment: [
              'Placebo',
              'Selonsertib, 2mg',
              'Selonsertib, 6mg',
              'Selonsertib, 18mg',
            ],
            time: [
              'Baseline',
              '1 Week',
              '2 Weeks',
              '3 Weeks',
              '4 Weeks',
              '8 Weeks',
              '12 Weeks',
              '16 Weeks',
              '24 Weeks',
              '36 Weeks',
              '48 Weeks',
            ],
          },
          axisOptions: {
            biomarkerAvailable: true,
            geneExpressionAvailable: true,
            responseAvailable: true, // Efficacy measures table
            demographicAvailable: true,
          },
        },
      ],
    }
  },
  data() {
    return {
      isLog: false,
      mainSelection: null,
      subSelection: null,
      data: null,
      treatmentOptions: ['Placebo'],
      timeOptions: [0],
      tissueOptions: [],
      selectedTimePoint: null,
      selectedTreatment: null,
      selectedTissue: null,
      metadataOptions: null,

      primaryFilter: null,
      secondaryFilter: null,
      plotSetupDict: {},
      pageTitle: 'Bioinformatics Data Hub - Custom Plot',
      pageSubTitle: "A portal to access and analyze Gilead's molecular data.",
      chartTitle: 'Liver ERBB2 Expression',
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
  watch: {
    mainSelection() {
      this.isLog = false
      this.subSelection = null
      this.selectedTimePoint = null
      this.selectedTreatment = null
      this.metadataOptions = null
      this.selectedTissue = null
      this.data = null
      if (this.mainSelection === 'Gene Expression') {
        APIService.getGeneMetadataOptions(this.$axios, [
          this.$props.study,
        ]).then((response) => {
          this.metadataOptions = response.data
          this.tissueOptions = [
            ...new Set(this.metadataOptions.map((x) => x.tissue_source)),
          ]
          this.selectedTissue = this.tissueOptions[0]
          console.log(this.metadataOptions)
          this.treatmentOptions = [
            ...new Set(this.metadataOptions.map((x) => x.treatment)),
          ]
          this.treatmentOptions.push('All')
          this.selectedTreatment = this.treatmentOptions[0]
        })
      } else if (this.mainSelection === 'Biomarker') {
        APIService.getBiomarkerMetadataOptions(this.$axios, [
          this.$props.study,
        ]).then((response) => {
          this.metadataOptions = response.data
          this.treatmentOptions = [
            ...new Set(this.metadataOptions.map((x) => x.preferred_name)),
          ]
          this.treatmentOptions.push('All')
          this.selectedTreatment = this.treatmentOptions[0]
        })
      }
      this.sendUpdateFilter()
    },
    subSelection() {
      if (
        this.selectedTimePoint !== null &&
        this.mainSelection !== 'Clinical Attribute'
      ) {
        this.downloadData()
      } else if (this.mainSelection === 'Clinical Attribute') {
        if (['Treatment', 'Week'].includes(this.subSelection)) {
          APIService.getDemographicMetadataData(this.$axios, {
            studyList: this.$props.study,
          }).then((response) => {
            this.data = response.data
            this.$nextTick(() => {
              this.$emit('update-filter', {
                mainSelection: this.mainSelection,
                subSelection: this.subSelection,
                axis: this.$props.axisText,
                isLog: this.isLog,
                unit: this.calculateUnit,
                data: this.data,
              })
            })
          })
        } else {
          APIService.getDemographicAndID(this.$axios, {
            studyList: this.$props.study,
            sexList: 'All',
            ageList: 'All',
            raceList: 'All',
            ethnicityList: 'All',
          }).then((response) => {
            this.data = response.data
            this.$nextTick(() => {
              this.$emit('update-filter', {
                mainSelection: this.mainSelection,
                subSelection: this.subSelection,
                axis: this.$props.axisText,
                isLog: this.isLog,
                unit: this.calculateUnit,
                data: this.data,
              })
            })
          })
        }
        this.$nextTick(() => {
          this.$emit('update-filter', {
            mainSelection: this.mainSelection,
            subSelection: this.subSelection,
            axis: this.$props.axisText,
            isLog: this.isLog,
            unit: this.calculateUnit,
            data: this.data,
          })
        })
      }
      this.sendUpdateFilter()
    },
    isLog() {
      this.sendUpdateFilter()
    },
    selectedTissue() {
      this.data = null
      if (this.selectedTissue !== null) {
        this.treatmentOptions = [
          ...new Set(
            this.metadataOptions
              .filter((x) => x.tissue_source === this.selectedTissue)
              .map((x) => x.treatment)
          ),
        ]
        this.treatmentOptions.push('All')
      }
    },
    selectedTreatment() {
      this.data = null
      this.selectedTimePoint = null
      if (this.mainSelection !== 'Gene Expression') {
        if (this.selectedTreatment !== null) {
          if (this.selectedTreatment !== 'All') {
            this.timeOptions = [
              ...new Set(
                this.metadataOptions
                  .filter((x) => x.preferred_name === this.selectedTreatment)
                  .map((x) => x.time_point)
              ),
            ].sort((a, b) => a - b)
          } else {
            this.timeOptions = [
              ...new Set(this.metadataOptions.map((x) => x.time_point)),
            ].sort((a, b) => a - b)
          }
          this.selectedTimePoint = this.timeOptions[0]
        }
      } else if (this.mainSelection === 'Gene Expression') {
        if (this.selectedTreatment !== null) {
          if (this.selectedTreatment !== 'All') {
            this.timeOptions = [
              ...new Set(
                this.metadataOptions
                  .filter((x) => x.treatment === this.selectedTreatment)
                  .filter((x) => x.tissue_source === this.selectedTissue)
                  .map((x) => x.time_point)
              ),
            ].sort((a, b) => a - b)
          } else {
            this.timeOptions = [
              ...new Set(
                this.metadataOptions
                  .filter((x) => x.tissue_source === this.selectedTissue)
                  .map((x) => x.time_point)
              ),
            ].sort((a, b) => a - b)
          }
          this.selectedTimePoint = this.timeOptions[0]
        }
      }

      if (this.selectedTimePoint !== null) {
        if (this.subSelection !== null) {
          this.downloadData()
        }
        this.sendUpdateFilter()
      }
    },
    selectedTimePoint() {
      this.data = null
      if (this.selectedTimePoint !== null) {
        if (this.subSelection !== null) {
          this.downloadData()
        }
        this.sendUpdateFilter()
      }
    },
    study() {
      APIService.getBiomarkerPlotOptions(this.$axios, [this.$props.study]).then(
        (response) => {
          this.biomarkerChoices = response.data.map((x) => x.name)
          this.biomarkerInfo = response.data
        }
      )
    },
  },
  methods: {
    handleSaveFilters() {
      this.$refs.selectInput.saveFilters()
    },
    updatePlotData(object) {
      this.plotSetupDict = object
    },
    updateFilter(object) {
      this.primaryFilter = object.primaryFilter
      this.secondaryFilter = object.secondaryFilter
    },
  },
  head() {
    const title = 'Custom Plots'
    return {
      title,
      script: [
        {
          // Box Plots
          // id: 'Boxplots',
          // src: 'https://cdn.plot.ly/plotly-2.9.0.min.js',
          // defer: false
        },
      ],
    }
  },
}
</script>
