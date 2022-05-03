<template>
  <div
    v-if="show"
    class="absolute w-auto h-auto top-0 left-0 right-0 bg-white bg-opacity-20 bottom-0"
  >
    <div class="relative w-full h-full">
      <div
        class="absolute right-3 top-[10%] w-1/2 py-6 rounded flex items-center justify-between px-4 rounded bg-green-50"
      >
        <div class="relative flex justify-between items-center gap-3 w-full">
          <div class="flex-1">
            <h4 class="font-bold mb-2">Thanks, we got your submission!</h4>
            <p class="text-gray-800 text-sm">
              Be patient, please submit one file per request to avoid
              overloading the server, thank you!
            </p>
          </div>

          <div class=" " @click="$emit('close')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
