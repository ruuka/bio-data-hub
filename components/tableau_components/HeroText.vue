<template>
   <div class="w-1/2 pt-10 lg:pt-20">
   <h4 class="text-5xl lg:text-7xl text-indigo-500 font-bold leading-[3.5rem]">
    <span class="font-light text-gray-500">Welcome to the</span><br/>
   <span> Bioinformatics<br>
    Tableau Page</span>
   </h4>
   <p class="text-lg mt-10 text-gray-500">Welcome to the
    Bioinformatics
    Tableau Page</p>

    <form class=" mt-10  w-2/5">
          <base-select-input classes="w-full appearance-none border border-gray-200 px-3 py-2 h-12  rounded-xl" :label="data[0].label" :selectedValue=" data[0].selectedValue " :options="data[0].options" />
    </form>
 </div>
</template>

<script>
import BaseSelectInput from './BaseSelectInput.vue'
export default {
  components: {
    BaseSelectInput

  },
 data() {
   return {
          data:[
            {
              name:'data-set',
              label:'Select Dataset',
              selectedValue:'',
              options:[
              'GS-US-123-4567',
              'GS-US-123-4566'
              ]
            },
          ]
   }
 },
}
</script>

