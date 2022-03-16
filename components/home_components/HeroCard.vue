<template>
    <div class="class flex flex-wrap lg:flex-nowrap px-2 space-x-2 py-2 ">
    <div class="w-1/4 p-3">
      <img v-if="item.src" :src="item.src" />
    </div>
    <div class="flex-1">
      <h4 class="font-bold">{{item.name}}</h4>
      <p class="text-sm font-light">{{item.description}}</p>
      <a :href="item.href" class="text-[#C51F3F] text-sm">Find out more?</a>
    </div>
  </div>
</template>

<script>
export default {
    name:"HeroCard",
    props: {
        item: {
            type:Object,
            required:true,
        }
    }

}
</script>

