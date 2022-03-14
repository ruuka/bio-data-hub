<template>
       <div href="#" class="flex mb-4 relative flex-col items-center bg-white p-3 rounded-lg border shadow-md md:flex-row hover:bg-gray-100">
        <img class="w-full h-96 rounded-t-lg md:h-auto md:w-1/3 md:rounded-none md:rounded-l-lg lg:min-h-[278px] object-contain"  :src="publication.image" :alt="publication.title">
        <div class="flex flex-col  justify-between p-4 leading-normal">
          <div class="absolute  top-2 right-2">
            <div v-if="publication.top_read" class="bg-red-500 text-white p-1 text-xs px-3 rounded-xl ">Top Read of the Year</div>
          </div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ publication.title }}</h5>
           <ul class="list-reset flex flex-wrap lg:flex-nowrap space-x-2 mb-2">
             <li v-if="publication.category" class="text-red-500  p-1 text-xs px-3 rounded ">{{publication.category}}
                  <span v-if="publication.ends_in" class="text-gray-500  p-1 text-xs px-3 rounded ">{{publication.ends_in}}</span>

             </li>


             <li v-if="publication.status ==='live'" class="bg-red-500 text-white p-1 text-xs px-3 rounded uppercase">live Now</li>
             <li v-if="publication.starts_in" class="border border-gray-300 p-1 px-2 text-xs text-gray-500">{{publication.starts_in}}</li>
             <li v-if="publication.journal" class="border border-gray-300 p-1 px-2 text-xs text-gray-500">{{ publication.journal}}</li>
             <li v-if="publication.year" class="border border-gray-300 p-1 px-2 text-xs text-gray-500">{{ publication.year}}</li>
           </ul>

            <p v-if="publication.description" class="mb-3 font-normal text-sm text-gray-700">{{ publication.description }}</p>
            <p v-if="publication.internal_lead" class=" font-normal text-gray-700">
              {{ publication.internal_lead }}</p>
                          <p v-if="publication.authors" class="mb-3 font-normal text-gray-700">
              {{ publication.authors }}</p>

        </div>
      </div>
</template>

<script>
export default {
  name:"publicationsCard",
  props: {
    publication: {
      type: Object,
      required: true
    }
  }

}
</script>

