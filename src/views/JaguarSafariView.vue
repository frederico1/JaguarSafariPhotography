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
                src="../assets/img/avif/gallery/g01.avif"
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
                src="../assets/img/avif/gallery/g03.avif"
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
                src="../assets/img/avif/gallery/g04.avif"
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
                src="../assets/img/avif/gallery/g05.avif"
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
                src="../assets/img/avif/gallery/g06.avif"
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
                src="../assets/img/avif/gallery/g07.avif"
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
                src="../assets/img/avif/gallery/g08.avif"
                alt="Alligator"
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
                src="../assets/img/avif/gallery/g10.avif"
                alt="Alligator"
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
                src="../assets/img/avif/gallery/g11.avif"
                alt="Alligator"
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
                src="../assets/img/avif/gallery/g12.avif"
                alt="Alligator"
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
                src="../assets/img/avif/gallery/g13.avif"
                alt="Alligator"
              ></v-img>
            </div>

          </div>

      <!-- DIVIDER -->
        <div class="pt-56">
          <JaguarDivider />
        </div>

    <!-- HOME FOOTER MOBILE -->

    <div class="md:hidden">
      <JaguarFooterMobile />
    </div>
  </div>

  <!-- TABLET E DESKTOP -->
  <div class="hidden md:flex">
    <!-- MENU -->
    <div class="flex justify-center items-center mx-auto p-3">
    <JaguarMenuDesktop></JaguarMenuDesktop>

    <!-- BACKTOTOP -->

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
      <div><h1>GALLERY</h1></div>

      <!-- IMAGENS -->
      <v-row>
    <template v-for="(image,imgIdx) in imageLayout" :key="imgIdx">
      <v-col :cols="image.cols">
        <v-img
          :src="`https://picsum.photos/500/300?image=${image.cols * 20}`"
          cover
          height="100%"
        ></v-img>
      </v-col>

      <v-col v-if="image.children" cols="6" class="d-flex flex-column">
        <v-row>
          <v-col v-for="(children,childIdx) in image.children" :key="childIdx" :cols="children.cols">
            <v-img
              :src="`https://picsum.photos/500/300?image=${children.cols + childIdx}`"
              cover
              height="100%"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </template>
  </v-row>
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
