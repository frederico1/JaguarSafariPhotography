<template>
  <div class="">
    <button
      class="bg-#000"
      id="backToTopBtn"
      @click="scrollToTop"
      v-show="showBackToTopButton"
    >
      <Icon icon="tdesign:arrow-up" color="#000" width="40px" />
    </button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "BackToTop",
};
</script>

<style scoped>
</style>
