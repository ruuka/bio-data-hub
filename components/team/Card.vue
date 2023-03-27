<template>
  <div
    class="flex flex-col items-start relative w-[350px] cursor-pointer h-[473px] bg-[#fff] border border-[#eaecf0] rounded-[7px]"
    @click="$emit('open-pop-up', item, index)"
  >
    <div
      class="left-[0%] w-full h-[230px] rounded rounded-b-none"
      :style="`background:${item.bgColor}`"
    >
      <img :src="item.image" alt="Paste Image" />
    </div>
    <div class="px-4 py-2">
      <h1
        class="w-[318px] h-[30px] font-[inter] not-italic font-bold text-[20px] leading-[30px] text-[#282828] flex-none order-none mb-2 items-stretch grow-0 pt-[10px] pr-[16px] pb-0"
      >
        {{ item.name }}
      </h1>
      <h2
        class="w-[318px] h-[22px] mb-2.5 font-['Inter'] not-italic font-[400] text-[12px] leading-[22px] text-[#3e3e59] flex-none order-1 items-center grow-0 pt-[0px] pr-[16px] pb-0"
      >
        {{ item.position }}
      </h2>
      <div class="flex items-center gap-2">
        <button
          v-for="(tag, indx) in item.tags"
          :key="indx"
          class="flex flex-row justify-center items-center py-[2px] px-[10px] gap-[5px] rounded-[6px] bg-[#5d42ff14] text-[#644DED] text-[10px]"
        >
          {{ tag }}
        </button>
      </div>
      <div
        class="w-[318px] h-[80px] font-['inter'] text-[14px] leading-[16px] text-[#5f6980] py-2"
      >
        <p>
          <span class="font-bold"> Expertise: </span
          >{{ item.expertise.join('-') }}
        </p>
        <p class="py-5">Joined Gilead in {{ item.joined }}.</p>
      </div>
      <div class="flex w-full gap-4 mt-[24px]">
        <span
          class="w-[31px] h-[32px] font-['font awesome pro'] not-italic font-bold text-[14px] leading-0 flex items-center text-center text-#777777"
        >
          <svg
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 1.8125C2.00391 1.8125 1.8125 2.03125 1.8125 2.25V2.87891L6.51562 6.73438C7.08984 7.19922 7.88281 7.19922 8.45703 6.73438L13.1875 2.87891V2.25C13.1875 2.03125 12.9688 1.8125 12.75 1.8125H2.25ZM1.8125 4.57422V9.25C1.8125 9.49609 2.00391 9.6875 2.25 9.6875H12.75C12.9688 9.6875 13.1875 9.49609 13.1875 9.25V4.57422L9.30469 7.74609C8.23828 8.62109 6.73438 8.62109 5.69531 7.74609L1.8125 4.57422ZM0.5 2.25C0.5 1.29297 1.26562 0.5 2.25 0.5H12.75C13.707 0.5 14.5 1.29297 14.5 2.25V9.25C14.5 10.2344 13.707 11 12.75 11H2.25C1.26562 11 0.5 10.2344 0.5 9.25V2.25Z"
              fill="#777777"
            ></path>
          </svg>
        </span>
        <span
          class="flex items-center text-center w-[31px] h-[32px] font-[400] not-italic text-[14px] leading-[0] text-[#777777] order-1"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.10938 13H0.566406V4.82422H3.10938V13ZM1.82422 3.73047C1.03125 3.73047 0.375 3.04688 0.375 2.22656C0.375 1.70703 0.648438 1.21484 1.08594 0.96875C1.55078 0.695312 2.125 0.695312 2.5625 0.96875C3.02734 1.21484 3.30078 1.70703 3.30078 2.22656C3.30078 3.04688 2.64453 3.73047 1.82422 3.73047ZM12.5977 13H10.082V9.03516C10.082 8.07812 10.0547 6.875 8.74219 6.875C7.42969 6.875 7.23828 7.88672 7.23828 8.95312V13H4.69531V4.82422H7.12891V5.94531H7.15625C7.51172 5.31641 8.33203 4.63281 9.5625 4.63281C12.1328 4.63281 12.625 6.32812 12.625 8.51562V13H12.5977Z"
              fill="#777777"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>
