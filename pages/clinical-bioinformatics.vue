<template>
  <div class="flex w-full bg-[#F9F9FC]">
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
               <WhatsTrending v-if="publications" :publications="publications"/>
        </div>
       </div>

       <!-- END CAROUSEL -->

       <!-- START PUBLICATIONS SECTION -->
  <section class="my-10 ">
      <!-- START SEARCH COMPONENT  -->
  <div class='flex w-1/2 gap-4 items-center '>
    <input type='text' v-model="searchTerm" class='flex-1 bg-[#F3F3F8] text-sm rounded px-2 py-2 text-[#7B797D] placeholder-[#7B797D]' placeholder="Search by trial, nickname, indication, product...">
    <button class="flex items-center gap-3 bg-[#F3F3F8] text-sm rounded px-2 py-2 bg-[#E9E8FC]">
      <span>Search</span>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" class="w-4 h-4" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </span>
    </button>
  </div>
      <!-- END SEARCH COMPONENT -->

      <!-- START FILTERS SECTION -->
    <div class="flex items-center gap-4 px-4 py-3 ">
    <span>
      <svg width="20" height="20" viewBox="0 0 20 20" class="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.2777 5H4.16663L8.61107 10.2556V13.8889L10.8333 15V10.2556L15.2777 5Z" stroke="#242533" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
<!-- START FILTER ITEM -->
    <div class="flex items-center gap-2"  v-for="(item, index) in filterTags" :key="index">
        <input type="checkbox"  name=""  class="default:ring-2 accent-primary h-4 w-4 border border-primary ring-primary checked:bg-primary" id="">
        <p class="text-sm ">{{item.name}}</p>
    </div>
  <!-- START FILTER ITEM -->
      </div>
      <!-- END FILTERS SECTION -->

      <!-- START DATATABLE SECTION -->
    <table class="w-full border border-collapse">
      <thead>
         <tr class="text-[12px] font-bold ">
          <td class="border px-2 py-3">Trial ID</td>
          <td class="w-1/4 border bg-[#644ded14] px-2 py-3">
            <div class="flex justify-between items-center">
              <div class="flex-1 flex gap-2 items-center">
                <span>
              <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1.99999C4.80222 1.99999 4.60887 1.94136 4.44443 1.83148C4.27998 1.7216 4.1518 1.56541 4.07612 1.38268C4.00043 1.19996 3.98063 0.998877 4.01922 0.804896C4.0578 0.610915 4.15304 0.432755 4.29289 0.292902C4.43274 0.15305 4.61093 0.0578058 4.80491 0.0192206C4.99889 -0.0193646 5.19995 0.000417724 5.38268 0.0761054C5.56541 0.151793 5.72158 0.279973 5.83146 0.444422C5.94135 0.608871 6 0.802213 6 0.999995C6 1.26521 5.89464 1.51955 5.70711 1.70709C5.51957 1.89462 5.26521 1.99999 5 1.99999ZM0.999998 5.99999C0.802217 5.99999 0.608875 5.94136 0.444426 5.83148C0.279977 5.7216 0.151804 5.56541 0.0761167 5.38269C0.000429042 5.19996 -0.0193686 4.99888 0.0192166 4.8049C0.0578019 4.61091 0.153038 4.43275 0.292891 4.2929C0.432743 4.15305 0.610926 4.05781 0.804907 4.01922C0.998888 3.98064 1.19995 4.00042 1.38268 4.07611C1.56541 4.15179 1.72158 4.27997 1.83146 4.44442C1.94135 4.60887 2 4.80221 2 4.99999C2 5.26521 1.89464 5.51955 1.70711 5.70709C1.51957 5.89462 1.26521 5.99999 0.999998 5.99999ZM0.999998 1.99999C0.802217 1.99999 0.608875 1.94136 0.444426 1.83148C0.279977 1.7216 0.151804 1.56541 0.0761167 1.38268C0.000429042 1.19996 -0.0193686 0.998877 0.0192166 0.804896C0.0578019 0.610915 0.153038 0.432755 0.292891 0.292902C0.432743 0.15305 0.610926 0.0578058 0.804907 0.0192206C0.998888 -0.0193646 1.19995 0.000417724 1.38268 0.0761054C1.56541 0.151793 1.72158 0.279973 1.83146 0.444422C1.94135 0.608871 2 0.802213 2 0.999995C2 1.26521 1.89464 1.51955 1.70711 1.70709C1.51957 1.89462 1.26521 1.99999 0.999998 1.99999ZM5 3.99999C5.19778 3.99999 5.39112 4.05863 5.55557 4.16851C5.72002 4.27839 5.84819 4.43458 5.92388 4.6173C5.99957 4.80003 6.01936 5.00111 5.98078 5.19509C5.94219 5.38907 5.84696 5.56723 5.70711 5.70709C5.56725 5.84694 5.38907 5.94218 5.19509 5.98077C5.00111 6.01935 4.80004 5.99957 4.61732 5.92388C4.43459 5.8482 4.27841 5.72002 4.16853 5.55557C4.05865 5.39112 4 5.19778 4 4.99999C4 4.73478 4.10535 4.48044 4.29289 4.2929C4.48043 4.10537 4.73478 3.99999 5 3.99999Z" fill="#242533"/>
              </svg>

              </span>
              <span>Nick Name</span>
              </div>

              <span>
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.26783 3.19037L4.62494 0.833253L6.98206 3.19037" stroke="#242533" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.62499 0.833285L4.62499 9.08319" stroke="#242533" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5654 7.55939L11.2083 9.9165L8.85114 7.55939" stroke="#242533" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.2082 1.66666L11.2082 9.91656" stroke="#242533" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </span>
            </div>
          </td>
          <td class="border px-2 py-3">TA</td>
          <td class="border px-2 py-3">Indication</td>
          <td class="border px-2 py-3">Product</td>
          <td class="border px-2 py-3">File Type</td>
          <td class="border px-2 py-3">Link</td>
         </tr>
      </thead>
      <tbody>
         <tr class="text-[12px] "  v-for="(item, index) in tableData" :key="`item` + index">
          <td class="border px-2 py-3">
            <div class="flex gap-2 utems-center">
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

              </a>
              <span>{{item.trialID}}</span>
            </div>
          </td>
          <td class="w-1/4 border bg-[#644ded14] px-2 py-3">
             {{item.nickname}}
          </td>
          <td class="border px-2 py-3">
            {{item.TA}}
          </td>
          <td class="border px-2 py-3">{{item.indication}}</td>
          <td class="border px-2 py-3">{{item.product}}</td>
          <td class="border px-2 py-3">{{item.type}}</td>
          <td class="border px-2 py-3">
            <a :href="item.full_path" class="px-3 bg-[#644DED] underline px-3 py-2 rounded bg-opacity-80 text-[#644DED] bg-opacity-20">View Link</a>
          </td>
         </tr>
      </tbody>
    </table>
      <!-- END DATATABLE SECTION -->
  </section>

  <!-- END PUBLICATIONS SECTION -->

    </div>
  </div>

</template>

<script>
import newAPIService from '~/services/newAPIService.js'
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
        searchTerm:null,
        filterTags:[
        {
          name:"BAR",

        },
        {
          name:"BAP",
        },
        {
          name:"Abstracts",
        },
        {
          name:"Manucripts",
        },
        {
          name:"Posters",
        },
        {
          name:"Oral Presentation",
        }
      ],
      publications:null,
     tableData:[
     ]
    }
  },
  watch: {
    searchTerm(n) {
      this.filteredRows();
    }
  },
methods: {
      filteredRows() {
        this.searchTerm =this.searchTerm ? this.searchTerm.toLowerCase() : '';
        if(this.searchTerm && this.searchTerm.length > 0) {
        newAPIService.getPublicationData(this.$axios, this.searchTerm).then((res) => {
        this.tableData = res.data ?? [];
         //return this.tableData;
        })

        //return this.tableData;
     }else {
      this.tableData=[];
     }
}
},

mounted() {
  newAPIService.getAllPublications(this.$axios).then((res) => {
    console.log("All", res.data.length);
    this.publications = res.data;
    console.log("First", this.tableData[0]);
  })
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


