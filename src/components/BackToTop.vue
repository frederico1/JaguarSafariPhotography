<!-- BackToTopButton.vue -->

<template>
  <v-btn
    v-if="showButton"
    :class="{ 'with-z-index': showButton }"
    color="primary"
    fab
    bottom
    right
    @click="scrollToTop"
  >
    <v-icon>mdi-arrow-up</v-icon>
  </v-btn>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      showButton: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      this.showButton = scrollPosition > 100; // Ajuste o valor conforme necessário
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.with-z-index {
  z-index: 999;
}
/* Adicione estilos conforme necessário */
</style>
