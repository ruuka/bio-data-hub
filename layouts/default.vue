<template>
  <div
    class="hub-body"
    :class="$route.path !== '' ? 'bg-gray-100' : 'bg-white'"
  >
    <NavBars />
    <!--    <NotificationGroup />-->
    <!--    <DialogModal />-->
    <div class="flex">
      <!--      <leftMenu-->
      <!--        v-if="$route.path == '/custom-plot' || $route.path !== '/'"-->
      <!--      />-->
      <nuxt />
    </div>
    <footerComponent />
  </div>
</template>

<script>
// import NotificationGroup from '@/components/layout_components/notification-group'
// import DialogModal from '@/components/layout_components/dialog-modal'

export default {
  name: 'Default',
  components: {
    // NotificationGroup,
    // DialogModal,
  },
  data() {
    return {
      title: 'Bioinformatics Portal',
    }
  },
  computed: {},
}
</script>

<style>
body {
  background: #f5f5f5;
  @apply font-inter;
}
</style>
