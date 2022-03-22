<template>
  <div
    class="flex items-center w-full gap-2 px-4 py-2 text-white rounded shadow-md notification"
    :class="[bgColors[notification.type]]"
  >
    <div class="text-lg text-white notification-icon">
      <font-awesome-icon :icon="icons[notification.type]" />
    </div>
    <div class="notification-message">
      <p class="font-medium">{{ notification.title }}</p>
    </div>
    <button
      class="ml-auto text-gray-300 cursor-pointer hover:text-gray-200"
      @click="removeNotification"
    >
      <font-awesome-icon :icon="['far', 'times']" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        info: ['far', 'info-circle'],
        warning: ['far', 'exclamation-circle'],
        error: ['far', 'times-circle'],
      },
      bgColors: {
        error: 'bg-red-500',
        warning: 'bg-yellow-500',
        info: 'bg-blue-600',
      },
      duration: 5000,
      intervalRef: null,
    }
  },
  mounted() {
    this.intervalRef = setInterval(() => {
      this.removeNotification()
    }, this.duration)
  },
  beforeDestroy() {
    clearInterval(this.intervalRef)
  },
  methods: {
    removeNotification() {
      this.$eventBus.$emit('REMOVE_NOTIFICATION', this.notification)
    },
  },
}
</script>
