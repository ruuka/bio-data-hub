<template>
          <!-- START OF TABLEUE HERO -->
<div class="w-full">
      <div class="container mx-auto relative">
<hero-text />
<hero-image />
      </div>
</div>
<!-- END OF TABLEUE HERO -->
</template>

<script>
import HeroImage from './HeroImage.vue'
import HeroText from './HeroText.vue'
export default {
components: {
    HeroText,
    HeroImage,
}
}
</script>

