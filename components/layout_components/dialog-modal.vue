<template>
  <div
    v-if="isModalActive"
    class="fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-75 dialog-modal"
    @click="closeModal"
  >
    <div
      class="absolute flex items-center gap-8 px-8 py-4 bg-white rounded shadow-md modal-content"
      @click.stop="dontCloseModal"
    >
      <div class="text-red-500 icon-wrapper">
        <font-awesome-icon class="text-4xl" :icon="modalInfo.icon" />
      </div>

      <div class="content">
        <h2 class="font-medium text-gray-900">{{ modalInfo.title }}</h2>
        <p class="text-sm text-gray-700">{{ modalInfo.subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalActive: false,
      modalInfo: {},
    }
  },
  mounted() {
    const exampleModal = {
      icon: ['far', 'save'],
      title: 'Saving...Please Wait',
      subtitle: 'This will only take a moment',
      isClosable: false,
    }

    this.$eventBus.$on('OPEN_MODAL', () => {
      this.isModalActive = true
      this.modalInfo = exampleModal
    })

    this.$eventBus.$on('CLOSE_MODAL', () => {
      this.modalInfo = {}
      this.isModalActive = false
    })
  },
  methods: {
    dontCloseModal() {},
    closeModal() {
      console.warn('CLOSING>>>')
    },
  },
}
</script>

<style scoped>
.modal-content {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
