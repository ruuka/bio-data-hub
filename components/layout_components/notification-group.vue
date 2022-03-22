<template>
  <div
    style="min-width: 300px"
    class="fixed z-20 notification-group top-4 right-4 sm:max-w-sm"
  >
    <transition-group
      name="fade"
      class="flex flex-col items-start gap-2 notifications"
    >
      <Notification
        v-for="notification in notifications"
        :key="notification.id"
        :notification="notification"
      />
    </transition-group>
  </div>
</template>

<script>
import Notification from './notification.vue'
export default {
  components: {
    Notification,
  },
  data() {
    return {
      notifications: [],
    }
  },
  mounted() {
    this.$eventBus.$on('ADD_NEW_NOTIFICATION', (notification) => {
      this.notifications.push({
        ...notification,
        id: Date.now().toString() + Math.random() * 1000,
      })
    })

    this.$eventBus.$on('REMOVE_NOTIFICATION', (notification) => {
      this.notifications = this.notifications.filter(
        (n) => n.id !== notification.id
      )
    })
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
