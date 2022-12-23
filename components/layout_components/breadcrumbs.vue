<template>
  <div class="mb-2 text-sm flex gap-4 breadcrumbs">
    <ul>
      <li>
        <NuxtLink to="/" class="text-red-600 hover:text-red-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-4 h-4 mr-2 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            ></path>
          </svg>
          Home
        </NuxtLink>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="w-4 h-4 mr-2 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ></path>
        </svg>
        Summary Table
      </li>
    </ul>
    <button @click="emitEvent">
      <svg
        class="fill-dark-1 h-5 rotate-90"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 24 24"
      >
        <path
          d="M17.90625 3.0039062C17.808828 3.013125 17.710938 3.0376719 17.617188 3.0761719C17.243187 3.2311719 17 3.595 17 4L17 6L2 6L2 8L17 8L17 10C17 10.404 17.243188 10.768828 17.617188 10.923828C17.741187 10.974828 17.871 11 18 11C18.26 11 18.516031 10.898031 18.707031 10.707031L21.707031 7.7070312C22.098031 7.3160312 22.098031 6.6829688 21.707031 6.2929688L18.707031 3.2929688C18.492531 3.0784687 18.198516 2.97625 17.90625 3.0039062 z M 6.09375 13.003906C5.8014844 12.97625 5.5074687 13.078469 5.2929688 13.292969L2.2929688 16.292969C1.9019687 16.682969 1.9019687 17.316031 2.2929688 17.707031L5.2929688 20.707031C5.4839687 20.898031 5.74 21 6 21C6.129 21 6.2588125 20.974828 6.3828125 20.923828C6.7568125 20.768828 7 20.404 7 20L7 18L22 18L22 16L7 16L7 14C7 13.596 6.7568125 13.231172 6.3828125 13.076172C6.2890625 13.037672 6.1911719 13.013125 6.09375 13.003906 z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    emitEvent() {
      this.$emit('toggle-order')
    },
  },
}
</script>
