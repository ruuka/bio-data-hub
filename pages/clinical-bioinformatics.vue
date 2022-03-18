<template>
  <div class="flex w-full">
    <div class="w-full h-full overflow-y-auto px-2 py-4">
    <Breadcrumb title="breadcrumb"/>

    <div class="bg-white shadow-sm w-full rounded mt-2">
        <h4 class="text-xl lg:text-2xl px-3 py-2 leading-tight text-black">New Publications</h4>
    </div>

       <!-- START CAROUSEL -->
       <div class="flex flex-wrap flex-col lg:flex-row mt-4">
          <div class="flex-1  bg-transparent h-[350px]">
             <Carousel v-if="isSplideLoaded"/>
          </div>

        <div class="w-full lg:w-1/3 px-1">
               <WhatsTrending />
        </div>
       </div>

       <!-- END CAROUSEL -->

       <!-- START PUBLICATIONS SECTION -->
  <section class="my-10 ">
      <!-- START CARD COMPONENT  -->
<publicationsCard v-for="(publication, index) in publications" :key="index" :publication="publication" />
      <!-- END CARD COMPONENT -->
  </section>

  <!-- END PUBLICATIONS SECTION -->

    </div>
  </div>

</template>

<script>
import  Carousel from '../components/publication_components/Carousel.vue'
import  WhatsTrending from '../components/publication_components/WhatsTrending.vue'
import  publicationsCard from '../components/publication_components/publicationsCard.vue'
import  Breadcrumb from '../components/publication_components/Breadcrumb.vue'

export default {
  name: 'ClinicalBioinformatics',
  components: {
    Carousel,
    WhatsTrending,
    publicationsCard,
    Breadcrumb
  },
  data() {
    return {
      pageTitle: 'Bioinformatics Data Hub - Clinical Bioinformatics',
      pageSubTitle: "A portal to access and analyze Gilead's molecular data.",
        isSplideLoaded: false,
        publications: [
          {
            title:"Methylation signatures in peripheral blood are associated with marked age acceleration and disease progression in patients with primary sclerosing cholangitis",
            status:"live",
            starts_in:"starts in 2 days and 21 hours",
            url:null,
            image:require('~/static/photo.jpg'),
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            authors:"Authors: Trauner M, Gindin Y, Jiang Z, Chung C, Subramanian GM, Myers RP, Gulamhusein A, Kowdley KV, Levy C, Goodman Z, Manns MP",
            date:null,
            ends_in:null,
            year:"2020",
            internal_lead:"Yevgeniy Gindin",
            journal:"Journal of Hepatology Reports",
            category:"Clinical",
            top_read:null,
          },
          {
            title:"Longitudinal analysis of serum microRNAs as predictors of cirrhosis regression during treatment of hepatitis B virus infection",
            status:"ended",
            starts_in:null,
            url:null,
            image:require('~/static/photo.jpg'),
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            authors:"Authors: Trauner M, Gindin Y, Jiang Z, Chung C, Subramanian GM, Myers RP, Gulamhusein A, Kowdley KV, Levy C, Goodman Z, Manns MP",
            date:null,
            ends_in:"2 days ago",
            year:"2020",
            internal_lead:null,
             journal:null,
            category:"Clinical",
            top_read:null,


          },
                    {
            title:"New Seminar Lecture: Bioinformatics",
            status:"ended",
            starts_in:null,
            url:null,
            image:require('~/static/photo.jpg'),
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            authors:"Authors: Trauner M, Gindin Y, Jiang Z, Chung C, Subramanian GM, Myers RP, Gulamhusein A, Kowdley KV, Levy C, Goodman Z, Manns MP",
            date:null,
            ends_in:"Yesterday",
            journal:null,
            year:null,
            internal_lead:null,
            category:"Clinical",
             top_read:true,
          }
        ],
    }
  },

  head() {
    const title = 'Public Data Sets'
    return {
      title,
        script: [
        {
          // FAQ
          hid: 'splide',
          src: 'https://cdn.jsdelivr.net/npm/@splidejs/splide@3.6.12/dist/js/splide.min.js',
          defer: false,
           callback: () => { this.isSplideLoaded = true }
        },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@splidejs/splide@3.6.12/dist/css/splide.min.css' }
      ]
    }
  },
}
</script>


