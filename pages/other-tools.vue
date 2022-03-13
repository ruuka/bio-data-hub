<template>
  <div class="flex w-full">
    <div class="w-full h-full overflow-y-auto px-2 py-4">

      <div class="flex flex-col w-full">
        <div class="divider">Other Tools</div>
      </div>

    </div>
  </div>

</template>


<script>
export default {
  name: 'OtherTools',
  data() {
    return {
      pageTitle: 'Bioinformatics Data Hub - Other Tools',
      pageSubTitle: "A portal to access and analyze Gilead's molecular data.",
    }

    var y0 = [];
    var y1 = [];
    for (var i = 0; i < 50; i ++) {
      y0[i] = Math.random();
      y1[i] = Math.random() + 1;
    }

  },

  head() {
    const title = 'Public Data Sets'
    return {
      title,
    }
  },
}
</script>

