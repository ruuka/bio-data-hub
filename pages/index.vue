<template>
  <div class="flex w-full">

    <div class="w-full h-full overflow-y-auto p-10">

      <img src="~static/datahub-home.png">

    </div>
  </div>

</template>


<script>
export default {
  name: 'Index',
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
