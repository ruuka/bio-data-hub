<template>
  <div
    href="#"
    class="flex mb-4 relative flex-col items-center bg-white p-3 rounded-lg border shadow-md md:flex-row hover:bg-gray-100"
  >
    <img
      class="w-full h-96 rounded-t-lg md:h-auto md:w-1/3 md:rounded-none md:rounded-l-lg lg:min-h-[278px] object-contain"
      :src="publication.image"
      :alt="publication.title"
    />
    <div class="flex flex-col justify-between p-4 leading-normal">
      <div class="absolute top-2 right-2">
        <div
          v-if="publication.new"
          class="bg-rose-600 text-white p-1 text-xs px-3 rounded"
        >
          New
        </div>
      </div>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800">
        {{ publication.title }}
      </h5>
      <ul class="list-reset flex flex-wrap lg:flex-nowrap space-x-2 mb-2">
        <span
          v-if="publication.full_date"
          class="text-gray-500 p-1 text-xs px-3 rounded"
        >{{ publication.full_date }}</span
        >
        <li
          v-if="publication.category"
          class="bg-gray-400 text-white text-xs font-medium p-1 px-2 rounded uppercase"
        >
          {{ publication.category }}
        </li>
<!--        <li-->
<!--          v-if="publication.status === 'new'"-->
<!--          class="bg-red-500 text-white p-1 text-xs px-3 rounded uppercase"-->
<!--        >-->
<!--          New-->
<!--        </li>-->
        <li
          v-if="publication.type"
          class="border border-gray-300 p-1 px-2 text-xs text-gray-500 rounded"
        >
          {{ publication.type }}
        </li>
        <li
          v-if="publication.journal"
          class="border border-gray-300 p-1 px-2 text-xs text-gray-500 rounded"
        >
          {{ publication.journal }}
        </li>
        <li
          v-if="publication.year"
          class="border border-gray-300 p-1 px-2 text-xs text-gray-500 rounded"
        >
          {{ publication.year }}
        </li>
      </ul>

      <p
        v-if="publication.description"
        class="mb-3 font-normal text-sm text-gray-700"
      >
        {{ publication.description }}
      </p>
      <p v-if="publication.internal_lead" class="font-normal text-gray-700">
        {{ publication.internal_lead }}
      </p>
      <p v-if="publication.authors" class="mb-3 font-normal text-gray-700">
        {{ publication.authors }}
      </p>


      <div class="absolute bottom-2 right-2">
        <button
          v-if="publication.download"
          class="bg-red-700 text-white p-2 text-sm font-semibold px-4 rounded hover:bg-rose-600"
        >{{ publication.download }}</button
        >
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'publicationsCard',
  props: {
    publication: {
      type: Object,
      required: true,
    },
  },
}
</script>
