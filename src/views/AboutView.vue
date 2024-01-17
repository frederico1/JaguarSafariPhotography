<template>
  <!-- eslint-disable -->
  <!-- MOBILE -->
  <div class="md:hidden mt-10 flex flex-col p-3">
    <!-- MENU -->
    <div>
      <JaguarMenu />
    </div>

    <div class="">
      <button
        class="bg-#000"
        id="backToTopBtn"
        @click="scrollToTop"
        v-show="showBackToTopButton"
      >
        <Icon icon="tdesign:arrow-up" color="#000" width="33px" />
      </button>
    </div>
    <!-- MENU -->

    <div>
      <h1
        data-aos="fade-right"
        data-aos-delay="200"
        class="pt-20 text-4xl text-center font-serif tracking-wide uppercase"
      >
        Jaguar Safari Photography Guide
      </h1>
    </div>
    <div class="mt-10 text-center flex flex-col gap-4 leading-relaxed">
      <div data-aos="fade-right" data-aos-delay="400">
        <span class="text-xl mx-auto font-serif">Creators:</span>
        <div class="mt-2">
          <p class="text-center font-sans">
            This company was conceived by Diego Almeida, his mother Delma Silva,
            and stepfather Rizardo Silva with the aim of providing the best that
            a specialized Photography agency can offer to its clients.
          </p>
        </div>
      </div>

      <div class="mt-10 gap-4" data-aos="fade-right" data-aos-delay="600">
        <span class="text-xl mx-auto font-serif">Who We Are:</span>
        <div class="mt-2">
          <p class="text-center font-sans">
            Jaguar Safari is an extension of
            <a
              class="text-[#07396b] font-semibold cursor-pointer"
              href="https://silvatourpantanal.com"
              target="_blanck"
            >
              Silva Tour Pantanal </a
            >, a well-established company with a long history in the market and
            extensive knowledge of the Pantanal. Founded in 2014, the agency
            continues to prove itself as one of the best, most active, and
            reputable in the industry to this day. As a 100% family-owned
            business, we always seek to convey comfort and security to every
            family we serve. With Jaguar Safari Photograph, it will be no
            different; we are committed to providing everything a photographer
            and birdwatcher need.
          </p>
        </div>
      </div>

      <div class="mt-10" data-aos="fade-down">
        <span class="text-xl mx-auto font-serif">Objective: </span>
        <div class="mt-2">
          <p class="text-center font-sans">
            Jaguar Safari Photograph was created for all photography
            enthusiasts, whether they are professionals, amateurs, or those who
            view photography as a small hobby. We offer premium and
            differentiated service to all photography lovers. At Jaguar Safari,
            all packages follow a premium line. Each package has a specific
            detail to cater to you in the best possible way, providing the
            utmost comfort and security.
          </p>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="mt-20">
      <JaguarDivider />
    </div>

    <!-- FOOTER -->
    <div>
      <FooterMobile />
    </div>
  </div>

  <!-- TABLET & DESKTOP -->
  <div class="hidden md:block p-3">
    <!-- MENU -->

    <div class="">
      <JaguarMenuDesktop />
    </div>

    <div class="">
      <button
        class="bg-#000"
        id="backToTopBtn"
        @click="scrollToTop"
        v-show="showBackToTopButton"
      >
        <Icon icon="tdesign:arrow-up" color="#000" width="45px" />
      </button>
    </div>

    <div class="mt-36">
      <div>
        <h1
          data-aos="fade-right"
          data-aos-delay="200"
          class="text-4xl text-center font-serif tracking-wide uppercase"
        >
          Jaguar Safari Photography Guide
        </h1>
      </div>
    </div>

    <div
      class="lg:w-3/5 mx-auto mt-10 text-center flex flex-col gap-4 leading-relaxed"
      data-aos="fade-left"
      data-aos-delay="400"
    >
      <div class="mt-20" data-aos="fade-right" data-aos-delay="400">
        <span class="text-xl mx-auto font-serif">Creators:</span>
        <div class="mt-2 text-lg">
          <p class="text-center font-sans">
            This company was conceived by Diego Almeida, his mother Delma Silva,
            and stepfather Rizardo Silva with the aim of providing the best that
            a specialized Photography agency can offer to its clients.
          </p>
        </div>
      </div>

      <div class="mt-10 gap-4" data-aos="fade-down" data-aos-delay="600">
        <span class="text-xl mx-auto font-serif">Who We Are:</span>
        <div class="mt-2 text-lg">
          <p class="text-center font-sans">
            Jaguar Safari is an extension of
            <a
              class="text-[#07396b] font-semibold cursor-pointer"
              href="https://silvatourpantanal.com"
              target="_blanck"
            >
              Silva Tour Pantanal </a
            >, a well-established company with a long history in the market and
            extensive knowledge of the Pantanal. Founded in 2014, the agency
            continues to prove itself as one of the best, most active, and
            reputable in the industry to this day. As a 100% family-owned
            business, we always seek to convey comfort and security to every
            family we serve. With Jaguar Safari Photograph, it will be no
            different; we are committed to providing everything a photographer
            and birdwatcher need.
          </p>
        </div>
      </div>

      <div class="mt-10" data-aos="fade-down">
        <span class="text-xl mx-auto font-serif">Objective: </span>
        <div class="mt-2 text-lg">
          <p class="text-center font-sans">
            Jaguar Safari Photograph was created for all photography
            enthusiasts, whether they are professionals, amateurs, or those who
            view photography as a small hobby. We offer premium and
            differentiated service to all photography lovers. At Jaguar Safari,
            all packages follow a premium line. Each package has a specific
            detail to cater to you in the best possible way, providing the
            utmost comfort and security.
          </p>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="pt-56">
      <JaguarDivider />
    </div>

    <div>
      <JaguarFooter></JaguarFooter>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import JaguarNavigation from "../components/JaguarNavigation.vue";
import JaguarMenu from "../components/JaguarMenu.vue";
import FooterMobile from "../components/JaguarFooterMobile.vue";
import JaguarDivider from "../components/JaguarDivider.vue";
import BackToTop from "../components/BackToTop.vue";
import JaguarMenuDesktop from "../components/JaguarMenuDesktop.vue";
import JaguarFooter from "../components/JaguarFooter.vue";

import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});

export default {
  components: {
    BackToTop,
    JaguarNavigation,
    JaguarMenu,
    FooterMobile,
    JaguarDivider,
    JaguarMenuDesktop,
    JaguarFooter,
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
  mounted() {
    AOS.init();
  },
  beforeRouteLeave(to, from, next) {
    window.scrollTo(0, 0);
    next();
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
