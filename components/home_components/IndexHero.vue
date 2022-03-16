<template>
        <div class="relative w-full h-[500px] flex flex-col justify-around pl-20 pt-6 ">
           <h4 class="font-light tracking-tighter text-3xl  text-gray-900 mt-4">
           <span class="text-2xl  lg:text-5xl font-light"> Welcome, <span class="text-red-700 ">John</span></span>
           <br />
            to Bioinformatics Data Hub
           </h4>


           <p class="text-base pb-12 text-gray-800">This website serves as a data hub for molecular</p>
           <div class="h-20"></div>
           <div class="absolute right-0 w-3/4 rounded-3xl  bg-[#C51F3F1A] bg-opacity-10 h-[500px]">
            <div class="relative ml-40 pt-10">

              <div class="absolute   -ml-40 left-[6rem] top-10 ">
                <img src="../../static/Rectangle 52.svg" />
                <img src="../../static/technology 1.svg" class=" -mt-20  transform  h-[440px] w-[376px] object-contain  ml-[8rem]" />
              </div>

              <div class="absolute   -ml-36 left-[6rem] -bottom-8 ">
                <img src="../../static/Rectangle 53.svg" />
              </div>

              <img src="../../static/Rectangle 51.svg" class=" w-72" />

              <div class="absolute h-[800px] rounded-b-full rounded-t-xl top-32 z-40 right-0 bg-[#FEEFEF] w-[400px] ">
                 <div class="absolute  -top-14 -left-28 w-40">
                  <img src="../../static/message.svg"  />  
                 </div>
                 <div class="content p-4">
                   <h1 class="font-bold text-2xl mb-4">Quick Links</h1>
<div class="w-full">
<hero-card v-for="(feature,index) in features" :key="index" :item="feature" />
</div>
                 </div>
              </div>
            </div>

           </div>
      </div>
</template>

<script>
import HeroCard from './HeroCard.vue'
export default {
  components: { HeroCard },
name: 'IndexHero',
data() {
  return {
    features:[
      {
        name:"Clinical Trial Data Analysis",
        description:"Using data from our clinicial trials, you can explore demographics, analyze gene expressions, inspect biomarker correlations, and much more.",
        src:require('../../static/link1.svg'),
        href:"#"
      },
      {
        name:"Clinical Trial Data Analysis",
        description:"Using data from our clinicial trials, you can explore demographics, analyze gene expressions, inspect biomarker correlations, and much more.",
        src:require('../../static/link2.svg'),
        href:"#"
      },
            {
        name:"Clinical Trial Data Analysis",
        description:"Using data from our clinicial trials, you can explore demographics, analyze gene expressions, inspect biomarker correlations, and much more.",
        src:null,
        href:"#"
      },
      {
        name:"Clinical Trial Data Analysis",
        description:"Using data from our clinicial trials, you can explore demographics, analyze gene expressions, inspect biomarker correlations, and much more.",
        src:null,
        href:"#"
      }
    ]
  }
}
}
</script>

