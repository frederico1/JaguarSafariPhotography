<template>
    <!-- eslint-disable -->

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

    <!-- DESKTOP E TABLET -->

    <div class="hidden md:flex flex-col justify-center items-center mx-auto ">
      <div class="md:hidden">
        <JaguarMenu />
      </div>
      <div class="">
        <button  class="bg-#000"
          id="backToTopBtn" @click="scrollToTop" v-show="showBackToTopButton">
          <Icon icon="line-md:arrow-up" color="#454546" width="40px" /> 
        </button>
      </div>

      <!-- MENU DESKTOP -->

      <JaguarMenuDesktop/>

      <div class="mt-36" data-aos="fade-right" data-aos-delay="200">
        <h1 class="text-4xl tracking-widest font-serif">JAGUAR TOURS</h1>
      </div>
      <div class="pt-32 grid gap-7 lg:grid lg:grid-cols-3 lg:gap-20">
        <div>
          <JaguarCard4 data-aos="fade-right" data-aos-delay="200"></JaguarCard4>
        </div>
        <div>
          <JaguarCard6 data-aos="fade-down" data-aos-delay="200"></JaguarCard6>
        </div>
        <div>
          <JaguarCard7 data-aos="fade-left" data-aos-delay="200"></JaguarCard7>
        </div>
      </div>
    </div>


    <!-- MOBILE  -->

    <div class=" md:hidden flex flex-col justify-center items-center mx-auto ">
      <div class="">
        <JaguarMenu />
      </div>
      <div class="">
          <button
            class="bg-#000"
            id="backToTopBtn"
            @click="scrollToTop"
            v-show="showBackToTopButton"
          >
          <Icon icon="line-md:arrow-up" color="#454546" width="30px" />
          </button>
        </div>

      <!-- MENU DESKTOP -->

      <JaguarMenuDesktop/>

      <div class=" mt-28" data-aos="fade-right" data-aos-delay="200">
        <h1 class=" text-3xl tracking-widest font-serif">JAGUAR TOURS</h1>
      </div>
      <div class=" pt-20 grid gap-7 lg:grid lg:grid-cols-3 lg:gap-20">
        <div>
          <JaguarCard4 data-aos="fade-right" data-aos-delay="200"></JaguarCard4>
        </div>
        <div>
          <JaguarCard6 data-aos="fade-down" data-aos-delay="200"></JaguarCard6>
        </div>
        <div>
          <JaguarCard7 data-aos="fade-left" data-aos-delay="200"></JaguarCard7>
        </div>
      </div>
    </div>
    
    <!-- CARDS -->


    
    <div class="mt-56">
      <JaguarDivider />
    </div>

    <!-- HOME FOOTER MOBILE -->

    <div class="md:hidden">
      <FooterMobile />
    </div>

    <!-- HOME FOOTER DESKTOP -->
    <div class="hidden md:block">
      <JaguarFooter></JaguarFooter>

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
import JaguarFooter from "../components/JaguarFooter.vue";
import JaguarMenuDesktop from "../components/JaguarMenuDesktop.vue";

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
    JaguarFooter,
    JaguarMenuDesktop,
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
  background-color: #ffffff;
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
