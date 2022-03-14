<template>
  <div class=" carousel w-full h-full">
  <div class="splide w-full">

     <div class="splide__arrows bg-none">
		<button class="splide__arrow splidearrow splide__arrow--prev bg-none ">
		<img src='~static/arrow.svg' alt="" srcset="" class="transform rotate-180">
		</button>
		<button class="splide__arrow splide__arrow--next splidearrow">
			<img src='~static/arrow.svg' alt="" srcset="">
		</button>
  </div>

  <div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide item">
        <div class="w-full h-full relative">
           <img src='~static/slide.png' class="h-[350px] w-full"/>
           <h4 class="absolute bottom-3 text-xl lg:text-2xl font-normal text-white w-full text-center">New publication about bioinformatics</h4>
        </div>

      </li>
	<li class="splide__slide item">
        <div class="w-full h-full relative">
           <img src='~static/slide.png' class="h-[350px] w-full"/>

        </div>

      </li>
	<li class="splide__slide item">
        <div class="w-full h-full relative">
           <img src='~static/slide.png' class="h-[350px] w-full"/>

        </div>

      </li>
		</ul>
  </div>
</div>
  </div>
</template>

<script>


export default {
    name:"Carousel",
    mounted()  {
      if(process.client) {
     new  Splide( '.splide',
                {
                  type   : 'loop',
                  padding: '15%',

                    classes: {
                  // // Add classes for arrows.
                  // arrows: 'splide__arrows text-white fill-white',
                  // arrow : 'splide__arrow your-class-arrow fill-current opacity-100  stroke-current text-white h-20 w-20 text-2xl ',
                  // prev  : 'splide__arrow--prev your-class-prev fill-current opacity-100  stroke-current text-white h-20 w-20 text-2xl',
                  // next  : 'splide__arrow--next your-class-next fill-current opacity-100  stroke-current text-white h-20 w-20 text-2xl',

                  // Add classes for pagination.
                  pagination: 'splide__pagination hidden ', // container
                  page      : 'splide__pagination__page hidden ', // each button
  },
                }).mount();
      }

    }
}
</script>

<style scoped>
.splidearrow  {
  background: none;
  opacity: 1;
}

.item {
  opacity: .8;
}

.item.is-active {
      opacity: 1;
}

</style>
