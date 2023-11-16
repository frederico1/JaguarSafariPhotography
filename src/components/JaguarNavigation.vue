<template>
  <!-- MOBILE NAVIGATION -->

  <!-- MOBILE NAVIGATION -->

  <!-- NAVIGATION TABLET >>>>  -->
  <div class="pt-5 md:flex md:justify-around md:items-center">
    <div class="pt-0 md:mt-5">
      <h1>LOGO AQUI</h1>
    </div>

    <!-- NAV -->

    <div
      class="flex pt-5 gap-4 justify-around text-md font-semibold md:text-xl"
    >
      <router-link class="underline" to="/">Home</router-link>
      <router-link class="underline" to="/about">About Us</router-link>
      <router-link class="underline" to="/jaguar-safari"
        >Jaguar Tours</router-link
      >
      <router-link class="underline" to="/contact">Contact</router-link>
    </div>

    <!-- ICONS -->

    <div class="flex pt-4 gap-1 justify-center">
      <Icon icon="openmoji:flag-brazil" width="24" height="24" />
      <Icon icon="openmoji:flag-germany" width="24" height="24" />
      <Icon icon="openmoji:flag-italy" width="24" height="24" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { Icon } from "@iconify/vue";
export default {
  name: "JaguarNavigation",
  components: {
    Icon,
  },
  data() {
    return {
      drawer: null,
    };
  },
};
/* eslint-disable */
</script>

<style scoped>
.underline::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.underline {
  position: relative;
  color: #000;
  text-decoration: none;
}

.underline:hover {
  color: #000;
}

.underline::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000;
  transform: scaleX(0);
  transform-origin: top left;
  transition: transform 0.3s ease;
}

.underline:hover::before {
  transform: scaleX(1);
}
</style>
