<template>
      <!-- START MAIN SECTION -->
    <main class="bg-gray-100 pt-6 px-4 w-full">

<index-hero />
<index-details />

    </main>


      <!-- END MAIN SECTION -->

</template>


<script>
import IndexDetails from '~/components/home_components/IndexDetails.vue'
import  IndexHero from '~/components/home_components/IndexHero.vue'
export default {
  name: 'Index',
  components: {
    IndexHero,
    IndexDetails
  },
  data() {
    return {
      pageTitle: 'Bioinformatics Data Hub',
      pageSubTitle: "A portal to access and analyze Gilead's molecular data.",
    }
  },
  head() {
    const title = 'Home'
    return {
      title,
      script: [
        {
          // FAQ
          id: 'splide',
          src: 'https://cdn.jsdelivr.net/npm/@splidejs/splide@3.6.12/dist/js/splide.min.js',
          defer: true,
        },
      ],
    }
  },
}
</script>
