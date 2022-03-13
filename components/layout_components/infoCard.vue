<template>
  <v-card
    elevation="3"
    :to="btnDestination"
    style="max-width: 360px"
    class="mx-auto"
  >
    <v-img height="225px" :src="imageSrc" />
    <v-divider />
    <v-card-title class="text-center">{{ titleText }}</v-card-title>
    <v-card-text class="text-left">
      {{ descriptionText }}
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="#C6093B" class="font-weight-medium" text>
        Find Out More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    titleText: {
      type: String,
      required: true,
    },
    descriptionText: {
      type: String,
      required: true,
    },
    btnDestination: {
      type: String,
      required: true,
    },
  },
}
</script>
