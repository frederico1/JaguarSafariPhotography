<template>
  <div class="p-3">
    <!-- NAVIGATION -->

    <!-- NAVIGATION -->

    <!-- Carousel
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

    -->

    <!-- CARDS -->

    <!-- MOBILE -->

    <div class="pt-20 flex flex-col justify-center items-center mx-auto pb-10">
      <div class="md:hidden">
        <JaguarMenu />
      </div>
      <div class="">
        <button
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-anchor-placement="top-top"
          class="bg-#000"
          id="backToTopBtn"
          @click="scrollToTop"
          v-show="showBackToTopButton"
        >
          <Icon icon="tdesign:arrow-up" color="#000" width="40px" />
        </button>
      </div>
      <div class="mt-10">
        <h1 class="text-4xl tracking-widest font-serif">JAGUAR TOURS</h1>
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

    <div>
      <JaguarDivider />
    </div>

    <!-- HOME FOOTER MOBILE -->

    <div class="md:hidden">
      <FooterMobile />
    </div>
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
import FooterMobile from "../components/JaguarFooterMobile.vue";
import JaguarDivider from "../components/JaguarDivider.vue";
import JaguarMenu from "../components/JaguarMenu.vue";
import BackToTop from "../components/BackToTop.vue";

export default {
  components: {
    Icon,
    JaguarCard4,
    JaguarCard6,
    JaguarCard7,
    JaguarNavigation,
    FooterMobile,
    JaguarDivider,
    JaguarMenu,
    BackToTop,
  },
  data() {
    return {
      showBackToTopButton: false,
      cards: [{ img: "/img-1.jpg", grid: "card-2-1" }],
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
      this.showBackToTopButton = window.scrollY > 20;
    },
    scrollToTop() {
      // Adicionando uma transição suave ao rolar para o topo
      const scrollDuration = 1500; // em milissegundos
      const scrollStep = -window.scrollY / (scrollDuration / 15);
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 1.2);
    },
  },
};
/* eslint-disable */
</script>

<style scoped>
#backToTopBtn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: #fff;
  border: none;
  background-color: #fff;
  border-radius: 5px;
  padding: 1px 1px;
  border-radius: 5rem;
  cursor: pointer;
  z-index: 1900;
  transition: opacity 0.3s ease-in-out;
}

#backToTopBtn.show {
  opacity: 1;
}
</style>
