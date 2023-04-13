<template>
  <nav class="bg-gray-800">
    <div class="mx-auto sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start"
        >
          <div class="flex items-center flex-shrink-0">
            <NuxtLink to="/">
              <img
                class="block w-auto h-10 lg:hidden"
                src="~/static/gilead-create-possible-svg-1@2x.svg"
                alt="Gilead"
              />
              <img
                class="hidden w-auto h-10 mr-8 lg:block"
                src="~/static/gilead-create-possible-svg-1@2x.svg"
                alt="Gilead"
              />
            </NuxtLink>
          </div>
          <div class="hidden sm:flex justify-between w-full sm:ml-6">
            <div class="flex space-x-6">

              <div class="dropdown inline-block relative">
                <button class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md inline-flex items-center">
                  <span class="mr-1">Visualization</span>
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul class="dropdown-menu absolute hidden text-gray-700 text-sm pt-1 w-36">
                  <li class=""><NuxtLink to="/summary" aria-current="page" class="rounded-t text-white bg-gray-700 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Datasets</NuxtLink></li>
                  <li class=""><NuxtLink to="/new-ui" aria-current="page" class="text-white bg-gray-700 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Data-Hub</NuxtLink></li>
                  <li class=""><NuxtLink to="/tableau" aria-current="page" class="text-white bg-gray-700 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Tableau</NuxtLink></li>
                  <li class=""><a href="http://cbioportal.na.gilead.com" aria-current="page" class="rounded-b text-white bg-gray-700 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">cBioPortal</a></li>
                </ul>
              </div>

              <div class="dropdown inline-block relative">
                <button class="px-3 py-2 text-sm font-medium text-white rounded-md inline-flex items-center">
                  <span class="mr-1">Team</span>
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul class="dropdown-menu absolute hidden text-gray-700 text-sm pt-1 w-40">
                  <li class=""><NuxtLink to="/team" aria-current="page" class="rounded-t text-white bg-gray-700 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Profile</NuxtLink></li>
                  <li class=""><NuxtLink to="/mission" aria-current="page" class="rounded-b text-white bg-gray-700 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">TA</NuxtLink></li>
                </ul>
              </div>

              <div class="dropdown inline-block relative">
                <button class="px-3 py-2 text-sm font-medium text-white rounded-md inline-flex items-center">
                  <span class="mr-1">Document</span>
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul class="dropdown-menu absolute hidden text-gray-700 text-sm pt-1">
                  <li class=""><a href="http://bioinfo.na.gilead.com/CPD/" aria-current="page" class="rounded-t text-white bg-gray-700 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Common Practice</a></li>
                  <li class=""><NuxtLink to="/clinical-bioinformatics" aria-current="page" class="rounded-b text-white bg-gray-700 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Publications</NuxtLink></li>
                </ul>
              </div>

              <div class="dropdown inline-block relative">
                <button class="px-3 py-2 text-sm font-medium text-white rounded-md inline-flex items-center">
                  <span class="mr-1">Resource</span>
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul class="dropdown-menu absolute hidden text-gray-700 text-sm pt-1">
                  <li class=""><NuxtLink to="/upload" aria-current="page" class="rounded-t text-white bg-gray-700 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">ICF Upload</NuxtLink></li>
                  <li class=""><NuxtLink to="/custom-plot" aria-current="page" class="rounded-b text-white bg-gray-700 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Bioinformatics Data Hub</NuxtLink></li>
                </ul>
              </div>
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

            </div>
          </div>

          <NuxtLink to="/">
            <img
              class="hidden w-auto h-10 lg:block"
              src="~/static/cbea-logo.svg"
              alt="CBEA"
            />
          </NuxtLink>
        </div>

      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <!--    <div class="sm:hidden" id="mobile-menu">-->
    <!--      <div class="px-2 pt-2 pb-3 space-y-1">-->
    <!--        &lt;!&ndash; Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" &ndash;&gt;-->
    <!--        <NuxtLink-->
    <!--          to="/new-ui"-->
    <!--          class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md"-->
    <!--          aria-current="page"-->
    <!--        >New UI</NuxtLink-->
    <!--        >-->
    <!--        <NuxtLink-->
    <!--          to="/custom-plot"-->
    <!--          class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"-->
    <!--        >Bioinformatics Data Hub</NuxtLink-->
    <!--        >-->
    <!--        <NuxtLink-->
    <!--          to="/clinical-bioinformatics"-->
    <!--          class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"-->
    <!--        >Publications</NuxtLink-->
    <!--        >-->
    <!--        <a-->
    <!--          href="http://bioinfo.na.gilead.com/tableau/#/knowledge-base"-->
    <!--          target="_blank"-->
    <!--          class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"-->
    <!--        >Common Practice</a-->
    <!--        >-->
    <!--        <a-->
    <!--          href="http://bioinfo.na.gilead.com/tableau/"-->
    <!--          target="_blank"-->
    <!--          class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"-->
    <!--        >Tableau</a-->
    <!--        >-->
    <!--      </div>-->
    <!--    </div>-->
  </nav>

</template>

<script>
export default {
  name: 'navBars',
  components: {},
}
</script>
