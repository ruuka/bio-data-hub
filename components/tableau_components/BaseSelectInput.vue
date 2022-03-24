<template>
    <!-- START INPUT GROUP -->
    <div class="group" >
      <label for="" class="text-gray-500 mb-1">{{label}} </label>
      <div tabindex="0" ref="select-div"  @focus="active =true" @blur="active = false" class=" relative flex items-center">

        <div  :class="classes" id="" value="GS-US-123-4567">
       {{selected}}
        </div>
        <svg class="-ml-8" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 8L10 13L15 8" stroke="#808192" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div :class="active ? '': 'hidden'" class="absolute z-50 top-12 border border-gray-200 p-3 rounded-xl shadow max-h-64 overflow-y-auto w-full left-0 right-0 bg-white">
            <ul>
              <li v-for="(option, index) in options" :key="index" @click="setValue(option)" :class="option ===value ? 'bg-indigo-100 text-indigo-500':'  text-gray-800'" class="option w-full px-3 py-2 rounded-lg text-sm  hover:bg-indigo-100 cursor-pointer hover:text-indigo-500">{{option}}</li>
            </ul>
          </div>
      </div>
    </div>
<!-- END INPUT GROUP -->
  
</template>

<script>
export default {
   props: {
       label: {
           type:String,
           required:true,
       },
       options : {
           type:Array,
           required:true,
       },
       selectedValue : {
           type:String,
           default:'',
       },
       classes: {
           type:String,
           default: 'w-full border border-gray-200 px-3 py-3 rounded-xl h-12'
       },

   },
   data() {
       return {
           active:false,
           selected:''
         
       }
   },
   computed: {
       value()  {
           return this.selectedValue
       }
   },
   watch: {
    value(n, old) {
    this.selected = n;
    }
   },
   methods: {
       setValue(option) {
           this.$emit('set-selected-value', option);
            this.selected = option;
           this.$refs['select-div'].blur();
           
       }
   },

   mounted() {
       this.value = this.selectedValue;
       this.selected = this.selectedValue;
   }
}
</script>

