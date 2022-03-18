<template>
  <section
    class="w-7/12 card flex flex-col space-y-6 pb-4 -mt-32 2xl:-mt-0 pl-12 2xl:pl-[13rem]"
  >
    <div class="h-[10rem] w-full rounded-2xl z-50 bg-white p-4 shadow-sm">
      <div class="flex justify-between align-top">
        <div class="w-3/4 flex-none relative">
          <div class="flex space-x-2 items-center">
            <div
              class="flex-none z-0 top-3 border-b-[10px] border-gray-300 rounded-full h-[100px] w-[100px] bg-red-500 flex items-center justify-center"
            >
              <img
                src="~/static/profile.png"
                class="-mt-10 h-[104px] w-[100px] object-contain"
              />
            </div>
            <div class="flex justify-between flex-wrap items-center mt-4 px-4">
              <h4 class="text-lg font-normal mr-3">
                John Smith
                <span
                  class="text-gray-400 hover:cursor-pointer hover:text-red-600"
                >
                  <font-awesome-icon :icon="['far', 'angle-down']" />
                </span>
              </h4>

              <div class="w-full mt-1 text-xs text-gray-800">
                <p>
                  <font-awesome-icon :icon="['far', 'globe-americas']" /> Foster
                  City, California
                </p>
              </div>

              <div class="w-full mt-6">
                <p class="font-light text-base text-gray-500">
                  Senior Data Scientist I
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <button
            class="border border-gray-200 px-3 py-2 rounded text-gray-500 text-sm mt-2 font-normal hover:bg-gray-100"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>

    <div
      class="w-full rounded-2xl z-50 bg-white p-6 mt-10 shadow-sm"
    >
      <div class="flex justify-between align-top">
        <div class="w-3/4 flex-none relative w-full">
          <h4 class="font-bold text-xl text-gray-800">Frequently Asked Questions</h4>

          <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
            <div class="collapse-title text-sm font-bold whitespace-nowrap text-gray-600">
              What is the purpose of this site?
            </div>
            <div class="collapse-content">
              <p>This site is intended to serve as a data and visualization hub for molecular data collected in Gilead's sponsored clinical trials.</p>
              <p>A secondary aim of this site is to host useful, bioinformatics focused tools for use by Gilead employees.</p>
            </div>
          </div>

          <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
            <div class="collapse-title text-sm font-bold whitespace-nowrap text-gray-600">
              What do I do if I need assistance?
            </div>
            <div class="collapse-content">
              <p>If you need any assistance, including how to navigate or use the site, please reach out to John Austin (john.austin@gilead.com).</p>
            </div>
          </div>

          <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
            <div class="collapse-title text-sm font-bold whitespace-nowrap text-gray-600">
              What data and tools are available?
            </div>
            <div class="collapse-content">
              <p>Data from approximately 15 Gilead sponsored clinical trials are available. Within each trial, we usually have demographic, clinical, biomarker,
              and transcriptomic data available. Some trials have more or less data available.</p>
            </div>
          </div>

        </div>
        <div class="tooltip" data-tip="Search coming soon">
          <button
            class="border border-gray-200 px-3 py-2 rounded text-xs text-left mt-2 font-normal text-gray-300 w-[120px]"
          >
            <font-awesome-icon :icon="['far', 'search']" /> Search...
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexDetails',
}
</script>
