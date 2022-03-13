<template>
  <div class="flex w-full">
<!--    <div class="flex flex-col w-full px-2 py-2 overflow-y-auto border-b lg:border-r lg:h-screen lg:w-80">-->

<!--      <div class="flex flex-col justify-between mt-6">-->
<!--        <aside>-->
<!--          <ul>-->
<!--            <li>-->
<!--              <a class="flex items-center px-4 py-2 text-primary bg-gray-100 rounded-md " href="#">-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"-->
<!--                     stroke="currentColor">-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />-->
<!--                </svg>-->

<!--                <NuxtLink to="/">-->
<!--                  <span class="mx-4 font-medium">Home</span>-->
<!--                </NuxtLink>-->
<!--              </a>-->
<!--            </li>-->

<!--            <li>-->
<!--              <a class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"-->
<!--                     stroke="currentColor">-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />-->
<!--                </svg>-->

<!--                <NuxtLink to="/CustomPlot">-->
<!--                  <span class="mx-4 font-medium">Clinical Trial Data</span>-->
<!--                </NuxtLink>-->
<!--              </a>-->
<!--            </li>-->

<!--            <li>-->
<!--              <a class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"-->
<!--                     stroke="currentColor">-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />-->
<!--                </svg>-->

<!--                <span class="mx-4 font-medium">Public Datasets</span>-->
<!--              </a>-->
<!--            </li>-->

<!--            <li>-->
<!--              <a class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"-->
<!--                     stroke="currentColor">-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />-->
<!--                </svg>-->

<!--                <span class="mx-4 font-medium">Clinical Bioinformatics</span>-->
<!--              </a>-->
<!--            </li>-->
<!--            <li>-->
<!--              <a class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"-->
<!--                     stroke="currentColor">-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />-->
<!--                </svg>-->

<!--                <span class="mx-4 font-medium">Other Tools-->
<!--                  <font-awesome-icon :icon="['far', 'angle-down']"  />-->
<!--                </span>-->
<!--              </a>-->
<!--            </li>-->
<!--          </ul>-->

<!--        </aside>-->

<!--      </div>-->
<!--    </div>-->
    <div class="w-full h-full overflow-y-auto p-10">

      <img src="~static/datahub-home.png">

<!--      <div class="hero min-h-screen" style="background-image: url('');">-->
<!--        <div class="backdrop-blur-sm bg-white/30"></div>-->
<!--        <div class="text-center hero-content text-neutral-content">-->
<!--          <div class="max-w-md">-->
<!--            <h1 class="mb-5 text-5xl font-light">-->
<!--          <span>-->
<!--            <span class="text-gilead-red">Welcome, </span>-->
<!--            <span class="span1 text-red-600">John<br /></span>-->
<!--            <span class="span2 text-red-300">to Bioinformatics Data Hub</span>-->
<!--          </span>-->
<!--            </h1>-->
<!--            <p class="mb-5 text-red-300">-->
<!--              This website serves as a data hub for molecular...-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

    </div>
  </div>

</template>


<script>
export default {
  name: 'Index',
  data() {
    return {
      pageTitle: 'Bioinformatics Data Hub',
      pageSubTitle: "A portal to access and analyze Gilead's molecular data.",
    }
  },
  head() {
    const title = 'Home'
    return {
      title,
      script: [
        {
          // FAQ
          // id: 'elfsight',
          // src: 'https://apps.elfsight.com/p/platform.js',
          // defer: true,
        },
      ],
    }
  },
}
</script>
