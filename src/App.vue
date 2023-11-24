<template>
  <!-- <div class="hidden md:block bg-[#1a2b5a] h-20 md:mt-96 shadow-2xl"></div>  -->

  <router-view />
</template>
<script>
/* eslint-disable */
import JaguarFooter from "../src/components/JaguarFooter.vue";

import JaguarAnimated from "../src/components/JaguarAnimated.vue";

export default {
  components: {
    JaguarFooter,
    JaguarAnimated,
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
