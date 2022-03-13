<template>
  <div class="flex w-full">
    <div class="w-full h-full overflow-y-auto px-2 py-4">

      <div class="flex flex-col w-full">
        <div class="divider">Public Data Sets</div>
        <div class="form-control">
          <div class="input-group">
            <input type="text" placeholder="Search…" class="input input-bordered">
            <button class="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>


<script>
export default {
  name: 'PublicDataSets',
  data() {
    return {
      pageTitle: 'Bioinformatics Data Hub - Public Data Sets',
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

