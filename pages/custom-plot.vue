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
      <!--      <ul class="mb-2 menu bg-base-100 menu-horizontal tabs-boxed">-->
      <!--        <li class="bordered active">-->
      <!--          <NuxtLink to="/clinical-trials/biomarkers/box-plot">-->
      <!--            Box Plots-->
      <!--          </NuxtLink>-->
      <!--        </li>-->
      <!--        <li class="bordered">-->
      <!--          <NuxtLink to="/clinical-trials/biomarkers/longitudinal">-->
      <!--            Longitudinal Data-->
      <!--          </NuxtLink>-->
      <!--        </li>-->
      <!--        <li class="bordered">-->
      <!--          <NuxtLink to="/clinical-trials/biomarkers/correlations">-->
      <!--            Correlations-->
      <!--          </NuxtLink>-->
      <!--        </li>-->
      <!--      </ul>-->

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
            v-if="
              selectedStudy.therapeuticArea !== undefined &&
              selectedStudy.therapeuticArea
            "
            class="flex-grow-0 flex-shrink-0 pl-2 font-medium text-left"
          >
            <!-- Therapeutic Areas: Inflammation - Diabetic Kidney Disease -->
            Therapeutic Area: {{ selectedStudy.therapeuticArea }} - Indication:
            {{ selectedStudy.indication }}
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
              <li class="hover-bordered"><a>Save Filters</a></li>
              <li class="hover-bordered"><a>Print Page</a></li>
              <li class="text-red-600 hover-bordered"><a>Remove Group</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-1 md:gap-6">
          <div class="md:col-span-1"></div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST" @submit.prevent="handleSaveFilters">
              <div class="shadow sm:rounded-md">
                <!-- overflow-hidden this class was the reason for the dropdown being cut off -->
                <!-- I've removed it for now, but i'm not sure if this would effect the layout in any ways -->
                <div class="px-2 py-2 bg-white sm:p-6">
                  <div class="flex flex-col w-full">
                    <client-only>
                      <selectFilter
                        ref="selectFilter"
                        :SelectedFilterOptions="SelectedFilterOptions"
                        :savedFiltersOptions = "savedFiltersOptions"
                        @reset-saved-filters = "savedFiltersOptions = []"
                      />
                    </client-only>

                    <client-only>
                      <div
                        v-for="(axisFilter, idx) in allAxisFilters"
                        :key="axisFilter.name"
                        class="flex flex-row my-3"
                      >
                        <!-- <div class="px-2 py-2 mt-2 mr-2"> -->
                        <div class="flex items-center justify-center mr-2">
                          <p>{{ axisFilter.name }}</p>
                        </div>
                        <select-input
                          :disabled-row-indices="wholeRowDisabledIndices"
                          :filter-index="idx"
                          :filter="axisFilter"
                          :showSuggestions = "showSuggestions"
                          :deselected-dropdown-ids="deselectedDropdownIds"
                          @ON_SELECT_CHANGE="handleOnSelectChange"
                          @ON_SELECT_STUDY_TYPE="handleOnSelectedStudy"
                          @get-gene-ids="handleGetGeneIDS"
                        />
                      </div>
                    </client-only>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <div
                    class="inline-flex justify-center px-2 py-2 form-control"
                  >
                    <label
                      v-if="shouldShowLogTransformCheckbox"
                      class="cursor-pointer label"
                    >
                      <span class="mr-2 label-text">Log Transform</span>
                      <!-- logTransformDetails[
                            currentlyActiveLogTransformDetails.axis
                          ] -->
                      <input
                        v-model="isLogTransformSelected"
                        type="checkbox"
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
            v-if="boxPlotData"
            :boxPlotData="boxPlotData"
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
import newAPIService from '~/services/newAPIService.js'
import NewBoxPlot from '../components/plotly_components/NewBoxPlot'
import selectInput from '../components/layout_components/selectInput'
import selectFilter from '../components/layout_components/selectFilter'
import { parse } from '@fortawesome/fontawesome-svg-core'

export default {
  name: 'CustomPlot',
  components: {
    newAPIService,
    NewBoxPlot,
    selectInput,
    selectFilter,
  },
  asyncData() {
    return {
      localStorageFilterKey: 'BIODATAHUB',
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
      boxPlotData: null,
      showLogTransform: false,
      showSuggestions:false,
      currentlyActiveLogTransformDetails: {
        id: '',
        axis: '',
      },
      logTransformDetails: {
        'vertical-axis': false,
        'horizontal-axis': false,
      },
      SelectedFilterOptions: {},
      savedFiltersOptions:[],
      isLogTransformSelected: true,
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

      // Axis Labels
      axisFilters: [
        {
          name: 'Study ID',
          id: 'study-id',
        },
        {
          name: 'Horizontal Axis',
          id: 'horizontal-axis',
        },
        {
          name: 'Vertical Axis',
          id: 'vertical-axis',
        },
      ],

      // dataTypeGroups: [
      //   // Data Type Groups
      //   {
      //     name: 'Clinical Attribute',
      //     id: 'clinical-attribute',
      //   },
      //   {
      //     name: 'Biomarker',
      //     id: 'biomarker',
      //   },
      //   {
      //     name: 'Gene Expression',
      //     id: 'gene-expression',
      //   },
      // ],
      conditionalDropdownIds: [
        'clinical-attribute',
        'biomarker',
        'gene-expression',
        'clinical-attribute-vertical',
        'biomarker-vertical',
        'gene-expression-vertical',
      ],
      selectedSubDropdowns: {
        'horizontal-axis': null,
        'vertical-axis': null,
      },
      selectedStudy: {},
      axisFilterOptions: [
        // START - STUDY ID
        {
          id: 'study-type',
          name: 'Study Type',
          parentId: 'study-id',
          label: '- Select Study -',
          selectedValue: [],
          isMultipleSelect: false,
          options: [],
        },

        // END - STUDY ID

        // HORIZONTAL AXIS
        {
          id: 'data-type',
          name: 'Data Type',
          parentId: 'horizontal-axis',
          label: '- Select Data Type -',
          selectedValue: [],
          options: [
            {
              id: 'clinical-attribute',
              name: 'Clinical Attribute',
              value: 'clinical-attribute',
            },
            {
              id: 'biomarker',
              name: 'Biomarker',
              value: 'biomarker',
            },
            {
              id: 'gene-expression',
              name: 'Gene Expression',
              value: 'gene-expression',
            },
          ],
        },
        {
          id: 'primary',
          name: 'Primary',
          groupParentId: ['clinical-attribute', 'biomarker', 'gene-expression'],
          parentId: 'horizontal-axis',
          label: '- Select Primary Group -',
          selectedValue: [],
          isMultipleSelect: false,
          options: [
            {
              name: 'Treatment',
              value: 'treatment',
            },
            {
              name: 'Time',
              value: 'time',
            },
            {
              name: 'Sex',
              value: 'sex',
            },
            {
              name: 'Age',
              value: 'Age',
            },
            {
              name: 'Race',
              value: 'Race',
            },
            {
              name: 'Ethnicity',
              value: 'Ethnicity',
            },
            {
              name: 'BMI',
              value: 'BMI',
            },
          ],
        },
        {
          id: 'biomarker',
          name: 'Biomarker',
          groupParentId: ['biomarker'],
          parentId: 'horizontal-axis',
          label: '- Select Biomarker -',
          selectedValue: [],
          // isMultipleSelect: true,
          options: [
            {
              name: 'Plasma ADAMTS-like Protein',
              value: 'Plasma ADAMTS-like Protein',
              description: 'Description for Plasma',
            },
            {
              name: 'Plasma Collectin Sub-family M',
              value: 'Plasma ADAMTS-like Protein',
              description: 'Description for Plasma',
            },
          ],
        },
        {
          id: 'gene',
          name: 'Gene',
          parentId: 'horizontal-axis',
          groupParentId: ['gene-expression'],
          label: '- Select Gene(s) -',
          selectedValue: [],
          isMultipleSelect: true,
          options: [],
        },
        {
          id: 'tissue-type',
          name: 'Tissue Type',
          parentId: 'horizontal-axis',
          groupParentId: ['gene-expression'],
          label: '- Select Tissue Type -',
          selectedValue: [],
          options: [
            {
              name: 'Brain',
              value: 'brain',
            },
            {
              name: 'Liver',
              value: 'liver',
            },
            {
              name: 'Whole Blood',
              value: 'whole-blood',
            },
            {
              name: 'Kidney',
              value: 'kidney',
            },
          ],
        },

        // end  for horizontal axis

        // VERTICAL AXIS
        {
          id: 'data-type-vertical',
          name: 'Data Type',
          parentId: 'vertical-axis',
          label: '- Select Data Type -',
          selectedValue: [],
          options: [
            {
              id: 'clinical-attribute-vertical',
              name: 'Clinical Attribute',
              value: 'clinical-attribute',
            },
            {
              id: 'gene-expression-vertical',
              name: 'Gene Expression',
              value: 'gene-expression',
            },
            {
              id: 'biomarker-vertical',
              name: 'Biomarker',
              value: 'biomarker',
            },
          ],
        },
        {
          id: 'biomarker-vertical',
          name: 'Biomarker',
          groupParentId: ['biomarker-vertical'],
          parentId: 'vertical-axis',
          label: '- Select Biomarker -',
          selectedValue: [],
          // isMultipleSelect: true,
          options: [
            {
              name: 'Plasma ADAMTS-like Protein',
              value: 'Plasma ADAMTS-like Protein',
              description: 'Description for Plasma',
            },
            {
              name: 'Plasma Collectin Sub-family M',
              value: 'Plasma ADAMTS-like Protein',
              description: 'Description for Plasma',
            },
          ],
        },
        {
          id: 'gene-vertical',
          name: 'Gene',
          parentId: 'vertical-axis',
          groupParentId: ['gene-expression-vertical'],
          label: '- Select Gene(s) -',
          selectedValue: [],
          isMultipleSelect: true,
          options: [],
        },
        {
          id: 'tissue-type-vertical',
          name: 'Tissue Type',
          parentId: 'vertical-axis',
          groupParentId: ['gene-expression-vertical'],
          label: '- Select Tissue Type -',
          selectedValue: [],
          options: [
            {
              name: 'Brain',
              value: 'brain',
            },
            {
              name: 'Liver',
              value: 'liver',
            },
            {
              name: 'Whole Blood',
              value: 'whole-blood',
            },
            {
              name: 'Kidney',
              value: 'kidney',
            },
          ],
        },
        {
          id: 'primary-vertical',
          name: 'Secondary',
          groupParentId: [
            'clinical-attribute-vertical',
            'biomarker-vertical',
            'gene-expression-vertical',
          ],
          parentId: 'vertical-axis',
          label: '- Select Secondary Group -',
          selectedValue: [],
          isMultipleSelect: false,
          options: [
            {
              name: 'None',
              value: 'none',
            },
            {
              name: 'Treatment',
              value: 'treatment',
            },
            {
              name: 'Time',
              value: 'time',
            },
            {
              name: 'Sex',
              value: 'sex',
            },
            {
              name: 'Age',
              value: 'Age',
            },
            {
              name: 'Race',
              value: 'Race',
            },
            {
              name: 'Ethnicity',
              value: 'Ethnicity',
            },
            {
              name: 'BMI',
              value: 'BMI',
            },
          ],
        },

        // end for vertical axis
      ],
    }
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
  computed: {
    shouldShowLogTransformCheckbox() {
      const horizontalBiomarkerItem = this.axisFilterOptions.find(
        (o) => o.id === 'data-type'
      )
      const verticalBiomarkerItem = this.axisFilterOptions.find(
        (o) => o.id === 'data-type-vertical'
      )

      const isHorizontalBiomarkerSelected =
        horizontalBiomarkerItem?.selectedValue?.find(
          (i) => i.id === 'biomarker'
        )

      const isVerticalBiomarkerSelected =
        verticalBiomarkerItem?.selectedValue?.find(
          (i) => i.id === 'biomarker-vertical'
        )

      if (!isHorizontalBiomarkerSelected && !isVerticalBiomarkerSelected) {
        return false
      }

      if (isHorizontalBiomarkerSelected || isVerticalBiomarkerSelected) {
        return true
      }

      return false
    },
    allAxisFilters() {
      return this.axisFilters.map((af) => ({
        ...af,
        axisSubFilters: this.axisFilterOptions
          .filter((sub) => sub.parentId === af.id)
          .map((sub) => ({
            ...sub,
            isInactive: sub.isInactive === undefined ? false : sub.isInactive,
            text: sub.name, // the vue-tags-input library requires a text field
            options: sub.options.map((opt) => ({
              ...opt,
              text: opt.name, // the vue-tags-input library requires a text field
            })),
          }))
          .filter((sub) => !sub.isInactive),
      }))
    },

    deselectedDropdownIds() {
      // returns the ids of the select dropdowns that are invalid
      // happens when user deselects a dropdown that is placed before other subsequent already selected dropdowns

      // general idea for the following code is -
      // 1. start from the end dropdown for a row
      // 2. if an item in the loop is empty, then gather the rest of the previous dropdown items in an array
      // 3. loop through the array and check if at least one item has a selected value (Array.some)
      // 4. it at least one dropdown is selected, that means, all the dropdowns which don't have anything selected before this current item in the loop should show an error border

      const deselectedIds = []

      for (let i = 0; i < this.allAxisFilters.length; i++) {
        const axisSubFilters = this.allAxisFilters[i]?.axisSubFilters
        for (let j = axisSubFilters.length - 1; j >= 0; j--) {
          const currentSubFilter = axisSubFilters[j]
          if (currentSubFilter.selectedValue.length === 0) {
            const nextRowSubfilters = this.allAxisFilters[i + 1]?.axisSubFilters
            if (!nextRowSubfilters) break

            if (nextRowSubfilters) {
              if (
                nextRowSubfilters.every((s) => s.selectedValue.length === 0)
              ) {
                break
              }
              if (nextRowSubfilters.some((s) => s.selectedValue.length > 0)) {
                deselectedIds.push(currentSubFilter.id)
              }
            }
          }

          const allPrevSubFiltersLength = j
          const allPrevSubfilters = Array.from(
            Array(allPrevSubFiltersLength).keys()
          ).map((x) => axisSubFilters[x])

          if (
            !allPrevSubfilters.every((s) => s.selectedValue.length === 0) &&
            allPrevSubfilters.some((s) => s.selectedValue.length === 0)
          ) {
            // above if condition means if every input field to the left of it is empty, then, no need to show error, it'll be disabled instead
            // if at least one field is selected but some might be empty, the empty ones would show an error border

            allPrevSubfilters.forEach((s) => {
              if (s.selectedValue.length === 0) {
                if (deselectedIds.includes(s.id)) return
                deselectedIds.push(s.id)
              }
            })
          }
        }
      }

      return deselectedIds
    },

    wholeRowDisabledIndices() {
      // holds the indices of the rows that are disabled in an array
      // like initially, all row except the first will be disabled

      const filterIds = this.axisFilters.map((f, i) => ({ index: i, id: f.id }))

      const disabledIndices = []

      // starting from 1 since for the first row (0), it won't ever be fully disabled
      for (let i = 1; i < filterIds.length; i++) {
        const axisFilterOptionsForPrevIdx = this.axisFilterOptions
          .filter((sub) => sub.parentId === filterIds[i - 1].id)
          .filter((s) => !s.isInactive)

        // if every dropdown in previous row does not have their value selected,
        // it means there are two cases

        // i: initially, the previous row were all selected, but later on one select dropdown was deselected, in which case, the row after that must not be fully disabled
        // ii: the usual case where not every dropdown in previous row were selected, and nothing in the next row is selected, so disable this whole next row

        if (
          !axisFilterOptionsForPrevIdx.every(
            (opt) => opt.selectedValue.length > 0
          )
        ) {
          const axisFilterOptionsForCurrentIdx = this.axisFilterOptions
            .filter((sub) => sub.parentId === filterIds[i].id)
            .filter((s) => !s.isInactive)

          if (
            axisFilterOptionsForCurrentIdx.some(
              (opt) => opt.selectedValue.length > 0
            )
          ) {
            break
          }

          disabledIndices.push(i)
        }
      }

      return disabledIndices
    },
  },
  watch: {
    isLog() {
      // this.sendUpdateFilter()
    },
  },
  mounted() {
    this.getLocalStorageAxisFilters() // disable when changing field names
    // console.log(this.axisFilterOptions[0])
    if (this.axisFilterOptions[0].selectedValue.length > 0) {
      this.updateStudyFilterOptions(
        this.axisFilterOptions[0].selectedValue[0].name
      )
    }
    // localStorage.clear(); to clear local storage in console
    newAPIService.getAllStudies(this.$axios).then((response) => {
      const formatted = response.data.map((item, index) => {
        return {
          name: item.study_id,
          value: item.study_id.toLowerCase(),
          therapeuticArea: item.therapeutic_area,
          indication: item.indication,
          description: item.study_name,
        }
      })
      this.axisFilterOptions[0].options = formatted
    })

  //get Biomarker Data
  newAPIService.getAllBiomarkerNames(this.$axios).then((response) => {
  const formattedBioMarkerNames =     response.data.map(item => {
    return {
      name:item.name,
      value:item.name,
      description: `Description for ${item.name?.split(" ")[0]}`
    }
  })      
     // console.log("formattedBioMarkerNames", formattedBioMarkerNames);

      this.axisFilterOptions = this.axisFilterOptions.map(item => {
        if(item.id  === 'biomarker' || item.id ==='biomarker-vertical') {
          item.options = formattedBioMarkerNames
        }
        return item;
   
      });
    })
  
  //get tissue types
  newAPIService.getTissueTypes(this.$axios).then((response) => {
  const formatedTissueData =     response.data.map(item => {
    return {
      name:item.tissue_source,
      value:item.tissue_source.toLowerCase() 
    }
  })      
     // console.log("formatedTissueData", formatedTissueData);

      this.axisFilterOptions = this.axisFilterOptions.map(item => {
        if(item.id ==='tissue-type' || item.id ==='tissue-type-vertical') {
          item.options = formatedTissueData
        }
        return item;
   
      });
    })

  },
  methods: {
    getLocalStorageAxisFilters() {
            this.$eventBus.$emit('OPEN_MODAL', {
        icon: ['far', 'save'],
        title: 'Loading...Please Wait',
        subtitle: 'This will only take a moment',
        isClosable: false,
      })
      const localStorageFilters = localStorage.getItem(
        this.localStorageFilterKey
      )
      if (!localStorageFilters) {
          this.$eventBus.$emit('CLOSE_MODAL')
        return
      }

      const parsed = JSON.parse(localStorageFilters)
      const axisFilters = parsed?.axisFilters
      const selectedStudy = parsed?.selectedStudy || {}
      const logTransformDetails = parsed?.logTransformDetails
      const isLogTransformSelected = parsed?.isLogTransformSelected
       this.savedFiltersOptions = parsed?.filters

      this.isLogTransformSelected = isLogTransformSelected

      this.axisFilterOptions = axisFilters
        ? [...axisFilters]
        : this.axisFilterOptions

      this.selectedStudy = selectedStudy
      if(axisFilters[0]?.selectedValue?.length > 0) {
           this.updateStudyFilterOptions(axisFilters[0]?.selectedValue[0].name)
      }

      if (logTransformDetails) {
        this.currentlyActiveLogTransformDetails = {
          ...logTransformDetails.currentlyActiveLogTransformDetails,
        }
        this.logTransformDetails = {
          ...logTransformDetails.logTransformDetails,
        }
      }
       this.$eventBus.$emit('CLOSE_MODAL')
    },
    handleOnSelectedStudy(study) {
      this.selectedStudy = study
      this.savedFiltersOptions = [];
    },
    toggleSubfilterDropdownsVisibility(subFilter, selectedOptions) {
      if (this.selectedSubDropdowns[subFilter.parentId] === undefined) return

      if (
        selectedOptions.length > 0 &&
        (selectedOptions[0].id === 'biomarker' ||
          selectedOptions[0].id === 'biomarker-vertical')
      ) {
        this.showLogTransform = true
        this.currentlyActiveLogTransformDetails = {
          id: subFilter.parentId,
          axis: subFilter.parentId,
        }
      }

      this.axisFilterOptions = this.axisFilterOptions.map((o) => {
        if (o.id === subFilter.id) {
          return o
        }

        if (o?.parentId !== subFilter?.parentId) {
          return o
        }

        if (
          o.groupParentId !== undefined &&
          o?.groupParentId?.includes(
            this.selectedSubDropdowns[subFilter.parentId]
          )
        ) {
          return {
            ...o,
            isInactive: false,
          }
        }

        return {
          ...o,
          isInactive: true,
        }
      })
    },
    clearSelectedStudyIdChange() {
      //study-id filter options is always the first
      this.axisFilterOptions[0].options = this.axisFilterOptions[0].options.map(
        (item) => {
          return { ...item, selectedValue: [] }
        }
      )
    },
    handleGetGeneIDS(text_to_search, type = 'gene') {
      // console.log("Listening", text_to_search);
      this.getAllGeneIds(text_to_search, type)
    },
    handleOnSelectChange({ value, subFilterId, subFilter }) {
      //Clear any selected
      this.clearSelectedStudyIdChange()
      this.updateStudyFilterOptions(value[0]?.name)

      if (this.selectedSubDropdowns[subFilter.parentId] !== undefined) {
        if (
          value.length > 0 &&
          this.conditionalDropdownIds.includes(value[0]?.id)
        ) {
          this.selectedSubDropdowns[subFilter.parentId] = value[0]?.id

          this.toggleSubfilterDropdownsVisibility(subFilter, value)
        }

        if (
          value.length === 0 ||
          (value.length > 0 && !value[0]?.id?.startsWith('biomarker'))
        ) {
          this.currentlyActiveLogTransformDetails = {
            id: '',
            axis: '',
          }
          this.showLogTransform = false
        }
      }

      this.axisFilterOptions = this.axisFilterOptions.map((sub) =>
        sub.id === subFilterId
          ? {
              ...sub,
              selectedValue: value,
            }
          : sub
      )

      if (subFilterId === 'primary') {
        this.axisFilterOptions = this.axisFilterOptions.map((sub) => {
          return sub.id === 'primary-vertical'
            ? {
                ...sub,
                options: sub.options.filter(
                  (item) => item?.value !== value[0]?.value
                ),
              }
            : sub
        })
      }
    },
    getFiltersFromDataFilters(filters) {
      return filters
        .map((item) => {
          let obj = {}
          obj[item.name.toLowerCase()] = item.filterOptions.map(
            (optItem) => optItem.id
          )
          return obj
        })
        .reduce(function (result, item) {
          var key = Object.keys(item)[0] //first property: a, b, c
          result[key] = item[key]
          return result
        }, {})
    },
    getboxPlotData(dataFilters) {
      const isEligible =
        dataFilters.axisFilters.filter((item) => item.id === 'data-type')[0]
          .selectedValue[0]?.id == 'biomarker' ||
        dataFilters.axisFilters.filter((item) => item.id === 'data-type')[0]
          .selectedValue[0]?.id == 'gene-expression'

      const type = dataFilters.axisFilters
        .filter((item) => item.id === 'data-type')[0]
        .selectedValue[0]?.name.split(' ')
        .join('')
      const formattedData = {
        study: dataFilters.axisFilters[0].selectedValue[0]?.name,
        primaryGroup: dataFilters.axisFilters
          .filter((item) => item.id === 'primary')[0]
          .selectedValue[0]?.name?.toLowerCase(),
        secondaryGroup: dataFilters.axisFilters
          .filter((item) => item.id === 'primary-vertical')[0]
          .selectedValue[0]?.name?.toLowerCase(),
        filter: this.getFiltersFromDataFilters(dataFilters.filters),
        value: {
          type: isEligible ? type.charAt(0).toLowerCase() + type.slice(1) : '',
          filterTo: dataFilters.axisFilters.filter(
            (item) => item.id === 'gene'
          )[0].selectedValue[0]?.name,
        },
      }
      // console.log("Formatted Data");
      // console.log(formatedData);

      newAPIService
        .getNewBoxPlotData(
          this.$axios,
          encodeURIComponent(JSON.stringify(formattedData))
        )
        .then((response) => {
          this.boxPlotData = response.data

          this.$eventBus.$emit('CLOSE_MODAL')
        // this.$eventBus.$emit('REMOVE_NOTIFICATION_LOADING', notificationObj)

        this.$eventBus.$emit('ADD_NEW_NOTIFICATION', {
          type: 'info',
          title: 'Filters saved successfully',
          duration: 5000,
        })
        })
    },
    handleSaveFilters() {
      if (this.deselectedDropdownIds.length > 0) {
        // invalid data - some the subsequent dropdowns are selected without the precedent dropdown items being selected

        this.$eventBus.$emit('ADD_NEW_NOTIFICATION', {
          type: 'error',
          title: 'Please select valid filters',
          duration: 5000,
        })
        return
      }

      // this.$eventBus.$emit('OPEN_MODAL')
      const filters = this.$refs.selectFilter.getFilters()
      const axisFilters = this.axisFilterOptions
      const selectedStudy = this.selectedStudy
      const isLogTransformSelected = this.isLogTransformSelected
      const logTransformDetails = {
        currentlyActiveLogTransformDetails:
          this.currentlyActiveLogTransformDetails,
        logTransformDetails: this.logTransformDetails,
      }

      const stringifiedFilters = JSON.stringify({
        filters,
        axisFilters,
        selectedStudy,
        logTransformDetails,
        isLogTransformSelected,
      })

      this.$eventBus.$emit('OPEN_MODAL', {
        icon: ['far', 'save'],
        title: 'Saving...Please Wait',
        subtitle: 'This will only take a moment',
        isClosable: false,
      })

      this.getboxPlotData(JSON.parse(stringifiedFilters))
      localStorage.setItem(this.localStorageFilterKey, stringifiedFilters)


      // const notificationObj = {
      //   ref: 'TEST_LOADING',
      //   isLoading: true,
      //   type: 'info',
      //   title: 'Saving Filters...',
      //   duration: 5000,
      // }
      // this.$eventBus.$emit('ADD_NEW_NOTIFICATION', notificationObj)
    },
    updatePlotData(object) {
      this.plotSetupDict = object
    },
    updateFilter(object) {
      this.primaryFilter = object.primaryFilter
      this.secondaryFilter = object.secondaryFilter
    },

    async getGeneAliases(text_to_search) {
      const formattedGenes = []
      // for(let i=0; i< genes.length; i++) {
      // Let's not loop all genes length as it's too long, looping 10 below to test
      // Improvement #1: Please add a conditional logic that the Gene IDs only start query when the user has typed at least 3 letters to start searching.

      await newAPIService
        .getAllGeneAliases(this.$axios, text_to_search)
        .then((response) => {
          response.data.map((item) => {
            formattedGenes.push({
              name: item.gene_id,
              value: item?.gene_value,
              aliases: item?.alias_symbols,
            })
          })
        })

      console.log("Formatted Genes",formattedGenes)
      return formattedGenes
    },
     autocompleteMatch(input) {
  if (input == '') {
    return [];
  }
  var reg = new RegExp(input)
  return search_terms.filter(function(term) {
	  if (term.match(reg)) {
  	  return term;
	  }
  });
},
 
    async getAllGeneIds(text_to_search, type) {
      const result = await this.getGeneAliases(text_to_search)
      this.axisFilterOptions = this.axisFilterOptions.map((item) => {
        if (item.id === type) {
    const options  = result.map((geneItem) => {
            return {
              name: geneItem.name ?? 'NONE',
              // value: geneItem.value.toLowerCase(),
              // No need to convert value to lowercase
              value: geneItem.value,
              description: `Alt. names: ${geneItem.aliases}`,
            }
          }).filter((gitem) => {
              // var reg = new RegExp(text_to_search)
              let re = new RegExp(`${text_to_search.toUpperCase()}`);
             // console.log("Matching-", re, re.test(gitem.name?.toUpperCase()))

              return gitem.name?.toUpperCase().startsWith(text_to_search.toUpperCase()) || re.test(gitem.name?.toUpperCase());
          }).sort((a, b) => {
                  return a.name?.toLowerCase().indexOf(text_to_search?.toLowerCase()) < b.name?.toLowerCase().indexOf(text_to_search?.toLowerCase()) ? -1 : 1;
          });

       if(options.length ===0) {
       //do some suggestion
       this.showSuggestions = true
       this.options = result.map((geneItem) => {
            return {
              name: geneItem.name ?? 'NONE',
              // value: geneItem.value.toLowerCase(),
              // No need to convert value to lowercase
              value: geneItem.value,
              description: `Alt. names: ${geneItem.aliases}`,
            }
          }).filter((gitem) => {
              // var reg = new RegExp(text_to_search)
              let re = new RegExp(`${text_to_search.substring(0,3).toUpperCase()}`);
             // console.log("Matching-", re, re.test(gitem.name?.toUpperCase()))

              return gitem.name?.toUpperCase().startsWith(text_to_search.substring(0,3).toUpperCase()) || re.test(gitem.name?.toUpperCase());
          });

     }else {
       item.options = options
       this.showSuggestions = false
     }
        }

        return item
      })
    },
    updateStudyFilterOptions(study) {
      //Find Study ID
      if (study === undefined) {
        this.SelectedFilterOptions = {}
        return
      }

      newAPIService
        .getScatterPlotParametersByStudyID(this.$axios, study)
        .then((response) => {
          this.SelectedFilterOptions = response.data
        })
    },
  },
}
</script>
