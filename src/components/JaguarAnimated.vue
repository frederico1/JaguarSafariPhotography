<template>
  <div class="animated-content" ref="animatedContent">
    <transition name="slide-fade">
      <div v-if="isVisible" class="content">
        <!-- Seu conteúdo aqui -->
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </transition>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted, onBeforeUnmount } from "vue";

const animatedContent = ref(null);
const isVisible = ref(false);

const handleScroll = () => {
  if (animatedContent.value) {
    const contentTop = animatedContent.value.getBoundingClientRect().top;
    // Ajuste o valor 100 para personalizar quando a animação deve começar
    isVisible.value = contentTop < window.innerHeight - 100;
  }
};

onMounted(() => {
  animatedContent.value = document.getElementById("animatedContent");
  window.addEventListener("scroll", handleScroll);
  // Disparar a verificação ao carregar a página
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.animated-content {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.5s, transform 0.5s;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-fade-enter-to, .slide-fade-leave-to /* .slide-fade-leave-active no <2.1.8 */ {
  opacity: 1;
  transform: translateY(0);
}
</style>
