<template>
  <!-- eslint-disable -->
  <!-- FOOTER -->

  <div class="mt-10">
    <!-- ICONES -->
    <div class="flex justify-center items-center gap-5">
      <div class="" data-aos="fade-right" data-aos-delay="50">
        <a href="https://instagram.com/guitophotographs" target="_blanck">
          <Icon icon="iconoir:instagram" width="28" height="28" />
        </a>
        <div class="mt-1 h-[2px] bg-[#E1306C] w-4/4 flex justify-center items-center mx-auto "></div>
      </div>

      <div class="" data-aos="fade-down" data-aos-delay="50">
        <a
          href="https://api.whatsapp.com/send?phone=+5565992764968&text=Hello%21"
          target="_blanck"
        >
          <Icon icon="la:whatsapp" width="28" height="28" />
        </a>
        <div class="mt-1 h-[2px] bg-[#128C7E] w-4/4 flex justify-center items-center mx-auto "></div>
      </div>

      <div class="" data-aos="fade-up" data-aos-delay="50">
        <a href="https://www.tripadvisor.com.br/Profile/jaguarsafarip" target="_blanck">
          <Icon icon="cib:tripadvisor" color="" width="28" height="28" />
        </a>
        <div class="mt-1 h-[2px] bg-[#25D366] w-4/4 flex justify-center items-center mx-auto "></div>
      </div>
      
      <div>
        <div class="" data-aos="fade-left" data-aos-delay="50">
          <a
            href="mailto:http://jaguarsafariphotograph@gmail.com"
            target="_blanck"
          >
            <Icon icon="iconamoon:email-thin" width="28" height="28" />
            <div class="mt-1 h-[2px] bg-[#4285F4] w-4/4 flex justify-center items-center mx-auto "></div>
          </a>
        </div>
      
      </div>
      
    </div>
    <div
      class="mt-16 mb-4 uppercase text-xs flex flex-col justify-center items-center tracking-wider"
    >
      <div class="">
        <p class="font-sans text-xs">© 2024 All rights reserved.</p>
      </div>
  
      <div>
        <p class="font-sans text-xs">Jaguar Safari Photography</p>
      </div>
    </div>
  </div>

  <!-- FOOTER FOOTER -->
</template>

<script>
/* eslint-disable */
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  name: "FooterMobile",
};
</script>

<style scoped>
.borda{
    border-bottom-width: 2px !important;
   border-color: red !important;
}
</style>
