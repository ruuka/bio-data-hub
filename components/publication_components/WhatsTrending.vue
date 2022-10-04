<template>
<!--  <div class="bg-white w-full h-full shadow-md flex flex-col justify-between">-->
<!--    <h4 class="text-xl font-bold py-3 px-2">Trending Publications</h4>-->
<!--    <hr />-->
<!--    <ul>-->
<!--      <li-->
<!--        class="flex space-x-4 py-3 items-center px-3"-->
<!--        v-for="(item, index) in filteredPublications"-->
<!--      >-->
<!--        <span class="font-extrabold text-4xl text-red-500">{{-->
<!--          formatNumber(index + 1)-->
<!--        }}</span>-->
<!--        <span>Methylation signatures in peripheral blood are assoc...</span>-->
<!--      </li>-->
<!--    </ul>-->
<!--    <div class="w-full bg-gray-300 py-1 text-center">-->
<!--      <a href="" class=""> View more >></a>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
export default {
  name: 'WhatsTrending',
  props: {
    publications: {
      type: Array,
      required: true,
    },
  },
  computed: {
    filteredPublications() {
      return this.publications.slice(0, 3)
    },
  },
  methods: {
    formatNumber(index) {
      if (index < 10) {
        return '0' + index
      }
      return index
    },
  },
}
</script>
