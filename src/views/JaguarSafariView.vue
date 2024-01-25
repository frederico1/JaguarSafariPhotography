<template>
  <!-- eslint-disable -->
  <!-- MOBILE -->
  <div class="md:hidden flex flex-col justify-center items-center mx-auto">
    <JaguarMenu></JaguarMenu>
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
          <Icon icon="line-md:arrow-up" color="#454546" width="33px" />
        </button>
      </div>

      <!-- HEADER -->
      <div class="mt-28">
        <h1 class="font-serif text-4xl tracking-widest uppercase">Gallery</h1>
      </div>
        <!-- MOBILE FOTOS -->
        <div class="mt-10 flex flex-col gap-4 mx-auto justify-center w-96">
            <div class="">
              <v-img
                class="flex justify-center items-center mx-auto"
                max-width="360"
                max-height="300"
                aspect-ratio=""
                cover
                src="../assets/img/avif/4n/4n.avif"
                alt="Jaguar"
              ></v-img>
            </div>
            <div>
              <v-img
              class="flex justify-center items-center mx-auto"
                max-width="360"
                max-height="300"
                aspect-ratio=""
                cover
                src="../assets/img/avif/4n/4n01.avif"
                alt="Jaguar"
              ></v-img>
            </div>
            <div>
              <v-img
              class="flex justify-center items-center mx-auto"
              
                max-width="360"
                max-height="300"
                aspect-ratio=""
                cover
                src="../assets/img/avif/4n/4n02.avif"
                alt="Jaguar"
              ></v-img>
            </div>
            <div>
              <v-img
              class="flex justify-center items-center mx-auto"
                data-aos="fade-right"
                data-aos-delay="20"
                max-width="360"
                max-height="300"
                aspect-ratio=""
                cover
                src="../assets/img/avif/4n/4n03.avif"
                alt="Snake"
              ></v-img>
            </div>
            <div>
              <v-img
              class="flex justify-center items-center mx-auto"
                data-aos="fade-left"
                data-aos-delay="80"
                max-width="360"
                max-height="300"
                aspect-ratio=""
                cover
                src="../assets/img/avif/4n/4n04.avif"
                alt=""
              ></v-img>
            </div>
            <div>
              <v-img
              class="flex justify-center items-center mx-auto"
                data-aos="fade-up"
                data-aos-delay="120"
                max-width="360"
                max-height="300"
                aspect-ratio=""
                cover
                src="../assets/img/avif/4n/4n05.avif"
              ></v-img>
            </div>
            <div>
              <v-img
              class="flex justify-center items-center mx-auto"
                data-aos="fade-down"
                data-aos-delay="160"
                max-width="360"
                max-height="300"
                aspect-ratio=""
                cover
                src="../assets/img/avif/4n/4n06.avif"
                alt="Alligator"
              ></v-img>
            </div>
          </div>

      <!-- DIVIDER -->
      <div class="mt-56">
      <JaguarDivider></JaguarDivider>
    </div>
      <!-- FOOTER MOBILE-->
      <div class="mt-10">
      <JaguarFooterMobile></JaguarFooterMobile>
      </div>
  </div>

</template>

<script>
/* eslint-disable */
/* eslint-disable */
import { Icon } from "@iconify/vue";
import JaguarCard4 from "../components/JaguarCard4.vue";
import JaguarCard6 from "../components/JaguarCard6.vue";
import JaguarCard7 from "../components/JaguarCard7.vue";
import JaguarNavigation from "../components/JaguarNavigation.vue";
import JaguarFooterMobile from "../components/JaguarFooterMobile.vue";
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
    JaguarFooterMobile,
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
}</style>
