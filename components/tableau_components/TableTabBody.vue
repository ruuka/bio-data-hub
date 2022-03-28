<template>
            <div class="body py-6">
            <div class="title">
              <h4 class="leading-snug text-xl lg:text-3xl font-medium mb-4"> {{info.title}}</h4>

              <table class="table">
                      <thead>
                        <tr class="bg-[#F9F9FC]">
                          <th class="text-left px-1">Name</th>
                          <th class="text-left px-1">Data type</th>
                          <th class=" text-left px-1">Description</th>
                          <th class="text-left px-1 whitespace-normal w-1/3">Sample Size</th>
                          <th class="text-left px-1">Action</th>
                        </tr>
                      </thead>
                      <tbody class="tbody text-sm text-gray-500">
                        <tr v-for="(item, index) in info.list" :key="index" class="bg-gray-500 border-t border-b border-gray-200">
                          <td class="p-1">
                            <h4 class="px-2">{{item.name}}</h4>
                          </td>
                          <td class="p-1">
                            <p>{{item.dataType}}</p>
                          </td>
                          <td class="p-1 whitespace-normal w-1/3">
                            <p>{{item.description}}</p>
                          </td>
                          <td class="p-1">
                             <p>{{item.sampleSize}} </p>
                          </td>
                          <td class="p-1">
                            
                            <nuxt-link :to="item.url" class="bg-indigo-200 text-indigo-500 px-3 text-sm py-2 rounded">View Link</nuxt-link>
                          </td>
                        </tr>
                      </tbody>
              </table>
            </div>
          </div>
</template>

<script>
export default {
props: {
  info: {
    type:Object,
    required:true,
  }
}
}
</script>
