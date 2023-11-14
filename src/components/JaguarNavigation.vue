<template>
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
</template>

<script>
/* eslint-disable */
import { Icon } from "@iconify/vue";
export default {
  name: "JaguarNavigation",
  components: {
    Icon,
  },
};
/* eslint-disable */
</script>

<style></style>
