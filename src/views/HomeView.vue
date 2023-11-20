<template>
  <div class="">
    <!-- NAVIGATION -->

    <JaguarNavigation></JaguarNavigation>
    <!-- NAVIGATION -->

    <!-- Carousel -->
    <div class="hidden md:block drop-shadow-[0_45px_45px_rgba(0,0,0,0.25)]">
      <v-carousel
        hide-delimiters
        progress="#41bc3f"
        width=""
        height="650"
        cycle
      >
        <v-carousel-item src="../assets/img/jaguar6nightscard.png" cover>
        </v-carousel-item>
        <v-carousel-item
          src="../assets/img/jaguar4nightscard.png"
          cover
        ></v-carousel-item>
        <v-carousel-item
          src="../assets/img/jaguar7nightscard.png"
          cover
        ></v-carousel-item>
      </v-carousel>
    </div>

    <!-- Carousel -->

    <!-- CARDS -->

    <div class="pt-20 flex flex-col justify-center items-center mx-auto pb-10">
      <div>
        <h1 class="font-bold text-3xl md:text-6xl">JAGUAR TOURS</h1>
      </div>
      <div class="pt-10 grid gap-7 lg:grid lg:grid-cols-3 lg:gap-20">
        <div>
          <JaguarCard4></JaguarCard4>
        </div>
        <div>
          <JaguarCard6></JaguarCard6>
        </div>
        <div>
          <JaguarCard7></JaguarCard7>
        </div>
      </div>
    </div>

    <!-- CARDS -->
  </div>
  <router-view />
</template>

<script>
/* eslint-disable */
import { Icon } from "@iconify/vue";
import JaguarCard4 from "../components/JaguarCard4.vue";
import JaguarCard6 from "../components/JaguarCard6.vue";
import JaguarCard7 from "../components/JaguarCard7.vue";
import JaguarNavigation from "../components/JaguarNavigation.vue";

export default {
  components: {
    Icon,
    JaguarCard4,
    JaguarCard6,
    JaguarCard7,
    JaguarNavigation,
  },
};
/* eslint-disable */
</script>
