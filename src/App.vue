<template>
  <!-- <div class="hidden md:block bg-[#1a2b5a] h-20 md:mt-96 shadow-2xl"></div>  -->

  <!-- MOBILE MENUS -->

  <router-view />
</template>
<script>
/* eslint-disable */
import JaguarMenu from "../src/components/JaguarMenu.vue";
import JaguarAnimated from "../src/components/JaguarAnimated.vue";
import FooterMobile from "../src/components/JaguarFooterMobile.vue";

export default {
  components: {
    FooterMobile,
    JaguarAnimated,
    JaguarMenu,
  },
};
</script>
<style>
#app {
  font-family: "Red Hat Text Variable", sans-serif;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  line-height: 1;
}
</style>
