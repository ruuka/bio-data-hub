<template>
  <section class="w-7/12 card   flex flex-col space-y-6  pb-4 -mt-32 2xl:-mt-0 pl-12 2xl:pl-[13rem] ">

    <div class="h-[10rem] w-full rounded-2xl z-50 bg-white p-4  shadow-sm ">
<div class="flex justify-between align-top">
  <div class="w-3/4 flex-none relative">
    <div class="flex space-x-2 items-center">
      <div class="flex-none  z-0 top-3 border-b-[10px] border-gray-300 rounded-full h-[100px] w-[100px] bg-red-500  flex items-center justify-center">
        <img src="../../static/profile.png"  class=" -mt-10 h-[104px] w-[100px] object-contain"/>
      </div>
      <div class="flex justify-between  flex-wrap items-center mt-4 px-4">
        <h4 class="text-lg font-normal mr-3 ">
          John Smith
          <svg width="10" class="inline" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.37052 5.34722C5.16589 5.55092 4.83411 5.55093 4.62948 5.34723L0.654526 1.39044C0.324425 1.06184 0.558216 0.499999 1.02505 0.499999L8.97495 0.5C9.44178 0.5 9.67557 1.06184 9.34547 1.39044L5.37052 5.34722Z" fill="#8E8E8E"/>
            </svg>
        </h4>

          <div class="w-full mt-1 text-xs text-gray-800">
            <p>🇨🇳 Foster City, California</p>
          </div>

          <div class="w-full mt-6">
             <p class="font-light text-base text-gray-500">Senior Data Scientist I</p>
          </div>
      </div>
     
    </div>

   
  </div>
  <div class="">
    <button class="border border-gray-200 px-3 py-2 rounded text-gray-500 text-sm mt-2 font-normal">Edit Profile</button>
  </div>
</div>
    </div>

    <div class="h-[10rem] w-full rounded-2xl z-50 bg-white p-4 pb-10 mt-10 shadow-sm ">
      <div class="flex justify-between align-top">
        <div class="w-3/4 flex-none relative">
        <h4 class="text-xl text-gray-800">Frequently Asked Questions</h4>
        <h6 class="text-sm font-bold mb-6 whitespace-nowrap  text-gray-600 mt-6">What online resources do you offer to support COVID-19 research?</h6>
         
        </div>
        <div class="">
          <button class="border border-gray-200 px-3 py-2 rounded text-sm mt-2 font-normal text-gray-500">Searching:covid</button>
        </div>
      </div>
          </div>
   </section>

</template>

<script>
export default {

name:"IndexDetails",
}
</script>

