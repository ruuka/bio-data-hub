<template>
  <div class="bg-gray-100 hub-body">
    <NavBars />
    <NotificationGroup />
    <div class="flex">
      <leftMenu />
      <nuxt />
    </div>
    <footerComponent />
  </div>
</template>

<script>
import NotificationGroup from '@/components/layout_components/notification-group'

export default {
  name: 'Default',
  data() {
    return {
      title: 'Bioinformatics Portal',
    }
  },
  computed: {},
  components: {
    NotificationGroup,
  },
}
</script>

<style>
body {
  background: #f5f5f5;
  @apply font-inter;
}
</style>
