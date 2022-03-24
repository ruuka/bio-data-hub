<template>
  <!-- START TABLE TABS SECTION -->
<section class="mt-36 pb-10">
  <div class="container mx-auto">
          <div class="wrapper-tab w-full">
            <ul class="tab-list flex space-x-6">
            <li v-for="(disease, index) in data" :key="index" 
            :class="active ===index ? 'border-indigo-500 ' : 'border-transparent'" 
            @click="active =index"
            class="py-3  text-gray-900 border-b  cursor-pointer  hover:border-indigo-500">{{disease.type}}</li>   
            </ul>

          </div>

<template v-for="(disease, index) in data"  >
  <table-tab-body :key="index"  :info="disease" v-if="active ===index"/>
</template>
  </div>
</section>
<!-- END TABLE TABS SECTION -->
</template>

<script>
import TableTabBody from './TableTabBody.vue'
export default {
  data() {
    return {
      active:0,
      data:[
        {
          type:'Viral Diseases',
          title:'Inflammatory Diseases',
          list:[{
            name:'HDV-123-4567',
            dataType:'Expression (RNA-Seq)',
            description:`A collection of over 40 liver biospy samples from 20 BASH patients before and
             after treated with SIM (N=4),
            6mg GS-4997 (N=10) and 18mg GS-4997 (N=6).`,
            sampleSize:'40',
            url:'',
          }]
        },
        {
          type:'Inflammatory Diseases',
          title:'Inflammatory Diseases',
          list:[{
            name:'HDV-123-4567',
            dataType:'Expression (RNA-Seq)',
            description:`A collection of over 40 liver biospy samples from 20 BASH patients before and
             after treated with SIM (N=4),
            6mg GS-4997 (N=10) and 18mg GS-4997 (N=6).`,
            sampleSize:'41',
            url:'',
          }]
        },
                {
          type:'Oncology',
          title:'Oncology Diseases',
          list:[{
            name:'HDV-123-4567',
            dataType:'Expression (RNA-Seq)',
            description:`A collection of over 40 liver biospy samples from 20 BASH patients before and
             after treated with SIM (N=4),
            6mg GS-4997 (N=10) and 18mg GS-4997 (N=6).`,
            sampleSize:'42',
            url:'',
          }]
        },
      ]
    }
  },
 components: {
   TableTabBody,
 }
}
</script>

