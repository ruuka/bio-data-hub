<template>
  <div class="flex">
    <LeftMenuNew order="DESC" @selected-study="handleSelectedStudy" />
    <main class="bg-[#f5f5f5] w-full">
      <section class="w-full">
        <!-- NAV/BREADCRUMB AREA -->
        <div class="px-6 py-2.5 flex justify-between items-center bg-[#F9F9FC]">
          <nav class="text-dark-1">
            <ul class="flex items-center gap-2.5">
              <!-- link -->
              <li><a href="#">Home</a></li>
              <!-- arrow -->
              <svg
                class="fill-[#a19cff] h-5"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 30 30"
              >
                <path
                  d="M12,27h-2c-0.386,0-0.738-0.223-0.904-0.572s-0.115-0.762,0.13-1.062L17.708,15L9.226,4.633 c-0.245-0.299-0.295-0.712-0.13-1.062S9.614,3,10,3h2c0.3,0,0.584,0.135,0.774,0.367l9,11c0.301,0.369,0.301,0.898,0,1.267l-9,11 C12.584,26.865,12.3,27,12,27z"
                />
              </svg>
              <!-- link -->
              <li><a href="#">Clinical Data</a></li>
              <!-- arrow -->
              <svg
                class="fill-[#a19cff] h-5"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 30 30"
              >
                <path
                  d="M12,27h-2c-0.386,0-0.738-0.223-0.904-0.572s-0.115-0.762,0.13-1.062L17.708,15L9.226,4.633 c-0.245-0.299-0.295-0.712-0.13-1.062S9.614,3,10,3h2c0.3,0,0.584,0.135,0.774,0.367l9,11c0.301,0.369,0.301,0.898,0,1.267l-9,11 C12.584,26.865,12.3,27,12,27z"
                />
              </svg>
              <!-- link -->
              <li><a href="#">Default Plot</a></li>
            </ul>
          </nav>

          <button>
            <svg
              class="fill-dark-1 h-5 rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
            >
              <path
                d="M17.90625 3.0039062C17.808828 3.013125 17.710938 3.0376719 17.617188 3.0761719C17.243187 3.2311719 17 3.595 17 4L17 6L2 6L2 8L17 8L17 10C17 10.404 17.243188 10.768828 17.617188 10.923828C17.741187 10.974828 17.871 11 18 11C18.26 11 18.516031 10.898031 18.707031 10.707031L21.707031 7.7070312C22.098031 7.3160312 22.098031 6.6829688 21.707031 6.2929688L18.707031 3.2929688C18.492531 3.0784687 18.198516 2.97625 17.90625 3.0039062 z M 6.09375 13.003906C5.8014844 12.97625 5.5074687 13.078469 5.2929688 13.292969L2.2929688 16.292969C1.9019687 16.682969 1.9019687 17.316031 2.2929688 17.707031L5.2929688 20.707031C5.4839687 20.898031 5.74 21 6 21C6.129 21 6.2588125 20.974828 6.3828125 20.923828C6.7568125 20.768828 7 20.404 7 20L7 18L22 18L22 16L7 16L7 14C7 13.596 6.7568125 13.231172 6.3828125 13.076172C6.2890625 13.037672 6.1911719 13.013125 6.09375 13.003906 z"
              />
            </svg>
          </button>
        </div>
        <section class="px-6 mt-5">
          <!-- PARAGRAPH -->
          <div
            class="bg-white p-3 text-dark-2 [box-shadow:0px_4px_4px_rgba(9,11,33,0.02)] rounded-xl"
          >
            <p class="text-sm">
              Instructions: To begin, select the study of interest. From there,
              choose different study parameters you are interested between the
              horizontal axis and the vertical y axis. Depending on the choices
              chosen, you can visualize bar plots with categorical variables,
              box plots with categorical and numerical variables, and scatter
              plot with numerical and numerical variables.
            </p>
          </div>

          <!-- FILTERS -->
          <section
            class="bg-white mt-5 [box-shadow:0px_4px_4px_rgba(9,11,33,0.02)] rounded-xl"
          >
            <header class="flex items-center justify-between py-4 px-4">
              <!-- left -->
              <div class="flex items-center gap-2 text-xs">
                <div
                  class="hourglass px-2 py-1.5 w-max inline-block rounded bg-red"
                >
                  <svg
                    class="h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                    fill="#FFFFFF"
                  >
                    <path
                      d="M5 3L5 5L7 5L7 6.34375C7 7.6692803 7.526238 8.9415505 8.4648438 9.8789062L10.585938 12L8.4648438 14.121094C7.526238 15.05845 7 16.33072 7 17.65625L7 19L5 19L5 21L19 21L19 19L17 19L17 17.65625C17 16.330841 16.472461 15.058398 15.535156 14.121094L13.414062 12L15.535156 9.8789062C16.473212 8.9408509 17 7.6692803 17 6.34375L17 5L19 5L19 3L5 3 z M 9 5L15 5L15 6.34375C15 6.9381281 14.823391 7.5123753 14.5 8L9.5 8C9.1760711 7.5127919 9 6.9387149 9 6.34375L9 5 z M 12 13.414062L14.121094 15.535156C14.683789 16.097852 15 16.861659 15 17.65625L15 19L13.802734 19C13.309819 17.674682 12 17 12 17C12 17 10.690181 17.674682 10.197266 19L9 19L9 17.65625C9 16.85978 9.315512 16.099754 9.8789062 15.537109L12 13.414062 z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </div>
                <p
                  class="py-1.5 px-2 rounded inline-flex bg-red text-white relative"
                >
                  Study:
                  <a
                    href="#"
                    class="tooltip tooltip-top flex"
                    :data-tip="selectedStudy && selectedStudy.study_id"
                  >
                    <span class="w-20 truncate text-ellipsis">{{
                      selectedStudy && selectedStudy.study_id
                    }}</span>
                  </a>
                </p>
                <p
                  class="py-1.5 px-2 rounded inline-flex bg-red text-white relative"
                >
                  Therapeutic Area:
                  <a
                    href="#"
                    class="tooltip tooltip-top flex"
                    :data-tip="selectedStudy && selectedStudy.therapeutic_area"
                  >
                    <span class="w-20 truncate text-ellipsis">
                      {{
                        selectedStudy && selectedStudy.therapeutic_area
                      }}</span
                    >
                  </a>
                </p>
                <div
                  class="py-1.5 px-2 rounded inline-flex bg-red text-white relative"
                >
                  Name:
                  <a
                    href="#"
                    class="tooltip tooltip-top flex"
                    :data-tip="selectedStudy && selectedStudy.name"
                  >
                    <span class="w-20 truncate text-ellipsis">{{
                      selectedStudy && selectedStudy.name
                    }}</span>
                  </a>
                </div>
              </div>
              <!-- right -->
              <div class="flex-1 flex items-center gap-2">
                <div
                  class="filter px-4 py-1.5 w-max inline-block relative rounded"
                >
                  <svg
                    class="h-4 fill-dark-1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M5 4L5 6.34375L5.21875 6.625L13 16.34375L13 28L14.59375 26.8125L18.59375 23.8125L19 23.5L19 16.34375L26.78125 6.625L27 6.34375L27 4 Z M 7.28125 6L24.71875 6L17.53125 15L14.46875 15 Z M 15 17L17 17L17 22.5L15 24Z"
                    />
                  </svg>
                </div>
                <div
                  v-for="selectedItem in selectedScatterPlotParams"
                  :key="selectedItem"
                  class="py-0.5 px-2 text-xs flex items-center rounded bg-[#e7e5ff] text-dark-1"
                >
                  {{ selectedItem }}
                  <button class="p-1" @click="toggleSelection(selectedItem)">
                    <svg
                      class="h-4 fill-dark-3"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 50 50"
                    >
                      <path
                        d="M9.15625 6.3125L6.3125 9.15625L22.15625 25L6.21875 40.96875L9.03125 43.78125L25 27.84375L40.9375 43.78125L43.78125 40.9375L27.84375 25L43.6875 9.15625L40.84375 6.3125L25 22.15625Z"
                      />
                    </svg>
                  </button>
                </div>

                <button
                  class="py-1.5 px-4 flex items-center relative rounded bg-[#ececec] text-dark-1"
                  tabindex="1"
                  @focus="openDropDown = !openDropDown"
                >
                  <svg
                    class="h-4 fill-dark-3"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 30 30"
                  >
                    <path
                      d="M14.970703 2.9726562 A 2.0002 2.0002 0 0 0 13 5L13 13L5 13 A 2.0002 2.0002 0 1 0 5 17L13 17L13 25 A 2.0002 2.0002 0 1 0 17 25L17 17L25 17 A 2.0002 2.0002 0 1 0 25 13L17 13L17 5 A 2.0002 2.0002 0 0 0 14.970703 2.9726562 z"
                    />
                  </svg>
                  <div
                    v-if="weeks.length > 0 && openDropDown"
                    class="absolute w-64 h-80 overflow-y-scroll p-4 bg-white right-0 z-[99999] shadow top-10"
                  >
                    <div
                      v-for="keyItem in weeks"
                      :key="keyItem"
                      class="group py-2"
                    >
                      <div class="items">
                        <div
                          class="option flex gap-2 items-center text-xs font-light whitespace-nowrap text-ellipsis truncate"
                        >
                          <input
                            :id="keyItem"
                            type="checkbox"
                            name=""
                            class="h-4 w-4 flex-none"
                            :checked="
                              selectedScatterPlotParams.includes(keyItem)
                            "
                            :disabled="
                              !selectedScatterPlotParams.includes(keyItem) &&
                              selectedScatterPlotParams.length > 2
                            "
                            @click="toggleSelection(keyItem)"
                          />
                          <label :for="keyItem" class="">{{ keyItem }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </header>
            <section
              class="filters border-t-4 flex justify-between items-end border-[#f5f5f5] py-4 px-2"
            >
              <!-- filter-group -->
              <div class="grid grid-cols-4 gap-3 w-max">
                <!-- filter -->
                <div class="flex p-2 gap-2 flex-col max-w-[180px] text-sm">
                  <div
                    class="text-center bg-dark-1 font-semibold text-white py-1.5 px-2.5 rounded"
                  >
                    Plot Type
                  </div>
                  <label
                    class="custom-select w-full relative [box-shadow:0px1px10pxrgba(84,86,91,0.2)]"
                    tabindex="1"
                    :disabled="!selectedStudy"
                  >
                    <button
                      class="py-1.5 w-full px-2.5 rounded border disabled:opacity-30 disabled:cursor-not-allowed outline-none focus:outline-none focus:border-purple font-medium bg-[#f3f3f8] flex justify-between items-center gap-2 text-dark-2 group hover:text-purple"
                      :disabled="!selectedStudy"
                    >
                      {{ plotType.selectedValue.name || '- Select Type -' }}
                      <svg
                        v-if="selectedStudy"
                        class="fill-dark-2 h-4 group-hover:fill-purple transition-transform duration-200"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 30 30"
                      >
                        <path
                          d="M3,12v-2c0-0.386,0.223-0.738,0.572-0.904s0.762-0.115,1.062,0.13L15,17.708l10.367-8.482 c0.299-0.245,0.712-0.295,1.062-0.13C26.779,9.261,27,9.614,27,10v2c0,0.3-0.135,0.584-0.367,0.774l-11,9 c-0.369,0.301-0.898,0.301-1.267,0l-11-9C3.135,12.584,3,12.3,3,12z"
                        />
                      </svg>
                    </button>
                    <ul
                      class="menu relative w-max mt-1 drop-shadow-md rounded-xl bg-white"
                    >
                      <p
                        class="menu-item px-3 py-1.5 cursor-none pointer-events-none hover:bg-gray-100"
                      >
                        Select Type
                      </p>
                      <li
                        v-for="item in plotType.options"
                        :key="item.id"
                        class="menu-item px-3 relative py-1.5 hover:bg-white bg-[#f3f3f8] cursor-pointer"
                        @click="setSelectedPlotType(item)"
                      >
                        {{ item.name }}
                      </li>
                    </ul>
                  </label>
                </div>
                <!-- filter -->
                <div class="flex p-2 gap-2.5 flex-col max-w-[200px] text-sm">
                  <div
                    class="text-center bg-dark-1 font-semibold text-white py-1.5 px-2.5 rounded"
                  >
                    Analyte
                  </div>
                  <!-- START BIOMARKER -->
                  <div
                    v-if="
                      plotType.selectedValue &&
                      plotType.selectedValue.id === 'biomarker'
                    "
                    class="dropdown flex items-center relative"
                    tabindex="1"
                  >
                    <!-- START DROPDOWN -->

                    <vue-tags-input
                      v-model="searchQuery"
                      class="w-64 overflow-x-auto"
                      :tags="tags"
                      :disabled="!selectedStudy"
                      placeholder=""
                      @tags-changed="(newTags) => handleTags(newTags)"
                    />

                    <!-- END DROPDOWN -->
                    <div
                      v-show="showDropdown"
                      class="absolute dropdown-item h-[80] overflow-y-auto -left-1/4 top-10 z-50 w-max mt-2 px-3 py-2.5 [box-shadow:0px1px10pxrgba(84,86,91,0.2)] rounded-xl bg-white"
                    >
                      <p class="text-sm mb-2 text-[#32324D]">Search Filter:</p>
                      <!-- SELECTED -->
                      <div
                        class="bg-[#f3f3f8] py-1 px-1.5 flex gap-2 max-w-md overflow-x-auto"
                      >
                        <section
                          v-for="(gitem, index) in selectedBiomarkers"
                          :key="index + 'biomarker'"
                          class="tag py-0.5 px-2.5 text-sm flex items-center rounded bg-white w-max text-dark-1"
                        >
                          {{ gitem.text }}
                          <button
                            class="p-1"
                            @click="removeSelectedGene(gitem, 'biomarker')"
                          >
                            <svg
                              class="h-4 fill-dark-3"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              viewBox="0 0 50 50"
                            >
                              <path
                                d="M9.15625 6.3125L6.3125 9.15625L22.15625 25L6.21875 40.96875L9.03125 43.78125L25 27.84375L40.9375 43.78125L43.78125 40.9375L27.84375 25L43.6875 9.15625L40.84375 6.3125L25 22.15625Z"
                              />
                            </svg>
                          </button>
                        </section>
                      </div>
                      <!-- grayed -->
                      <section
                        v-if="biomarkers"
                        class="mt-2 bg-[#f3f3f8] flex flex-col gap-2"
                      >
                        <!-- item -->
                        <div
                          v-for="(biomarker, index) in filteredBiomarkers"
                          :key="index + 'biomarker'"
                          class="text-sm hover:bg-white px-4 py-1 cursor-pointer"
                          @click="selectGene(biomarker, 'biomarker')"
                        >
                          <p class="font-semibold text-[#32324d]">
                            {{ biomarker }}
                          </p>
                        </div>
                      </section>
                    </div>
                    <svg
                      class="h-4 fill-dark-1 absolute right-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M20.5 6C12.509634 6 6 12.50964 6 20.5C6 28.49036 12.509634 35 20.5 35C23.956359 35 27.133709 33.779044 29.628906 31.75L39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453L31.75 29.628906C33.779044 27.133709 35 23.956357 35 20.5C35 12.50964 28.490366 6 20.5 6 z M 20.5 9C26.869047 9 32 14.130957 32 20.5C32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016C26.405717 30.776199 23.602614 32 20.5 32C14.130953 32 9 26.869043 9 20.5C9 14.130957 14.130953 9 20.5 9 z"
                      />
                    </svg>
                  </div>

                  <!-- START GENE EXPRESSION -->
                  <div
                    v-if="
                      plotType.selectedValue &&
                      plotType.selectedValue.id === 'gene-expression'
                    "
                    class="dropdown flex items-center relative z-50"
                    tabindex="1"
                  >
                    <!-- START DROPDOWN -->

                    <vue-tags-input
                      v-model="searchQuery"
                      class="w-64 overflow-x-auto"
                      placeholder=""
                      :disabled="!selectedStudy"
                      :tags="tags"
                      @tags-changed="(newTags) => handleTags(newTags)"
                    />

                    <!-- END DROPDOWN -->
                    <div
                      v-show="showDropdown"
                      class="absolute dropdown-item h-64 overflow-y-auto left-[5%] top-10 w-max mt-2 z-50 px-3 py-2.5 [box-shadow:0px1px10pxrgba(84,86,91,0.2)] rounded-xl bg-white"
                    >
                      <p class="text-sm mb-2 text-[#32324D]">Search Filter:</p>
                      <!-- SELECTED -->
                      <div
                        class="bg-[#f3f3f8] py-1 px-1.5 flex gap-2 max-w-md overflow-x-auto"
                      >
                        <section
                          v-for="(gitem, index) in selectedGeneAliases"
                          :key="index + 'gene'"
                          class="tag py-0.5 px-2.5 text-sm flex items-center rounded bg-white w-max text-dark-1"
                        >
                          {{ gitem.text }}
                          <button
                            class="p-1"
                            @click="
                              removeSelectedGene(gitem, 'gene-expression')
                            "
                          >
                            <svg
                              class="h-4 fill-dark-3"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              viewBox="0 0 50 50"
                            >
                              <path
                                d="M9.15625 6.3125L6.3125 9.15625L22.15625 25L6.21875 40.96875L9.03125 43.78125L25 27.84375L40.9375 43.78125L43.78125 40.9375L27.84375 25L43.6875 9.15625L40.84375 6.3125L25 22.15625Z"
                              />
                            </svg>
                          </button>
                        </section>
                      </div>
                      <!-- grayed -->
                      <section
                        v-if="filteredGeneAliases"
                        class="mt-2 bg-[#f3f3f8] flex flex-col gap-2"
                      >
                        <!-- item -->
                        <div
                          v-for="gene in filteredGeneAliases"
                          :key="gene.text"
                          class="text-sm hover:bg-white px-4 py-1 cursor-pointer"
                          @click="selectGene(gene.text, 'gene-expression')"
                        >
                          <p class="font-semibold text-[#32324d]">
                            {{ gene.text }}
                          </p>
                        </div>
                      </section>
                    </div>
                    <svg
                      class="h-4 fill-dark-1 absolute right-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M20.5 6C12.509634 6 6 12.50964 6 20.5C6 28.49036 12.509634 35 20.5 35C23.956359 35 27.133709 33.779044 29.628906 31.75L39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453L31.75 29.628906C33.779044 27.133709 35 23.956357 35 20.5C35 12.50964 28.490366 6 20.5 6 z M 20.5 9C26.869047 9 32 14.130957 32 20.5C32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016C26.405717 30.776199 23.602614 32 20.5 32C14.130953 32 9 26.869043 9 20.5C9 14.130957 14.130953 9 20.5 9 z"
                      />
                    </svg>
                  </div>
                </div>
                <!-- filter -->
                <div class="flex gap-2.5 p-2 flex-col max-w-[180px] text-sm">
                  <div
                    class="text-center bg-dark-1 font-semibold text-white py-1.5 px-2.5 rounded"
                  >
                    Source
                  </div>
                  <select
                    v-model="selectedTissueSource"
                    name="tissue"
                    :disabled="!selectedStudy"
                    class="py-1.5 px-2.5 rounded disabled:opacity-30 border outline-none focus:outline-none focus:border-purple font-medium bg-[#f3f3f8] text-dark-2 hover:text-purple"
                  >
                    <option value="" class="text-purple">- Source -</option>
                    <template v-if="tissueSources.length > 0">
                      <option
                        v-for="tissue in tissueSources"
                        :key="tissue"
                        :value="tissue"
                        class="text-purple"
                      >
                        {{ tissue }}
                      </option>
                    </template>
                  </select>
                </div>
                <!-- filter -->
                <div
                  class="flex border border-purple border-dashed p-2 border-gray-400 gap-2.5 flex-col max-w-[180px] text-sm"
                >
                  <div
                    class="text-center bg-dark-1 font-semibold text-white py-1.5 px-2.5 rounded"
                  >
                    Stratification
                  </div>
                  <select
                    name="stratification"
                    :disabled="!selectedStudy"
                    class="py-1.5 px-2.5 rounded border disabled:opacity-30 outline-none focus:outline-none focus:border-purple font-medium bg-[#f3f3f8] text-dark-2 hover:text-purple"
                  >
                    <option value="" class="text-purple">- Treatment -</option>
                    <template v-if="stratification">
                      <option
                        v-for="strat in stratification"
                        :key="strat"
                        :value="strat"
                        class="text-purple"
                      >
                        {{ strat }}
                      </option>
                    </template>
                  </select>
                </div>
              </div>

              <div>
                <button
                  class="bg-red text-sm py-2 px-4 mr-1 rounded text-white disabled:opacity-30"
                  :disabled="!selectedStudy"
                  @click="postData()"
                >
                  Make Plot
                </button>
              </div>
            </section>
          </section>
        </section>
      </section>

      <section>
        <NewUIPlot
          v-if="result.length > 0"
          :box-plot-data="result"
          :treatments="treatments"
        />
      </section>
    </main>
  </div>
</template>

<script>
import LeftMenuNew from '~/components/layout_components/leftMenuNew.vue'
import newAPIService from '~/services/newAPIService.js'
import NewUIPlot from '~/components/plotly_components/NewUIPlot.vue'
export default {
  name: 'NewUi',
  components: {
    LeftMenuNew,
    NewUIPlot,
  },
  layout: 'newLayout',
  data() {
    return {
      selectedStudy: null,
      selectedStudyData: [],
      SelectedFilterOptions: null,
      selectedScatterPlotParams: [],
      scatterPlotParams: null,
      selectedBiomarkers: [],
      openDropDown: false,
      showDropdown: true,
      treatments: [],
      tag: '',
      tags: [],
      tissueSources: [],
      selectedTissueSource: [],
      plotType: {
        selectedValue: {},
        options: [
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
      selectedGeneAliases: [],
      geneAliases: [],
      allAliases: [],
      allBiomarkers: [],
      biomarkers: [],
      searchQuery: '',
      result: [],
      typesummary: [],
      source: [],
      stratification: [],
      weeks: [],
    }
  },
  computed: {
    // weeks() {
    //   const weeks = this.selectedStudyData.map((item) => {
    //     return item.week
    //   })

    //   return [...new Set(weeks)].sort((a, b) => a - b)
    // },
    filteredBiomarkers() {
      return this.biomarkers.filter((item) => {
        let isSelected = false
        for (let i = 0; i < this.selectedBiomarkers.length; i++) {
          if (
            JSON.stringify(item) ===
            JSON.stringify(this.selectedBiomarkers[i].text)
          ) {
            isSelected = true
            break
          }
        }
        return !isSelected
      })
    },
    filteredGeneAliases() {
      return (
        this.formattedGeneAliases &&
        this.formattedGeneAliases.filter((item) => {
          let isSelected = false
          for (let i = 0; i < this.selectedGeneAliases.length; i++) {
            if (
              JSON.stringify(item.text) ===
              JSON.stringify(this.selectedGeneAliases[i].text)
            ) {
              isSelected = true
              break
            }
          }
          return !isSelected
        })
      )
    },
    getRemainingFilters() {
      const unwantedKeys = [
        'tissue',
        'treatment',
        'has_geneExpression',
        'has_biomarker',
        'has_pathwayExpression',
        'response',
      ]
      return Object.keys(this.scatterPlotParams)
        .filter((key) => !unwantedKeys.includes(key))
        .reduce((obj, key) => {
          obj[key] = this.scatterPlotParams[key]
          return obj
        }, {})
    },
    formattedGeneAliases() {
      if (this.geneAliases && this.geneAliases.length > 0) {
        return this.geneAliases.slice(0, 10) // TODO: REMOVE THIS TO SHOW ALL
      }
      return false
    },
    getFilteredScatterPlots() {
      return this.scatterPlotParams && Object.keys(this.getRemainingFilters)
    },
  },
  watch: {
    searchQuery() {
      this.updateGeneAlias()
    },
  },
  mounted() {
    newAPIService.getClinicalTypeSummary(this.$axios).then((res) => {
      this.typesummary = res.data
      console.log('TYPE SUMMARY', this.typesummary)
    })
  },
  methods: {
    async setSelectedPlotType(item) {
      this.plotType.selectedValue = item
      this.tags = []
      this.selectedBiomarkers = []
      this.selectedGeneAliases = []
      await this.getTreatmentsByPlottype()
    },
    toggleSelection(param) {
      if (this.selectedScatterPlotParams.includes(param)) {
        this.selectedScatterPlotParams = this.selectedScatterPlotParams.filter(
          (p) => p !== param
        )
      } else {
        this.selectedScatterPlotParams.push(param)
      }
    },
    getSubItems(key) {
      return this.scatterPlotParams[key]
    },
    removeSelectedGene(gene, type) {
      if (type === 'biomarker') {
        this.selectedBiomarkers = this.selectedBiomarkers.filter(
          (item) => item.text !== gene.text
        )
        this.tags = this.selectedBiomarkers
      } else {
        this.selectedGeneAliases = this.selectedGeneAliases.filter(
          (item) => item.text !== gene.text
        )
        this.tags = this.selectedGeneAliases
      }
    },

    updateArray(array, item) {
      let exists = false
      for (let i = 0; i < array.length; i++) {
        if (JSON.stringify(array[i]) === JSON.stringify(item)) {
          exists = true
          break
        }
      }
      if (!exists) {
        array = [item]
      }
      return array
    },

    handleTags(newTags) {
      const type = this.plotType.selectedValue.id

      if (type === 'biomarker') {
        const filteredTags = newTags.filter((item) => {
          return this.biomarkers.includes(
            (itm) => itm.toLowerCase() === item.text.toLowerCase()
          )
        })
        this.tags = filteredTags
      } else {
        const filteredTags = newTags.filter((item) => {
          return this.allAliases.some(
            (itm) => itm.text.toLowerCase() === item.text.toLowerCase()
          )
        })
        this.tags = filteredTags
      }
    },

    updateGeneAlias() {
      //  const tempGenes=JSON.stringify(this.geneAliases)
      if (this.plotType.selectedValue.id === 'gene-expression') {
        if (this.searchQuery === '') {
          this.geneAliases = this.allAliases
          return
        }
        this.geneAliases = this.geneAliases.filter((item) => {
          return item.text
            ?.toLowerCase()
            .includes(this.searchQuery?.toLowerCase())
        })
      } else {
        this.biomarkers = this.biomarkers.filter((item) => {
          return item?.toLowerCase().includes(this.searchQuery?.toLowerCase())
        })
        if (this.searchQuery === '') {
          this.biomarkers = this.allBiomarkers
        }
      }
    },
    selectGene(item, type) {
      if (type === 'biomarker') {
        this.tags = this.updateArray(this.selectedBiomarkers, { text: item })

        this.selectedBiomarkers = [{ text: item }]
      } else {
        this.tags = this.updateArray(this.selectedGeneAliases, { text: item })
        this.selectedGeneAliases = [{ text: item }]
      }
    },

    getStudiesByTheraputicArea(therapeuticarea) {
      return this.allStudies.filter((item) => {
        return item.THERAPEUTICAREA === therapeuticarea
      })
    },
    getSummaryType() {
      return this.selectedStudy.type ? this.selectedStudy.type : ''
    },
    handleSelectedStudy(study) {
      if (
        this.selectedStudy &&
        this.selectedStudy.study_id === study.study_id
      ) {
        this.selectedStudy = null
        this.plotType.selectedValue = {}
      } else {
        this.selectedStudy = study
      }
      newAPIService
        .getClinicalSummaryById(this.$axios, study.study_id)
        .then((res) => {
          this.selectedStudyData = res.data
        })
      // get the treatmentsandStratification
      const type = this.getSummaryType()
      console.log('TYPE', type)
      newAPIService
        .getTreatmentAndTimePointsByID(this.$axios, study.study_id, type)
        .then((res) => {
          this.stratification = res.data[0].stratification
          this.weeks = res.data[0].timepoints
        })
      this.updateStudyFilterOptions(study.study_id)
    },

    // eslint-disable-next-line camelcase
    async getAllGeneIds(study) {
      this.geneAliases = await newAPIService.getClinicalGenesById(
        this.$axios,
        study
      )
    },
    async getPlotData(formData) {
      this.result = []
      const wks =
        this.selectedScatterPlotParams.length > 0
          ? this.selectedScatterPlotParams
          : this.weeks.slice(0, 3)
      if (this.plotType.selectedValue.id === 'biomarker') {
        for (let i = 0; i < this.treatments.length; i++) {
          for (let k = 0; k < wks.length; k++) {
            const response = await newAPIService.postToBiomarkers(this.$axios, {
              ...formData,
              treatment: this.treatments[i],
              week: wks[k],
            })
            this.result.push({
              plotType: this.plotType.selectedValue.id,
              data: response.data,
              treatment: this.treatments[i],
              week: wks[k],
            })
          }
        }
      } else {
        for (let i = 0; i < this.treatments.length; i++) {
          for (let k = 0; k < wks.length; k++) {
            const response = await newAPIService.postToGeneExpression(
              this.$axios,
              {
                ...formData,
                treatment: this.treatments[i],
                week: wks[k],
              }
            )
            this.result.push({
              plotType: this.plotType.selectedValue.id,
              data: response.data,
              treatment: this.treatments[i],
              week: wks[k],
            })
          }
        }
      }
    },
    async postData() {
      const formData =
        this.plotType.selectedValue.id === 'biomarker'
          ? this.formatBiomarkerBody()
          : this.formatGeneExpressionbBody()
      await this.getPlotData(formData)
      // if (this.plotType.selectedValue.id === 'biomarker') {
      //   const formData = this.formatBiomarkerBody()
      //   const response = await newAPIService.postToBiomarkers(
      //     this.$axios,
      //     formData
      //   )
      //   console.log('response', response)
      // } else {
      //   console.log('Gene body', this.formatGeneExpressionbBody())
      // }
    },
    formatBiomarkerBody() {
      return {
        study_id: this.selectedStudy.study_id,
        biomarkers: this.selectedBiomarkers.map((item) => item.text),
        analyte: ['string'],
        // treatment: 'Placebo',
        week: 0,
      }
    },
    formatGeneExpressionbBody() {
      return {
        study_id: this.selectedStudy.study_id,
        genes: this.selectedGeneAliases.map((item) => item.text),
        tissue_sources: [this.selectedTissueSource],
        // treatment: 'Placebo',
        week: 0,
      }
    },

    async getTreatmentsByPlottype() {
      // Get Treatments
      const TreatmentResponse = await newAPIService.getClinicalTreatments(
        this.$axios,
        this.selectedStudy.study_id,
        this.plotType.selectedValue.id
      )
      this.treatments = TreatmentResponse.data
      // console.log(this.plotType.selectedValue.id, this.treatments)
    },
    async updateStudyFilterOptions(study) {
      if (!study) {
        this.SelectedFilterOptions = {}
        return
      }
      // Get Genes
      const response = await newAPIService.getClinicalGenesById(
        this.$axios,
        study
      )
      const formatedRes = response.data.map((item) => {
        return {
          text: item,
        }
      })
      this.geneAliases = formatedRes
      this.allAliases = formatedRes

      // Get tissue sources
      const TResponse = await newAPIService.getClinicalTissuesSourcesById(
        this.$axios,
        study
      )

      this.tissueSources = TResponse.data

      // GET BIOMARKERS
      const biomarkerResponse = await newAPIService.getClinicalBiomarkersById(
        this.$axios,
        study
      )
      this.biomarkers = biomarkerResponse.data
      this.allBiomarkers = biomarkerResponse.data

      // newAPIService
      //   .getScatterPlotParametersByStudyID(this.$axios, study)
      //   .then((response) => {
      //     this.SelectedFilterOptions = response.data
      //     console.log('Called updateStudyFilterOptions Func', response.data)
      //     // this.setTimePoint(response.data)
      //     // this.setTissueType(response.data)
      //     // this.setDataTypeVertical()
      //   })

      //  this.getAllBioMarkerNames(study)
    },
  },
}
</script>

<style scoped>
.dropdown-item {
  @apply h-[18rem] z-50;
}
</style>
