<template>
  <div class="hub-body " :class="$route.path !=='/tableau' ? 'bg-gray-100': 'bg-white'">
    <NavBars />
    <div class="flex">
      <leftMenu v-if="$route.path !=='/tableau'" />
      <nuxt />
    </div>
    <footerComponent />
  </div>
</template>

<script>
export default {
  name: 'Default',
  data() {
    return {
      title: 'Bioinformatics Portal',
    }
  },
  computed: {
  },
}
</script>

<style>
body {
  background: #F5F5F5;
  @apply font-inter;
}
</style>
