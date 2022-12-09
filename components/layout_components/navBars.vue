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
                src="https://anima-uploads.s3.amazonaws.com/projects/61eb071259085a6271779ae5/releases/61eb07172db43d929ddc59c6/img/gilead-create-possible-svg-1@2x.svg"
                alt="Gilead"
              />
              <img
                class="hidden w-auto h-10 mr-8 lg:block"
                src="https://anima-uploads.s3.amazonaws.com/projects/61eb071259085a6271779ae5/releases/61eb07172db43d929ddc59c6/img/gilead-create-possible-svg-1@2x.svg"
                alt="Gilead"
              />
            </NuxtLink>
          </div>
          <div class="hidden sm:flex justify-between w-full sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <NuxtLink
                to="/summary"
                class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md"
                aria-current="page"
              >Summary</NuxtLink
              >
              <NuxtLink
                to="/new-ui"
                class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md"
                aria-current="page"
                >Custom Plot New</NuxtLink
              >
              <NuxtLink
                to="/custom-plot"
                class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >Bioinformatics Data Hub</NuxtLink
              >
              <NuxtLink
                to="/clinical-bioinformatics"
                class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >Publications</NuxtLink
              >
              <a
                href="http://bioinfo.na.gilead.com/CPD/"
                target="_blank"
                class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >Common Practice</a
              >
              <a
                href="http://bioinfo.na.gilead.com/tableau/"
                target="_blank"
                class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >Tableau</a
              >
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

        <!--        <div-->
        <!--          class="flex items-center justify-center flex-2 sm:items-stretch sm:justify-start"-->
        <!--        >-->
        <!--          <button-->
        <!--            data-collapse-toggle="mobile-menu-3"-->
        <!--            type="button"-->
        <!--            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"-->
        <!--            aria-controls="mobile-menu-3"-->
        <!--            aria-expanded="false"-->
        <!--          >-->
        <!--            <span class="sr-only">Open main menu</span>-->
        <!--            <svg-->
        <!--              class="w-6 h-6"-->
        <!--              fill="currentColor"-->
        <!--              viewBox="0 0 20 20"-->
        <!--              xmlns="http://www.w3.org/2000/svg"-->
        <!--            >-->
        <!--              <path-->
        <!--                fill-rule="evenodd"-->
        <!--                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"-->
        <!--                clip-rule="evenodd"-->
        <!--              ></path>-->
        <!--            </svg>-->
        <!--            <svg-->
        <!--              class="hidden w-6 h-6"-->
        <!--              fill="currentColor"-->
        <!--              viewBox="0 0 20 20"-->
        <!--              xmlns="http://www.w3.org/2000/svg"-->
        <!--            >-->
        <!--              <path-->
        <!--                fill-rule="evenodd"-->
        <!--                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"-->
        <!--                clip-rule="evenodd"-->
        <!--              ></path>-->
        <!--            </svg>-->
        <!--          </button>-->
        <!--        </div>-->

        <!--        <div id="mobile-menu-3" class="absolute right-0 w-48 py-1 mt-60 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">-->
        <!--          <NuxtLink-->
        <!--            to="/new-ui" class="block px-4 py-2 text-sm text-gray-700" aria-current="page" role="menuitem" tabindex="-1" id="user-menu-item-0"-->
        <!--          >New UI</NuxtLink-->
        <!--          >-->
        <!--          <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>-->
        <!--          <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>-->
        <!--        </div>-->
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <NuxtLink
          to="/new-ui"
          class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md"
          aria-current="page"
          >New UI</NuxtLink
        >
        <NuxtLink
          to="/custom-plot"
          class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
          >Bioinformatics Data Hub</NuxtLink
        >
        <NuxtLink
          to="/clinical-bioinformatics"
          class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
          >Publications</NuxtLink
        >
        <a
          href="http://bioinfo.na.gilead.com/tableau/#/knowledge-base"
          target="_blank"
          class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
          >Common Practice</a
        >
        <a
          href="http://bioinfo.na.gilead.com/tableau/"
          target="_blank"
          class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
          >Tableau</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navBars',
  components: {},
}
</script>
