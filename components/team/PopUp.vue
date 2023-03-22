<template>
  <transition name="pop-up" mode="out-in">
    <section
      class="fixed z-50 bg-black bg-opacity-50 flex inset-0 items-center justify-center"
    >
      <div class="relative w-full flex items-center justify-center">
        <div
          class="w-full lg:w-2/3 h-[600px] bg-white rounded-2xl px-6 py-8 relative"
        >
          <div
            class="absolute cursor-pointer right-1 top-1"
            @click="$emit('close-pop-up')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
              />
            </svg>
          </div>
          <h4
            class="text-[#54565B] text-[36px] leading-[147.4%] font-black mb-5"
          >
            Michael Joe <br />
            <hr class="w-[70px] h-1 bg-primary border-none" />
          </h4>

          <p
            class="w-2/3 pr-[6rem] text-base text-[#54655B] tracking-[0.005em] leading-[30px]"
          >
            Michael currently supports oncology programs, manages data transfer
            and organization, and administrates high performance computing.
            Before joining Gilead, Biao worked on pharmacogenomics projects at
            the Buck Institute for Research on Aging and machine learning
            projects at Indiana University, where he built a popular online tool
            MutPred for predicting pathogenicity of missense variants. Biao has
            strong interests in statistics, computing and cancer genomics, and
            is enthusiastic about some recent advancement in causal inference
            and numerical optimization. He got a PhD in Bioinformatics in 2006
            from the Institute of Biophysics, CAS, China.
          </p>
        </div>

        <div class="absolute h-[600px] w-1/3 right-6 mt-[5%]">
          <div class="relative">
            <div
              class="absolute aspect-square z-10 ml-[1.4rem] w-[290px] rounded-full bg-primary mt-[15%]"
            ></div>

            <img
              src="/team/michael-large.png"
              class="absolute z-40 right-[9rem] aspect-square w-[620px]"
              alt=""
            />

            <div
              class="h-[20px] w-[20px] left-[13rem] z-20 top-[2rem] rounded-full bg-[#A19CFF] absolute"
            ></div>
            <div
              class="h-[42px] w-[42px] top-[8rem] -left-[4rem] rounded-full bg-[#54565B] absolute"
            ></div>
            <div
              class="h-[50px] w-[50px] left-3 z-20 top-[16rem] rounded-full bg-[#A19CFF] absolute"
            ></div>
          </div>
        </div>

        <div
          class="z-50 w-2/3 mx-auto top-[89%] rounded-2xl flex justify-between px-4 items-center rounded-t-none absolute bottom-0 inset-0 h-16 bg-opacity-90 bg-white"
        >
          <div
            class="flex justify-between px-4 items-center w-full text-sm text-[#242533]"
          >
            <a href="">Prev</a>
            <a href="">Next</a>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<style>
.pop-up-enter-active,
.pop-up-leave-active {
  transition: pop 1s;
}

.pop-up-enter,
.pop-up-leave-active {
  opacity: 0;
}

@keyframes pop {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  0% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
