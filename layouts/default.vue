<template>
  <div class="hub-body bg-gray-100">
    <NavBars />
<!--    <leftMenu />-->
    <div class="flex">
      <leftMenu />
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
