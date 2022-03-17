<template>
        <div class="relative w-full  h-[500px] flex flex-col justify-around pl-12 2xl:pl-[13rem] pt-6 ">
           <h4 class="font-light tracking-tighter text-3xl 2xl:text-5xl text-gray-900 mt-4">
           <span class="text-2xl  lg:text-5xl 2xl:text-7xl font-light"> Welcome, <span class="text-red-700 ">John</span></span>
           <br />
            to Bioinformatics Data Hub
           </h4>


           <p class="text-base pb-12 text-gray-800">This website serves as a data hub for molecular</p>
           <div class="h-20"></div>
           <div class="absolute right-0 w-3/4 rounded-3xl  bg-[#C51F3F1A] bg-opacity-10 h-[500px] 2xl:h-[650px] 2xl:mt-20">
            <div class="relative ml-40 pt-10">

              <div class="absolute   -ml-40 2xl:ml-[8rem] left-[6rem] top-10 ">
                <img src="../../static/Rectangle 52.svg" />
                <img src="../../static/technology 1.svg" class=" -mt-20  transform 2xl:hidden  h-[440px] w-[376px] object-contain  ml-[8rem]" />
              </div>

              <div class="absolute   -ml-36 left-20 -bottom-[2rem] 2xl:bottom-[6.5rem] 2xl:-ml-0 ">
                <img src="../../static/Rectangle 53.svg" />
              </div>

              <img src="../../static/Rectangle 51.svg" class=" w-72 2xl:w-[36rem] 2xl:relative 2xl:ml-[20%]" />

              <div class="absolute h-[800px] rounded-b-full rounded-t-xl top-32 z-40  right-0 pr-2 bg-[#FEEFEF] w-[380px] 2xl:w-[514px] 2xl:right-[7.5rem]   ">
                <img src="../../static/technology 1.svg" class="absolute -left-[30rem] hidden 2xl:block -mt-[7rem]  transform -z-10 h-[440px] w-[376px] 2xl:w-[740px] 2xl:h-[570px] object-contain  ml-[4rem]" />

                 
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

