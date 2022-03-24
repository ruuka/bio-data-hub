<template>
  <footer :class="$route.path !=='/tableau' ? 'border-t bg-base-200 border-base-300':'bg-white'" class="px-10 py-4  footer  text-base-content ">
    <div :class="$route.path !=='/tableau' ? 'items-start grid-flow-col md:place-self-center md:justify-self-center':'items-center grid-flow-col md:place-self-start md:justify-self-start container mx-auto text-gray-600'" class="">
      <svg v-if="$route.path !=='/tableau'" width="25" height="32" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.3 0H24.1C3.89997 1.9 1.39997 15.3 7.99997 19.7C6.79997 24.6 7.99997 24.6 7.99997 24.6C8.09997 23.1 8.39997 21.7 8.79997 20.2C11.3 10.5 17.7 2.2 24.1 0.1C24.3 0.2 24.3 0.2 24.3 0Z" fill="#C51F3F"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23 3.40001V3.20001L22.8 3.40001C21.3 6.60001 20.6 11.2 19.5 14.6C18 18.6 15.4 21.4 11.4 21V30.8C11.4 30.8 0.7 26.1 0.7 18.5V4.30001L9.4 3.50001C9.6 3.50001 9.6 3.50001 9.6 3.30001H0V18.4C0 27 11.4 31.7 11.4 31.7C11.4 31.7 23 26.8 23 18.5V3.40001Z" fill="#C51F3F"/>
      </svg>
      <p><span class="footer-text">&copy; {{ new Date().getFullYear() }} Gilead Sciences Inc.</span></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
    }
  },
}
</script>

<style scoped>
span.footer-text {
  font-size: 0.8rem;
}
</style>
