<template>
  <div>
    <!-- SECTION DO TOPO  -->

    <div class="pt-10 flex justify-around">
      <div class="">
        <h1>LOGO AQUI</h1>
      </div>

      <!-- NAV -->

      <div class="flex gap-4">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/tours">Tours</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>

      <!-- NAV -->

      <!-- ICONS -->

      <div class="flex gap-1">
        <Icon icon="openmoji:flag-brazil" width="24" height="24" />
        <Icon icon="openmoji:flag-germany" width="24" height="24" />
        <Icon icon="openmoji:flag-italy" width="24" height="24" />
      </div>

      <!-- ICONS -->
    </div>

    <!-- SECTION DO TOPO  -->

    <!-- CARDS -->

    <div class="pt-60 flex flex-col justify-center items-center mx-auto">
      <div>
        <h1 class="text-6xl">JAGUAR TOURS</h1>
      </div>
      <div class="pt-10 sm:flex sm:flex-col md:grid md:grid-cols-3">
        <JaguarCard4></JaguarCard4>
        <JaguarCard6></JaguarCard6>
        <JaguarCard7></JaguarCard7>
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

export default {
  components: {
    Icon,
    JaguarCard4,
    JaguarCard6,
    JaguarCard7,
  },
};
/* eslint-disable */
</script>
