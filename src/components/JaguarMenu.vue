<template>
  <div>
    <div class="header" :class="{ 'header-scrolled': scrolled }">
      <div class="menu-icon" @click="toggleMenu">
        <div class="bar" :class="{ 'bar-open': menuOpen }"></div>

        <div class="bar" :class="{ 'bar-open': menuOpen }"></div>

        <div class="bar" :class="{ 'bar-open': menuOpen }"></div>
      </div>
    </div>

    <!-- Menu -->
    <div
      class="menu opacity-90 flex flex-col gap-10 uppercase text-base font-semibold tracking-wider"
      :class="{ 'menu-open': menuOpen }"
    >
      <router-link to="/">Home</router-link>

      <router-link to="/about">About US</router-link>

      <router-link to="">Gallery</router-link>

      <router-link to="/Contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "JaguarMenu",
  data() {
    return {
      menuOpen: false,
      scrolled: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
  },
  mounted() {
    // Adiciona um listener para o evento de rolagem da página
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // Remove o listener quando o componente é destruído para evitar vazamentos de memória
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #1d1d1d;
  padding: 13px;
  z-index: 1000;
  transition: background-color 0.3s;
}

.header-scrolled {
  background-color: #303030;
}

.menu-icon {
  cursor: pointer;
}

.bar {
  height: 3px;
  width: 25px;
  background-color: #fff;
  margin: 6px 0;
  transition: transform 0.3s, opacity 0.3s;
}

.bar-open:nth-child(1) {
  transform: rotate(-45deg) translate(-7px, 7px);
}

.bar-open:nth-child(2) {
  opacity: 0;
}

.bar-open:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: translateX(-100%);
  transition: transform 0.3s;
}

.menu-open {
  transform: translateX(0);
  z-index: 900;
}
</style>
