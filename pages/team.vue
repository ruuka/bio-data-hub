<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-10 container mx-auto w-full">
    <div class="px-4 lg:px-20 flex flex-col items-center justify-center">
      <h4
        class="text-[#888888] uppercase font-semibold text-sm leading-[26px] text-center"
      >
        Our Team
      </h4>
      <h2
        class="font-black py-2.5 leading-[62px] tracking-tight text-[54px] text-center text-[#282828]"
      >
        Meet the <span class="text-[#C51F3F]">CBEA TEAM.</span>
      </h2>
      <p class="text-[#5F6980] leading-[35px] text-center text-lg">
        The Gilead Clinical Bioinformatics Team is a group of scientists trained
        in genomics, bioinformatics, data science, and statistics. We work
        closely with both internal and external collaborators to analyze
        genomics and non-genomics biomarker data to support development
        programs.
      </p>
    </div>
    <div class="cards w-full mt-6">
      <div class="container px-4 lg:px-20">
        <div class="w-full grid grid-cols-3 gap-4">
          <Card
            v-for="(item, index) in members"
            :key="'team' + index"
            :item="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/team/Card.vue'
import members from '../store/team.js'
export default {
  components: {
    Card,
  },
  data() {
    return {
      members,
    }
  },
}
</script>
