<template>
  <!-- eslint-disable -->
  <div>
    <!-- <JaguarNavigation></JaguarNavigation> -->

    <!-- MOBILE -->
    <div class="md:hidden p-3">
      <!-- MENU -->

      <div>
        <JaguarMenu></JaguarMenu>
      </div>

      <div class="">
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

        <div class="mt-20" data-aos="fade-right" data-aos-delay="200">
          <h1 class="text-4xl text-center font-serif tracking-wide uppercase">
            Jaguar Expeditions in Porto Jofre
          </h1>
        </div>

        <div class="mt-10" data-aos="fade-right" data-aos-delay="200">
          <p class="text-center leading-relaxed font-sans">
            First, our company offers Pantanal jaguar expeditions and
            photography starting in Cuiabá. However, we can start your Pantanal
            jaguar safari itinerary immediately upon your arrival. In fact, you
            have the possibility to stay overnight in a hotel in the city. In
            this case, our Tour Agency will pick you up the next day at 8:00 am
            to take you to the lodge. Also, we’ll take you a hundred kilometers
            to a small town called Poconé. Therefore, this city is at the end of
            civilization, it is the beginning of the Estrada Parque
            Transpantaneira. Subsequently, the path will be one hundred and
            fifty kilometers on a dirt road. This time, to the lodge in Porto
            Jofre. Certainly, the trip is interesting, you will see many wild
            animals.
          </p>
        </div>

        <!--  -->

        <JaguarDivider />

        <div class="mt-10" data-aos="fade-up" data-aos-delay="250">
          <div>
            <h2 class="text-4xl text-center font-serif tracking-wide uppercase">
              Jaguar expeditions 4 nights / 5 days
            </h2>
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
              :items="['DAY 1', 'DAY 2', 'DAY 3', 'DAY 4', 'DAY 5']"
            >
              <template v-slot:item.1>
                <v-card title="Day 1:" flat class="leading-relaxed font-sans"
                  >First Day of Capture. Upon your arrival in Cuiabá, a city of
                  wild contrasts, your exclusive photographic journey begins
                  with a reception at the airport or the exquisite chosen hotel.
                  Our high-end transportation will take you on a three-hour
                  journey, covering 100 kilometers of paved roads and an
                  additional 40 kilometers on the Transpantaneira, a route that
                  will become the trail for your most extraordinary images. This
                  expedition is more than a mere transfer; it is an opportunity
                  to anticipate the wonders that lie ahead. The diversity of
                  birds, mammals, and reptiles you will witness along the way
                  serves as a prelude to the visual splendor awaiting your
                  lenses. Upon reaching the lodging, lunch will be served before
                  embarking on a tranquil boat ride, where the majesty of
                  jaguars and other species eagerly awaits your lens. Dinner at
                  7:00 PM at the lodge will be followed by a meticulously
                  planned night safari for capturing stunning nocturnal images.
                  The comfort and luxury of the accommodation ensure you are
                  fully recharged for the unfolding photographic journey.
                </v-card>
              </template>

              <template v-slot:item.2>
                <v-card title="Day 2:" flat class="leading-relaxed font-sans"
                  >Second Day of Refined Photography. Dawn reveals unique
                  opportunities for photography in a morning forest walk,
                  capturing the dance of light at sunrise. Breakfast, a symphony
                  of refined flavors, anticipates a sophisticated forest walk,
                  an invitation to immortalize wildlife in its diverse habitats.
                  Monkeys, deer, and woodcreepers are some of the protagonists
                  that will parade before your camera, while trogons and motmots
                  may be the fortunate highlights. The skillfully prepared lunch
                  precedes the transfer to the lodge in Porto Jofre, a scenic
                  110-kilometer journey along the Transpantaneira. At 7:00 PM, a
                  high-level dinner concludes the second day, preparing you for
                  the exceptional photographic challenges that await.
                </v-card>
              </template>

              <template v-slot:item.3>
                <v-card title="Day 3:" flat class="leading-relaxed font-sans"
                  >Premium Photographic Navigation - Third Day of
                  Immortalization. The morning breakfast, served at 6:00 AM,
                  marks the beginning of the true immersion in your jaguar
                  safari photography expeditions. On a nautical cruise along the
                  Cuiabá River in the renowned Pantanal State Park Encontro das
                  Águas, you will have unparalleled opportunities to photograph
                  jaguars and giant otters. Lunch, a riverside picnic at noon,
                  is followed by a brief rest interval before embarking on the
                  second part of the tour until 5:00 PM. Ten hours dedicated to
                  visual creation in a meticulously planned jaguar safari
                  itinerary. Dinner concludes this extraordinary day, providing
                  a tranquil rest in your high-quality accommodation.
                </v-card>
              </template>
              <template v-slot:item.4>
                <v-card title="Day 4:" flat class="leading-relaxed font-sans"
                  >Fourth Day of Focus and Precision. After a refined breakfast,
                  the transfer back to the lodge on the Transpantaneira is
                  followed by a lunch prepared for the most discerning palates.
                  The afternoon offers choices between an exclusive horseback
                  ride or another boat exploration, both promising unique
                  opportunities for exceptional photos. At 7:00 PM, a gourmet
                  dinner inaugurates a specialized night safari, where
                  photographic skill is put to the test. Foxes, raccoons, and,
                  with luck, giant anteaters, tapirs, or even ocelots may cross
                  your path, with nighttime bird sightings like owls, night
                  hawks, and potoos complementing the experience. Overnight in
                  luxurious accommodations provides a refreshing break.
                </v-card>
              </template>
              <template v-slot:item.5>
                <v-card title="Day 5:" flat class="leading-relaxed font-sans">
                  Fifth Day of Photographic Farewell. A final morning walk in
                  the forest at sunrise presents ultimate opportunities to
                  capture the magical morning light. Breakfast, a culinary
                  masterpiece, precedes the luxury transfer to the airport or
                  hotel in Cuiabá, concluding this exclusive chapter of
                  photographic exploration.
                </v-card>
              </template>
            </v-stepper>
          </div>

          <div
            class="mt-10 flex flex-col leading-relaxed text-sm font-normal italic"
            data-aos="fade-up"
          >
            <h3 class="font-semibold not-italic text-lg text-center">
              Included in the Premium Jaguar Expedition for Photographers:
            </h3>
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

          <div class="mt-10 flex flex-col gap-4 mx-auto">
            <div class="">
              <v-img
                class="flex justify-center items-center"
                data-aos="fade-right"
                data-aos-delay="120"
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
                class="flex justify-center items-center"
                data-aos="fade-left"
                data-aos-delay="140"
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
                class="flex justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="160"
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
                class="flex justify-center items-center"
                data-aos="fade-right"
                data-aos-delay="180"
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
                class="flex justify-center items-center"
                data-aos="fade-left"
                data-aos-delay="200"
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
                class="flex justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="220"
                max-width="360"
                max-height="300"
                aspect-ratio=""
                cover
                src="../assets/img/avif/4n/4n05.avif"
              ></v-img>
            </div>
            <div>
              <v-img
                class="flex justify-center items-center"
                data-aos="fade-down"
                data-aos-delay="240"
                max-width="360"
                max-height="300"
                aspect-ratio=""
                cover
                src="../assets/img/avif/4n/4n06.avif"
                alt="Alligator"
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
    <div class="p-3">
      <JaguarMenuDesktop></JaguarMenuDesktop>
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
    <div class="hidden md:block lg:block p-3">
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
        <p class="text-center leading-relaxed font-sans text-xl">
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

      <!-- DIVIDER -->
      <div class="mt-16 lg:w-3/5 md:w-4/4 mx-auto">
        <JaguarDivider />
      </div>

      <!-- TIMELINE JAGUAR TOUR -->

      <div class="mt-10 md:p-4" data-aos="fade-up" data-aos-delay="250">
        <div>
          <h2 class="text-4xl text-center font-serif tracking-wide uppercase">
            Jaguar expeditions 4 nights / 5 days
          </h2>
        </div>
      </div>

      <div class="mt-10 md:p-4 lg:w-2/4 md:w-4/4 mx-auto leading-relaxed">
        <v-timeline align="start">
          <v-timeline-item class="mb-4" dot-color="grey" size="small">
            <div>
              <div class="text-h6">Day 1</div>
              <p class="">
                First Day of Capture. Upon your arrival in Cuiabá, a city of
                wild contrasts, your exclusive photographic journey begins with
                a reception at the airport or the exquisite chosen hotel. Our
                high-end transportation will take you on a three-hour journey,
                covering 100 kilometers of paved roads and an additional 40
                kilometers on the Transpantaneira, a route that will become the
                trail for your most extraordinary images. This expedition is
                more than a mere transfer; it is an opportunity to anticipate
                the wonders that lie ahead. The diversity of birds, mammals, and
                reptiles you will witness along the way serves as a prelude to
                the visual splendor awaiting your lenses. Upon reaching the
                lodging, lunch will be served before embarking on a tranquil
                boat ride, where the majesty of jaguars and other species
                eagerly awaits your lens. Dinner at 7:00 PM at the lodge will be
                followed by a meticulously planned night safari for capturing
                stunning nocturnal images. The comfort and luxury of the
                accommodation ensure you are fully recharged for the unfolding
                photographic journey.
              </p>
            </div>
          </v-timeline-item>

          <v-timeline-item class="mb-4" dot-color="grey" size="small">
            <template v-slot:opposite> </template>
            <div data-aos="fade-right" data-aos-delay="100">
              <div class="text-h6">Day 2</div>
              <p>
                Second Day of Refined Photography. Dawn reveals unique
                opportunities for photography in a morning forest walk,
                capturing the dance of light at sunrise. Breakfast, a symphony
                of refined flavors, anticipates a sophisticated forest walk, an
                invitation to immortalize wildlife in its diverse habitats.
                Monkeys, deer, and woodcreepers are some of the protagonists
                that will parade before your camera, while trogons and motmots
                may be the fortunate highlights. The skillfully prepared lunch
                precedes the transfer to the lodge in Porto Jofre, a scenic
                110-kilometer journey along the Transpantaneira. At 7:00 PM, a
                high-level dinner concludes the second day, preparing you for
                the exceptional photographic challenges that await.
              </p>
            </div>
          </v-timeline-item>

          <v-timeline-item class="mb-4" dot-color="grey" size="small">
            <div data-aos="fade-left" data-aos-delay="250">
              <div class="text-h6">Day 3</div>
              <p>
                Premium Photographic Navigation - Third Day of Immortalization.
                The morning breakfast, served at 6:00 AM, marks the beginning of
                the true immersion in your jaguar safari photography
                expeditions. On a nautical cruise along the Cuiabá River in the
                renowned Pantanal State Park Encontro das Águas, you will have
                unparalleled opportunities to photograph jaguars and giant
                otters. Lunch, a riverside picnic at noon, is followed by a
                brief rest interval before embarking on the second part of the
                tour until 5:00 PM. Ten hours dedicated to visual creation in a
                meticulously planned jaguar safari itinerary. Dinner concludes
                this extraordinary day, providing a tranquil rest in your
                high-quality accommodation.
              </p>
            </div>
          </v-timeline-item>
          <v-timeline-item class="mb-4" dot-color="grey" size="small">
            <div data-aos="fade-right" data-aos-delay="300">
              <div class="text-h6">Day 4</div>
              <p>
                Fourth Day of Focus and Precision. After a refined breakfast,
                the transfer back to the lodge on the Transpantaneira is
                followed by a lunch prepared for the most discerning palates.
                The afternoon offers choices between an exclusive horseback ride
                or another boat exploration, both promising unique opportunities
                for exceptional photos. At 7:00 PM, a gourmet dinner inaugurates
                a specialized night safari, where photographic skill is put to
                the test. Foxes, raccoons, and, with luck, giant anteaters,
                tapirs, or even ocelots may cross your path, with nighttime bird
                sightings like owls, night hawks, and potoos complementing the
                experience. Overnight in luxurious accommodations provides a
                refreshing break.
              </p>
            </div>
          </v-timeline-item>
          <v-timeline-item class="mb-4" dot-color="grey" size="small">
            <div data-aos="fade-left" data-aos-delay="350">
              <div class="text-h6">Day 5</div>
              <p>
                Fifth Day of Photographic Farewell. A final morning walk in the
                forest at sunrise presents ultimate opportunities to capture the
                magical morning light. Breakfast, a culinary masterpiece,
                precedes the luxury transfer to the airport or hotel in Cuiabá,
                concluding this exclusive chapter of photographic exploration.
              </p>
            </div>
          </v-timeline-item>
        </v-timeline>

        <!-- INCLUDES -->

        <div
          class="mt-10 flex flex-col leading-relaxed text-md font-normal italic"
          data-aos="fade-up"
        >
          <h3 class="font-semibold not-italic text-xl text-center">
            Included in the Premium Jaguar Expedition for Photographers:
          </h3>
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
      </div>
      <!-- FOTOS DESKTOP -->

      <div>
      <a href="#" @click.prevent="show" class="w-full">
          <img href="../../src/assets/img/avif/4n/4n.avif" class="w-64" :src="thumbnail">
      </a>
      <div class="lightbox fixed pin z-50 flex justify-center items-center" v-if="visible" @click="hide">
          <div class="fixed pin-r pin-t text-white cursor-pointer text-4xl p-1 mr-2" @click.stop="hide">&times;</div>
          <div class="flex">
              <div class="cursor-pointer self-center px-8"
                   @click.stop="prev"
                   :class="{'invisible': ! hasPrev()}">
                  <svg class="pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
                      <path d="M0-.5h24v24H0z" fill="none"/>
                  </svg>
              </div>
              <div class="lightbox-image" @click.stop="">
                  <img :src="images[index]">
              </div>
              <div class="cursor-pointer self-center px-8"
                   @click.stop="next"
                   :class="{'invisible': ! hasNext()}">
                  <svg class="pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                      <path d="M0-.25h24v24H0z" fill="none"/>
                  </svg>
              </div>
          </div>
      </div>
  </div>
      <div
        class="lg:w-4/5 mt-20 lg:grid lg:grid-cols-3 lg:mx-auto lg:place-items-center gap-5 md:grid md:grid-cols-2"
      >
        <div class="lg:w-[400px] md:w-[355px]">
          <v-img
            class="shadow-lg"
            data-aos="fade-right"
            data-aos-delay="100"
            max-width="400"
            max-height="600"
            aspect-ratio=""
            cover
            src="../assets/img/avif/4n/4n.avif"
            alt="Jaguar"
          ></v-img>
        </div>
        <div class="lg:w-[400px] md:w-[355px]">
          <v-img
            class="shadow-lg"
            data-aos="fade-left"
            data-aos-delay="100"
            max-width="400"
            max-height="600"
            aspect-ratio=""
            cover
            src="../assets/img/avif/4n/4n01.avif"
            alt="Jaguar"
          ></v-img>
        </div>
        <div class="lg:w-[400px] md:w-[355px]">
          <v-img
            class="shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
            max-width="400"
            max-height="600"
            aspect-ratio=""
            cover
            src="../assets/img/avif/4n/4n02.avif"
            alt="Jaguar"
          ></v-img>
        </div>
        <div class="lg:w-[400px] md:w-[355px]">
          <v-img
            class="shadow-lg"
            data-aos="fade-right"
            data-aos-delay="100"
            max-width="400"
            max-height="600"
            aspect-ratio=""
            cover
            src="../assets/img/avif/4n/4n03.avif"
            alt="Snake"
          ></v-img>
        </div>
        <div class="lg:w-[400px] md:w-[355px]">
          <v-img
            class="shadow-lg"
            data-aos="fade-left"
            data-aos-delay="100"
            max-width="400"
            max-height="600"
            aspect-ratio=""
            cover
            src="../assets/img/avif/4n/4n04.avif"
          ></v-img>
        </div>
        <div class="lg:w-[400px] md:w-[355px]">
          <v-img
            class="shadow-lg"
            data-aos="fade-left"
            data-aos-delay="100"
            max-width="400"
            max-height="300"
            aspect-ratio=""
            cover
            src="../assets/img/avif/4n/4n05.avif"
          ></v-img>
        </div>
        <div class="lg:w-[400px] md:w-[355px]">
          <v-img
            class="shadow-lg"
            data-aos="fade-down"
            data-aos-delay="100"
            max-width="400"
            max-height="300"
            aspect-ratio=""
            cover
            src="../assets/img/avif/4n/4n06.avif"
            alt="Alligator"
          ></v-img>
        </div>
        <div class="lg:w-[400px] md:w-[355px]">
          <v-img
            class="shadow-lg"
            data-aos="fade-down"
            data-aos-delay="100"
            max-width="400"
            max-height="300"
            aspect-ratio=""
            cover
            src="../assets/img/avif/4n/4n07.avif"
            alt="Monkey"
          ></v-img>
        </div>
        <div class="lg:w-[400px] md:w-[355px] lg:block hidden">
          <v-img
            class="shadow-lg"
            data-aos="fade-down"
            data-aos-delay="100"
            max-width="400"
            max-height="300"
            aspect-ratio=""
            cover
            src="../assets/img/avif/4n/4n08.avif"
            alt=""
          ></v-img>
        </div>
      </div>

      <!-- DIVIDER -->
      <div class="pt-56">
        <JaguarDivider />
      </div>

      <JaguarFooter></JaguarFooter>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import BackToTop from "../components/BackToTop.vue";
import { Icon } from "@iconify/vue";
import JaguarDivider from "../components/JaguarDivider.vue";
import JaguarMenu from "../components/JaguarMenu.vue";
import FooterMobile from "../components/JaguarFooterMobile.vue";
import JaguarMenuDesktop from "../components/JaguarMenuDesktop.vue";
import JaguarFooter from "../components/JaguarFooter.vue";
import { onMounted } from "vue";
import AOS from "aos";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

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
    JaguarMenuDesktop,
    JaguarFooter,
    Swiper,
    SwiperSlide,
  },

  props: {
        thumbnail: {
            type: String,
            required: true,
        },
        images: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            visible: false,
            index: 0,
        };
    },
    methods: {
        show() {
            this.visible = true;
        },
        hide() {
            this.visible = false;
            this.index = 0;
        },
        hasNext() {
            return this.index + 1 < this.images.length;
        },
        hasPrev() {
            return this.index - 1 >= 0;
        },
        prev() {
            if (this.hasPrev()) {
                this.index -= 1;
            }
        },
        next() {
            if (this.hasNext()) {
                this.index += 1;
            }
        },
        onKeydown(e) {
            if (this.visible) {
                switch (e.key) {
                    case 'ArrowRight':
                        this.next();
                        break;
                    case 'ArrowLeft':
                        this.prev();
                        break;
                    case 'ArrowDown':
                    case 'ArrowUp':
                    case ' ':
                        e.preventDefault();
                        break;
                    case 'Escape':
                        this.hide();
                        break;
                }
            }
        },
    },
    mounted() {
        window.addEventListener('keydown', this.onKeydown)
    },
    destroyed() {
        window.removeEventListener('keydown', this.onKeydown)
    },
  setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  data() {
    return {
      showBackToTopButton: false,
      cards: [{ img: "../../../JaguarSafariPhotography/src/assets/img/4n.png", grid: "card-2-1" }],
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


.lightbox {
    background: rgba(0, 0, 0, 0.8);
}
.lightbox-image img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: calc(100vh - 90px);
}

</style>
