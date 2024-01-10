<template>
  <!-- eslint-disable -->

  <!-- MOBILE -->
  <div class="md:hidden p-3">
    <!-- MENU -->
    <div>
      <JaguarMenu />
    </div>

    <div class="">
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

      <div class="mt-20" data-aos="fade-right" data-aos-delay="200">
        <h1 class="text-4xl text-center font-serif tracking-wide uppercase">
          Jaguar Expeditions in Porto Jofre
        </h1>
      </div>

      <div class="mt-10" data-aos="fade-right" data-aos-delay="200">
        <p class="text-center font-sans leading-relaxed">
          First, our company offers Pantanal jaguar expeditions and photography
          starting in Cuiabá. However, we can start your Pantanal jaguar safari
          itinerary immediately upon your arrival. In fact, you have the
          possibility to stay overnight in a hotel in the city. In this case,
          our Tour Agency will pick you up the next day at 8:00 am to take you
          to the lodge. Also, we’ll take you a hundred kilometers to a small
          town called Poconé. Therefore, this city is at the end of
          civilization, it is the beginning of the Estrada Parque
          Transpantaneira. Subsequently, the path will be one hundred and fifty
          kilometers on a dirt road. This time, to the lodge in Porto Jofre.
          Certainly, the trip is interesting, you will see many wild animals.
        </p>
      </div>

      <!--  -->

      <JaguarDivider />

      <div class="mt-10" data-aos="fade-up" data-aos-delay="250">
        <div>
          <h1 class="text-2xl text-center font-serif tracking-wide uppercase">
            Premium Wildlife Photography Expedition in the Pantanal: A Week of
            Immersion in the Wild
          </h1>
        </div>
      </div>

      <!-- TOUR ITINERARY DAYS  -->

      <div class="mt-10" data-aos="fade-up" data-aos-delay="350">
        <div class="w-full">
          <v-stepper
            elevation="16"
            mobile
            color="#000"
            class=""
            prev-text="Preview"
            next-text="Next"
            :items="[
              'DAY 1',
              'DAY 2',
              'DAY 3',
              'DAY 4',
              'DAY 5',
              'DAY 6',
              'DAY 7',
            ]"
          >
            <template v-slot:item.1>
              <v-card title="Day 1:" flat class="leading-relaxed font-sans">
                <p class="font-semibold">
                  Arrival and Transpantaneira Experience
                </p>
                <p class="mt-2">
                  Commence your elite Pantanal journey with our private guide
                  picking you up from the luxurious hotel in Cuiabá. In an
                  exclusive vehicle, traverse the Transpantaneira, capturing
                  unique shots of birds, mammals, and reptiles. After a
                  sophisticated lunch, embark on a private boat tour, perfect
                  for photographing hawks, kingfishers, otters, and perhaps even
                  majestic jaguars. The day concludes with a gourmet dinner,
                  followed by a meticulously planned night safari, providing a
                  night of rest in a luxurious environment.
                </p>
              </v-card>
            </template>

            <template v-slot:item.2>
              <v-card title="Day 2:" flat class="leading-relaxed font-sans">
                <p class="font-semibold">
                  Serene Morning and Photographic Exploration in the Forest
                </p>
                <p class="mt-2">
                  Begin the day with an exclusive morning walk to a tower to
                  witness an intimate sunrise. After a refined breakfast,
                  explore the farm's forests, capturing unique images of
                  monkeys, agoutis, and a myriad of birds. A gourmet lunch
                  precedes the transfer to Porto Jofre, where a refined dinner
                  awaits around 7:00 pm, followed by a night of luxurious
                  accommodation
                </p>
              </v-card>
            </template>

            <template v-slot:item.3>
              <v-card title="Day 3:" flat class="leading-relaxed font-sans">
                <p class="font-semibold">Start of Jaguar Photographic Safari</p>
                <p class="mt-2">
                  The third day starts early with breakfast at 6 am, marking the
                  beginning of your jaguar photographic safari itinerary. From 7
                  am to 5 pm, navigate the Encontro das Águas State Park in
                  search of jaguars and giant otters, capturing exceptional
                  images. A noon picnic, masterfully prepared, fuels your
                  journey, with the second part of the safari extending until 7
                  pm. The day ends with a gourmet dinner and high-standard
                  accommodations.
                </p>
              </v-card>
            </template>
            <template v-slot:item.4>
              <v-card title="Day 4:" flat class="leading-relaxed font-sans">
                <p class="font-semibold">Extended Jaguar Photographic Safari</p>
                <p class="mt-2">
                  Continue the jaguar safari, spending an additional 10 hours on
                  the river, including lunch, before returning to the lodge at 5
                  pm. Enjoy a gourmet dinner and another night immersed in the
                  wonders of the Pantanal in a luxurious setting.
                </p>
              </v-card>
            </template>
            <template v-slot:item.5>
              <v-card title="Day 5:" flat class="leading-relaxed font-sans">
                <p class="font-semibold">
                  Photographic Exploration along the Transpantaneira
                </p>
                <p class="mt-2">
                  After breakfast, a specialized guide leads you to an exclusive
                  lodge on the Transpantaneira. Encounter various animals, ideal
                  for photographic opportunities, such as tapirs, anteaters,
                  caimans, and diverse bird species. A gourmet lunch at noon
                  precedes a forest walk, with the day concluding with dinner, a
                  night safari, and overnight in a luxurious setting.
                </p>
              </v-card>
            </template>
            <template v-slot:item.6>
              <v-card title="Day 6:" flat class="leading-relaxed font-sans">
                <p class="font-semibold">
                  Sunrise Walk and Photographic Safari
                </p>
                <p class="mt-2">
                  Start the day with a morning walk to capture the magic of the
                  sunrise, followed by a refined breakfast at 7 am. Engage in an
                  afternoon photographic safari, exploring diverse birds,
                  mammals, and reptiles, creating images that showcase the
                  richness of the fauna. Gourmet lunch is followed by a visit to
                  the tapir's hide. End the day with a night safari back to the
                  lodge, where dinner awaits, and you settle in for the night in
                  a luxurious environment.
                </p>
              </v-card>
            </template>
            <template v-slot:item.7>
              <v-card title="Day 7:" flat class="leading-relaxed font-sans">
                <p class="font-semibold">
                  Bird Feeder Observation and Farewell
                </p>
                <p class="mt-2">
                  On the final day, enjoy observing animals at the bird feeder
                  after breakfast at 7 am. Subsequently, our guide accompanies
                  you back to Cuiabá, concluding this exclusive premium
                  photographic expedition.
                </p>
              </v-card>
            </template>
          </v-stepper>
        </div>

        <div
          class="mt-10 flex flex-col leading-relaxed text-sm font-normal italic"
          data-aos="fade-up"
        >
          <p class="font-semibold not-italic text-lg text-center">
            Included in the Premium Jaguar Expedition for Photographers:
          </p>
          <p class="mt-2">Accommodation in a luxury environment;</p>
          <p>VIP transfer services;</p>
          <p>All gourmet meals;</p>
          <p>Water;</p>
          <p>Beverages included;</p>
          <p>Naturalistic guide specialized in photography;</p>
          <p>
            As bonuses, we provide caps, pouches, T-shirts, and sunscreens
            throughout the experience, adding an extra touch of comfort
            and convenience.
          </p>
        </div>

        <!--  -->

        <JaguarDivider />

        <!-- FOTOS  -->
        <div class="mt-10 flex flex-col gap-4">
          <div class="">
            <v-img
              class="flex justify-center items-center mx-auto"
              data-aos="fade-right"
              data-aos-delay="100"
              max-width="350"
              max-height="300"
              aspect-ratio=""
              cover
              src="../assets/img/6n.png"
            ></v-img>
          </div>
          <div>
            <v-img
              class="flex justify-center items-center mx-auto"
              data-aos="fade-left"
              data-aos-delay="120"
              max-width="350"
              max-height="300"
              aspect-ratio=""
              cover
              src="../assets/img/6n01.png"
            ></v-img>
          </div>
          <div>
            <v-img
              class="flex justify-center items-center mx-auto"
              data-aos="fade-up"
              data-aos-delay="140"
              max-width="350"
              max-height="300"
              aspect-ratio=""
              cover
              src="../assets/img/6n02.png"
            ></v-img>
          </div>
          <div>
            <v-img
              class="flex justify-center items-center mx-auto"
              data-aos="fade-right"
              data-aos-delay="160"
              max-width="350"
              max-height="300"
              aspect-ratio=""
              cover
              src="../assets/img/6n03.png"
            ></v-img>
          </div>
          <div>
            <v-img
              class="flex justify-center items-center mx-auto"
              data-aos="fade-left"
              data-aos-delay="180"
              max-width="350"
              max-height="300"
              aspect-ratio=""
              cover
              src="../assets/img/6n04.png"
            ></v-img>
          </div>
          <div>
            <v-img
              class="flex justify-center items-center mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              max-width="350"
              max-height="300"
              aspect-ratio=""
              cover
              src="../assets/img/dsc0005.png"
            ></v-img>
          </div>
          <div>
            <v-img
              class="flex justify-center items-center mx-auto"
              data-aos="fade-down"
              data-aos-delay="220"
              max-width="350"
              max-height="300"
              aspect-ratio=""
              cover
              src="../assets/img/6n06.png"
            ></v-img>
          </div>
        </div>

        <!--  -->
        <div class="mt-40">
          <JaguarDivider />
        </div>

        <!-- FOOTER -->
        <div>
          <FooterMobile />
        </div>
      </div>
    </div>
  </div>

  <!-- TABLET E DESKTOP -->

  <!-- MENU -->
  <div class="p-3">
    <JaguarMenuDesktop />
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

  <div class="hidden md:block lg:block p-4">
    <div class="mt-28" data-aos="fade-right" data-aos-delay="200">
      <h1 class="text-4xl text-center font-serif tracking-wide uppercase">
        Jaguar Expeditions in Porto Jofre
      </h1>
    </div>

    <!--  -->

    <div
      class="mt-16 lg:w-3/5 md:w-5/6 flex mx-auto"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <p class="text-center leading-relaxed font-sans text-lg">
        First, our company offers Pantanal jaguar expeditions and photography
        starting in Cuiabá. However, we can start your Pantanal jaguar safari
        itinerary immediately upon your arrival. In fact, you have the
        possibility to stay overnight in a hotel in the city. In this case, our
        Tour Agency will pick you up the next day at 8:00 am to take you to the
        lodge. Also, we’ll take you a hundred kilometers to a small town called
        Poconé. Therefore, this city is at the end of civilization, it is the
        beginning of the Estrada Parque Transpantaneira. Subsequently, the path
        will be one hundred and fifty kilometers on a dirt road. This time, to
        the lodge in Porto Jofre. Certainly, the trip is interesting, you will
        see many wild animals.
      </p>
    </div>

    <!-- DIVIDER -->
    <div class="mt-16 lg:w-3/5 md:w-4/4 mx-auto">
      <JaguarDivider />
    </div>

    <!-- TIMELINE JAGUAR TOUR -->

    <div class="mt-10 md:p-4" data-aos="fade-up" data-aos-delay="250">
      <div class="w-2/5 mx-auto">
        <h1 class="text-4xl text-center font-serif tracking-wide uppercase">
          Premium Wildlife Photography Expedition in the Pantanal: A Week of
          Immersion in the Wild
        </h1>
      </div>
    </div>

    <div class="mt-10 md:p-4 lg:w-2/4 md:w-4/4 mx-auto leading-relaxed">
      <v-timeline align="start">
        <v-timeline-item class="mb-4" dot-color="grey" size="small">
          <div>
            <div class="text-h6">Day 1</div>
            <p class="font-semibold mt-4" style="font-size: 20px">
              Arrival and Transpantaneira Experience
            </p>
            <p class="mt-2">
              Commence your elite Pantanal journey with our private guide
              picking you up from the luxurious hotel in Cuiabá. In an exclusive
              vehicle, traverse the Transpantaneira, capturing unique shots of
              birds, mammals, and reptiles. After a sophisticated lunch, embark
              on a private boat tour, perfect for photographing hawks,
              kingfishers, otters, and perhaps even majestic jaguars. The day
              concludes with a gourmet dinner, followed by a meticulously
              planned night safari, providing a night of rest in a luxurious
              environment.
            </p>
          </div>
        </v-timeline-item>

        <v-timeline-item class="mb-4" dot-color="grey" size="small">
          <template v-slot:opposite> </template>
          <div data-aos="fade-right" data-aos-delay="100">
            <div class="text-h6">Day 2</div>
            <p class="font-semibold mt-4" style="font-size: 20px">
              Serene Morning and Photographic Exploration in the Forest
            </p>
            <p class="mt-2">
              Begin the day with an exclusive morning walk to a tower to witness
              an intimate sunrise. After a refined breakfast, explore the farm's
              forests, capturing unique images of monkeys, agoutis, and a myriad
              of birds. A gourmet lunch precedes the transfer to Porto Jofre,
              where a refined dinner awaits around 7:00 pm, followed by a night
              of luxurious accommodation
            </p>
          </div>
        </v-timeline-item>

        <v-timeline-item class="mb-4" dot-color="grey" size="small">
          <div data-aos="fade-left" data-aos-delay="250">
            <div class="text-h6">Day 3</div>
            <p class="font-semibold mt-4" style="font-size: 20px">
              Start of Jaguar Photographic Safari
            </p>
            <p class="mt-2">
              The third day starts early with breakfast at 6 am, marking the
              beginning of your jaguar photographic safari itinerary. From 7 am
              to 5 pm, navigate the Encontro das Águas State Park in search of
              jaguars and giant otters, capturing exceptional images. A noon
              picnic, masterfully prepared, fuels your journey, with the second
              part of the safari extending until 7 pm. The day ends with a
              gourmet dinner and high-standard accommodations.
            </p>
          </div>
        </v-timeline-item>
        <v-timeline-item class="mb-4" dot-color="grey" size="small">
          <div data-aos="fade-right" data-aos-delay="300">
            <div class="text-h6">Day 4</div>
            <p class="font-semibold mt-4" style="font-size: 20px">
              Extended Jaguar Photographic Safari
            </p>
            <p class="mt-2">
              Continue the jaguar safari, spending an additional 10 hours on the
              river, including lunch, before returning to the lodge at 5 pm.
              Enjoy a gourmet dinner and another night immersed in the wonders
              of the Pantanal in a luxurious setting.
            </p>
          </div>
        </v-timeline-item>
        <v-timeline-item class="mb-4" dot-color="grey" size="small">
          <div data-aos="fade-left" data-aos-delay="350">
            <div class="text-h6">Day 5</div>
            <p class="font-semibold mt-4" style="font-size: 20px">
              Photographic Exploration along the Transpantaneira
            </p>
            <p class="mt-2">
              After breakfast, a specialized guide leads you to an exclusive
              lodge on the Transpantaneira. Encounter various animals, ideal for
              photographic opportunities, such as tapirs, anteaters, caimans,
              and diverse bird species. A gourmet lunch at noon precedes a
              forest walk, with the day concluding with dinner, a night safari,
              and overnight in a luxurious setting.
            </p>
          </div>
        </v-timeline-item>

        <v-timeline-item class="mb-4" dot-color="grey" size="small">
          <div data-aos="fade-left" data-aos-delay="350">
            <div class="text-h6">Day 6</div>
            <p class="font-semibold mt-4" style="font-size: 20px">
              Sunrise Walk and Photographic Safari
            </p>
            <p class="mt-2">
              Start the day with a morning walk to capture the magic of the
              sunrise, followed by a refined breakfast at 7 am. Engage in an
              afternoon photographic safari, exploring diverse birds, mammals,
              and reptiles, creating images that showcase the richness of the
              fauna. Gourmet lunch is followed by a visit to the tapir's hide.
              End the day with a night safari back to the lodge, where dinner
              awaits, and you settle in for the night in a luxurious
              environment.
            </p>
          </div>
        </v-timeline-item>

        <v-timeline-item class="mb-4" dot-color="grey" size="small">
          <div data-aos="fade-left" data-aos-delay="350">
            <div class="text-h6">Day 7</div>
            <p class="font-semibold mt-4" style="font-size: 20px">
              Bird Feeder Observation and Farewell
            </p>
            <p class="mt-2">
              On the final day, enjoy observing animals at the bird feeder after
              breakfast at 7 am. Subsequently, our guide accompanies you back to
              Cuiabá, concluding this exclusive premium photographic expedition.
            </p>
          </div>
        </v-timeline-item>
      </v-timeline>

      <!-- INCLUDES -->

      <div
        class="mt-10 flex flex-col leading-relaxed text-md font-normal italic"
        data-aos="fade-up"
      >
        <p class="font-semibold not-italic text-xl text-center">
          Included in the Premium Jaguar Expedition for Photographers:
        </p>
        <p class="mt-2">Accommodation in a luxury environment;</p>
        <p>VIP transfer services;</p>
        <p>All gourmet meals;</p>
        <p>Water;</p>
        <p>Beverages included;</p>
        <p>Naturalistic guide specialized in photography;</p>
        <p>
          As bonuses, we provide caps, pouches, T-shirts, and sunscreens
          throughout the experience, adding an extra touch of comfort
          and convenience.
        </p>
      </div>

      <!-- DIVIDER -->

      <div class="p-3 mx-auto">
        <JaguarDivider />
      </div>

      <!-- FOTOS -->
      <div class="mt-20 grid grid-cols-3 mx-auto gap-6">
        <div class="lg:w-[270px] md:w-[355px] shadow-2xl">
          <v-img
            class="flex justify-center items-center mx-auto"
            data-aos="fade-right"
            data-aos-delay="100"
            max-width="400"
            max-height="600"
            aspect-ratio=""
            cover
            src="../assets/img/6n.png"
          ></v-img>
        </div>
        <div class="lg:w-[270px] md:w-[355px] shadow-2xl">
          <v-img
            class="flex justify-center items-center mx-auto"
            data-aos="fade-left"
            data-aos-delay="140"
            max-width="400"
            max-height="600"
            aspect-ratio=""
            cover
            src="../assets/img/6n01.png"
          ></v-img>
        </div>
        <div class="lg:w-[270px] md:w-[355px] shadow-2xl">
          <v-img
            class="flex justify-center items-center mx-auto"
            data-aos="fade-up"
            data-aos-delay="180"
            max-width="400"
            max-height="600"
            aspect-ratio=""
            cover
            src="../assets/img/6n02.png"
          ></v-img>
        </div>
        <div class="lg:w-[270px] md:w-[355px] shadow-2xl">
          <v-img
            class="flex justify-center items-center mx-auto"
            data-aos="fade-right"
            data-aos-delay="220"
            max-width="400"
            max-height="600"
            aspect-ratio=""
            cover
            src="../assets/img/6n03.png"
          ></v-img>
        </div>
        <div class="lg:w-[270px] md:w-[355px] shadow-2xl">
          <v-img
            class="flex justify-center items-center mx-auto"
            data-aos="fade-left"
            data-aos-delay="260"
            max-width="400"
            max-height="600"
            aspect-ratio=""
            cover
            src="../assets/img/6n04.png"
          ></v-img>
        </div>
        <div class="lg:w-[270px] md:w-[355px] shadow-2xl">
          <v-img
            class="flex justify-center items-center mx-auto"
            data-aos="fade-left"
            data-aos-delay="300"
            max-width="400"
            max-height="300"
            aspect-ratio=""
            cover
            src="../assets/img/6n05.png"
          ></v-img>
        </div>
        <div class="lg:w-[270px] md:w-[355px] mx-auto shadow-2xl">
          <v-img
            class="flex justify-center items-center mx-auto"
            data-aos="fade-down"
            data-aos-delay="340"
            max-width="400"
            max-height="300"
            aspect-ratio=""
            cover
            src="../assets/img/6n06.png"
          ></v-img>
        </div>
        <div class="lg:w-[270px] md:w-[355px] mx-auto shadow-2xl">
          <v-img
            class="flex justify-center items-center mx-auto"
            data-aos="fade-down"
            data-aos-delay="380"
            max-width="400"
            max-height="300"
            aspect-ratio=""
            cover
            src="../assets/img/6n07.jpg"
          ></v-img>
        </div>
        <div class="lg:w-[270px] md:w-[355px] mx-auto shadow-2xl">
          <v-img
            class="flex justify-center items-center mx-auto"
            data-aos="fade-down"
            data-aos-delay="420"
            max-width="400"
            max-height="300"
            aspect-ratio=""
            cover
            src="../assets/img/6n08.jpg"
          ></v-img>
        </div>
      </div>
    </div>

    <!-- DIVIDER -->
    <div class="pt-56">
      <JaguarDivider />
    </div>

    <!-- FOOTER -->

    <JaguarFooter />
  </div>
</template>

<script>
/* eslint-disable */
import BackToTop from "../components/BackToTop.vue";
import { Icon } from "@iconify/vue";
import JaguarDivider from "../components/JaguarDivider.vue";
import JaguarMenu from "../components/JaguarMenu.vue";
import FooterMobile from "../components/JaguarFooterMobile.vue";
import JaguarFooter from "../components/JaguarFooter.vue";
import JaguarMenuDesktop from "../components/JaguarMenuDesktop.vue";
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});

export default {
  components: {
    BackToTop,
    Icon,
    JaguarDivider,
    JaguarMenu,
    FooterMobile,
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
