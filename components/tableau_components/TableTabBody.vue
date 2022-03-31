<template>
  <div class="body py-6">
    <div class="title">
      <h4 class="leading-snug text-xl lg:text-3xl font-medium mb-4">
        {{ info.title }}
      </h4>

      <table class="table table-zebra">
        <thead>
          <tr class="bg-[#F9F9FC]">
            <th class="text-left px-2">Study</th>
            <th class="text-left px-2">Indication</th>
            <th class="text-left px-2">Description</th>
            <th class="text-left px-2 whitespace-normal w-1/3">Dashboard</th>
            <th class="text-left px-2">Action</th>
          </tr>
        </thead>
        <tbody class="tbody text-sm text-gray-500 p-2">
          <tr
            v-for="(item, index) in info.list"
            :key="index"
            class="hover p-2 bg-gray-500 border-t border-b border-gray-200"
          >
            <td class="px-2 w-1/6">
              <p>{{ item.study }}</p>
            </td>
            <td class="px-2 w-1/6">
              <p>{{ item.indication }}</p>
            </td>
            <td class="px-2 whitespace-normal w-3/6">
              <p>{{ item.description }}</p>
            </td>
            <td class="px-2 w-2/6">
              <p>{{ item.dashboard }}</p>
            </td>
            <td class="px-2 w-1/6">
              <nuxt-link
                :to="item.url"
                class="bg-indigo-200 text-indigo-500 px-3 py-2 text-sm rounded"
                >View Link</nuxt-link
              >
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
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.table-zebra tbody tr td:first-child,
.table-zebra tbody tr th:first-child,
.table-zebra tbody tr td:last-child,
.table-zebra tbody tr th:last-child {
  border-radius: 0;
}
</style>
