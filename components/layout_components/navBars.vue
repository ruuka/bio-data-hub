<template>
  <nav class="bg-gray-800">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.

              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg
              class="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!--
              Icon when menu is open.

              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg
              class="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
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
                class="hidden w-auto h-10 lg:block"
                src="https://anima-uploads.s3.amazonaws.com/projects/61eb071259085a6271779ae5/releases/61eb07172db43d929ddc59c6/img/gilead-create-possible-svg-1@2x.svg"
                alt="Gilead"
              />
            </NuxtLink>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <NuxtLink
                to="/"
                class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md"
                aria-current="page"
                >Bioinformatics Data Hub</NuxtLink
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
        </div>

        <div
          class="flex items-center justify-center flex-2 sm:items-stretch sm:justify-start"
        >
          <div class="relative hidden mr-3 md:mr-0 md:block">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                class="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <!--            <input-->
            <!--              type="text"-->
            <!--              id="email-adress-icon"-->
            <!--              class="block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"-->
            <!--              placeholder="Search..."-->
            <!--            />-->
          </div>
          <button
            data-collapse-toggle="mobile-menu-3"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!--          <button-->
          <!--            type="button"-->
          <!--            class="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"-->
          <!--          >-->
          <!--            <span class="sr-only">View notifications</span>-->
          <!--            <div class="m-2 indicator">-->
          <!--              <div-->
          <!--                class="indicator-item indicator-top indicator-end badge badge-secondary"-->
          <!--              >-->
          <!--                3-->
          <!--              </div>-->
          <!--              &lt;!&ndash; Heroicon name: outline/bell &ndash;&gt;-->
          <!--              <svg-->
          <!--                class="w-6 h-6"-->
          <!--                xmlns="http://www.w3.org/2000/svg"-->
          <!--                fill="none"-->
          <!--                viewBox="0 0 24 24"-->
          <!--                stroke="currentColor"-->
          <!--                aria-hidden="true"-->
          <!--              >-->
          <!--                <path-->
          <!--                  stroke-linecap="round"-->
          <!--                  stroke-linejoin="round"-->
          <!--                  stroke-width="2"-->
          <!--                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"-->
          <!--                />-->
          <!--              </svg>-->
          <!--            </div>-->
          <!--          </button>-->

          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <div>
              <button
                type="button"
                class="flex text-sm bg-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <!--                <img class="w-8 h-8 rounded-full" src="" alt="">-->
                <svg
                  class="w-8 h-8 text-gray-400 bg-gray-100 rounded-full"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </button>
            </div>

            <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->

            <!-- Active: "bg-gray-100", Not Active: "" -->
            <!--            <div class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">-->
            <!--              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>-->
            <!--              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>-->
            <!--              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>-->
            <!--            </div>-->
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <NuxtLink
          to="/knowledge-base"
          class="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md"
          aria-current="page"
          >Knowledge Base</NuxtLink
        >

        <NuxtLink
          to="/tableau"
          class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
          >Tableau</NuxtLink
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
