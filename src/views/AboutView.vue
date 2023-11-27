<template>
  <div class="">
    <!-- MOBILE -->
    <div class="md:hidden mt-10 flex flex-col p-3">
      <!-- MENU -->
      <div>
        <JaguarMenu />
      </div>

      <!-- MENU -->
      <div data-aos="fade-right" data-aos-delay="200">
        <h1
          class="pt-10 text-4xl font-bold font-serif text-center tracking-widest"
        >
          Jaguar Safari Photography Guide
        </h1>
      </div>

      <div class="mt-10 text-center flex flex-col gap-4 leading-relaxed">
        <div data-aos="fade-right" data-aos-delay="400">
          <span class="font-bold text-lg mx-auto md:text-xl">Creators:</span>
          <p class="text-justify md:text-xl">
            This company was conceived by Diego Almeida, his mother Delma Silva,
            and stepfather Rizardo Silva with the aim of providing the best that
            a specialized Photography agency can offer to its clients.
          </p>
        </div>

        <div data-aos="fade-right" data-aos-delay="600">
          <span class="font-bold text-lg mx-auto md:text-xl">Who We Are:</span>
          <p class="text-justify md:text-xl">
            Jaguar Safari is an extension of Silva Tour Pantanal, a
            well-established company with a long history in the market and
            extensive knowledge of the Pantanal. Founded in 2014, the agency
            continues to prove itself as one of the best, most active, and
            reputable in the industry to this day. As a 100% family-owned
            business, we always seek to convey comfort and security to every
            family we serve. With Jaguar Safari Photograph, it will be no
            different; we are committed to providing everything a photographer
            and birdwatcher need.
          </p>
        </div>

        <div data-aos="fade-down">
          <span class="font-bold text-lg mx-auto md:text-xl">Objective: </span>
          <p class="text-justify md:text-xl">
            Jaguar Safari Photograph was created for all photography
            enthusiasts, whether they are professionals, amateurs, or those who
            view photography as a small hobby. We offer premium and
            differentiated service to all photography lovers. At Jaguar Safari,
            all packages follow a premium line. Each package has a specific
            detail to cater to you in the best possible way, providing the
            utmost comfort and security.
          </p>
        </div>
      </div>

      <!--  -->
      <div class="mt-20">
        <JaguarDivider />
      </div>

      <!-- FOOTER -->
      <div>
        <FooterMobile />
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */

import JaguarNavigation from "../components/JaguarNavigation.vue";
import JaguarMenu from "../components/JaguarMenu.vue";
import FooterMobile from "../components/JaguarFooterMobile.vue";
import JaguarDivider from "../components/JaguarDivider.vue";

import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});

export default {
  components: {
    JaguarNavigation,
    JaguarMenu,
    FooterMobile,
    JaguarDivider,
  },
};
/* eslint-disable */
</script>
