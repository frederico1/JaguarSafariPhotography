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
          <button data-aos="fade-right" data-aos-delay="200" class="bg-#000" id="backToTopBtn" @click="scrollToTop"
            v-show="showBackToTopButton">
            <Icon icon="tdesign:arrow-up" color="#000" width="40px" />
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
            <v-stepper elevation="16" mobile color="#000" class="" prev-text="Preview" next-text="Next" 
              :items="['DAY 1', 'DAY 2', 'DAY 3', 'DAY 4', 'DAY 5']">
              <template v-slot:item.1>
                <v-card title="Day 1:" flat class="leading-relaxed font-sans">First Day of Capture. Upon your arrival in
                  Cuiabá, a city of wild contrasts, your exclusive photographic journey begins with a reception at the
                  airport or the exquisite chosen hotel. Our high-end transportation will take you on a three-hour
                  journey, covering 100 kilometers of paved roads and an additional 40 kilometers on the Transpantaneira,
                  a route that will become the trail for your most extraordinary images. This expedition is more than a
                  mere transfer; it is an opportunity to anticipate the wonders that lie ahead. The diversity of birds,
                  mammals, and reptiles you will witness along the way serves as a prelude to the visual splendor awaiting
                  your lenses. Upon reaching the lodging, lunch will be served before embarking on a tranquil boat ride,
                  where the majesty of jaguars and other species eagerly awaits your lens. Dinner at 7:00 PM at the lodge
                  will be followed by a meticulously planned night safari for capturing stunning nocturnal images. The
                  comfort and luxury of the accommodation ensure you are fully recharged for the unfolding photographic
                  journey.
                </v-card>
              </template>

              <template v-slot:item.2>
                <v-card title="Day 2:" flat class="leading-relaxed font-sans">Second Day of Refined Photography. Dawn
                  reveals unique opportunities for photography in a morning forest walk, capturing the dance of light at
                  sunrise. Breakfast, a symphony of refined flavors, anticipates a sophisticated forest walk, an
                  invitation to immortalize wildlife in its diverse habitats. Monkeys, deer, and woodcreepers are some of
                  the protagonists that will parade before your camera, while trogons and motmots may be the fortunate
                  highlights. The skillfully prepared lunch precedes the transfer to the lodge in Porto Jofre, a scenic
                  110-kilometer journey along the Transpantaneira. At 7:00 PM, a high-level dinner concludes the second
                  day, preparing you for the exceptional photographic challenges that await.
                </v-card>
              </template>

              <template v-slot:item.3>
                <v-card title="Day 3:" flat class="leading-relaxed font-sans">Premium Photographic Navigation - Third Day
                  of Immortalization. The morning breakfast, served at 6:00 AM, marks the beginning of the true immersion
                  in your jaguar safari photography expeditions. On a nautical cruise along the Cuiabá River in the
                  renowned Pantanal State Park Encontro das Águas, you will have unparalleled opportunities to photograph
                  jaguars and giant otters. Lunch, a riverside picnic at noon, is followed by a brief rest interval before
                  embarking on the second part of the tour until 5:00 PM. Ten hours dedicated to visual creation in a
                  meticulously planned jaguar safari itinerary. Dinner concludes this extraordinary day, providing a
                  tranquil rest in your high-quality accommodation.
                </v-card>
              </template>
              <template v-slot:item.4>
                <v-card title="Day 4:" flat class="leading-relaxed font-sans">Fourth Day of Focus and Precision. After a
                  refined breakfast, the transfer back to the lodge on the Transpantaneira is followed by a lunch prepared
                  for the most discerning palates. The afternoon offers choices between an exclusive horseback ride or
                  another boat exploration, both promising unique opportunities for exceptional photos. At 7:00 PM, a
                  gourmet dinner inaugurates a specialized night safari, where photographic skill is put to the test.
                  Foxes, raccoons, and, with luck, giant anteaters, tapirs, or even ocelots may cross your path, with
                  nighttime bird sightings like owls, night hawks, and potoos complementing the experience. Overnight in
                  luxurious accommodations provides a refreshing break.
                </v-card>
              </template>
              <template v-slot:item.5>
                <v-card title="Day 5:" flat class="leading-relaxed font-sans">
                  Fifth Day of Photographic Farewell. A final morning walk in the forest at sunrise presents ultimate
                  opportunities to capture the magical morning light. Breakfast, a culinary masterpiece, precedes the
                  luxury transfer to the airport or hotel in Cuiabá, concluding this exclusive chapter of photographic
                  exploration.

                </v-card>
              </template>
            </v-stepper>
          </div>

          <div class="mt-10 flex flex-col leading-relaxed text-sm font-normal italic" data-aos="fade-up">
            <h3 class="font-semibold not-italic text-lg text-center">
              Included in the Premium Jaguar Expedition for Photographers:
            </h3>
            <p class="mt-2">Accommodation in a luxury environment;</p>
            <p> VIP transfer services;</p>
            <p>All gourmet meals;</p>
            <p> Water;</p>
            <p> Beverages included;</p>
            <p> Naturalistic guide specialized in photography;</p>
            <p> As bonuses, we provide caps, pouches, T-shirts, and sunscreens throughout the experience, adding an extra
              touch of comfort and convenience.</p>

          </div>

          <!--  -->

          <JaguarDivider />

          <!-- FOTOS  -->
          <div class="mt-10 flex flex-col gap-4">
            <div class="">
              <v-img class="flex justify-center items-center mx-auto" data-aos="fade-right" data-aos-delay="120"
                max-width="350" max-height="300" aspect-ratio="" cover src="../assets/img/4n.png"></v-img>
            </div>
            <div>
              <v-img class="flex justify-center items-center mx-auto" data-aos="fade-left" data-aos-delay="140"
                max-width="350" max-height="300" aspect-ratio="" cover src="../assets/img/4n01.png"></v-img>
            </div>
            <div>
              <v-img class="flex justify-center items-center mx-auto" data-aos="fade-up" data-aos-delay="160"
                max-width="350" max-height="300" aspect-ratio="" cover src="../assets/img/4n02.png"></v-img>
            </div>
            <div>
              <v-img class="flex justify-center items-center mx-auto" data-aos="fade-right" data-aos-delay="180"
                max-width="350" max-height="300" aspect-ratio="" cover src="../assets/img/4n03.png"></v-img>
            </div>
            <div>
              <v-img class="flex justify-center items-center mx-auto" data-aos="fade-left" data-aos-delay="200"
                max-width="350" max-height="300" aspect-ratio="" cover src="../assets/img/4n04.png"></v-img>
            </div>
            <div>
              <v-img class="flex justify-center items-center mx-auto" data-aos="fade-up" data-aos-delay="220"
                max-width="350" max-height="300" aspect-ratio="" cover src="../assets/img/4n05.png"></v-img>
            </div>
            <div>
              <v-img class="flex justify-center items-center mx-auto" data-aos="fade-down" data-aos-delay="240"
                max-width="350" max-height="300" aspect-ratio="" cover src="../assets/img/4n06.png"></v-img>
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
    <div class="hidden md:block lg:block">
      <div class="mt-28" data-aos="fade-right" data-aos-delay="200">
        <h1 class="text-4xl text-center font-serif tracking-wide uppercase">
          Jaguar Expeditions in Porto Jofre
        </h1>
      </div>

      <!--  -->

      <div class="mt-16 lg:w-3/5 md:w-5/6 flex mx-auto" data-aos="fade-right" data-aos-delay="200">
        <p class="text-center leading-relaxed font-sans text-lg">
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
              <p>
                First Day of Capture. Upon your arrival in
                Cuiabá, a city of wild contrasts, your exclusive photographic journey begins with a reception at the
                airport or the exquisite chosen hotel. Our high-end transportation will take you on a three-hour
                journey, covering 100 kilometers of paved roads and an additional 40 kilometers on the Transpantaneira,
                a route that will become the trail for your most extraordinary images. This expedition is more than a
                mere transfer; it is an opportunity to anticipate the wonders that lie ahead. The diversity of birds,
                mammals, and reptiles you will witness along the way serves as a prelude to the visual splendor awaiting
                your lenses. Upon reaching the lodging, lunch will be served before embarking on a tranquil boat ride,
                where the majesty of jaguars and other species eagerly awaits your lens. Dinner at 7:00 PM at the lodge
                will be followed by a meticulously planned night safari for capturing stunning nocturnal images. The
                comfort and luxury of the accommodation ensure you are fully recharged for the unfolding photographic
                journey.
              </p>
            </div>
          </v-timeline-item>

          <v-timeline-item class="mb-4" dot-color="grey" size="small">
            <template v-slot:opposite> </template>
            <div data-aos="fade-right" data-aos-delay="100">
              <div class="text-h6">Day 2</div>
              <p>
                Second Day of Refined Photography. Dawn
                reveals unique opportunities for photography in a morning forest walk, capturing the dance of light at
                sunrise. Breakfast, a symphony of refined flavors, anticipates a sophisticated forest walk, an
                invitation to immortalize wildlife in its diverse habitats. Monkeys, deer, and woodcreepers are some of
                the protagonists that will parade before your camera, while trogons and motmots may be the fortunate
                highlights. The skillfully prepared lunch precedes the transfer to the lodge in Porto Jofre, a scenic
                110-kilometer journey along the Transpantaneira. At 7:00 PM, a high-level dinner concludes the second
                day, preparing you for the exceptional photographic challenges that await.
              </p>
            </div>
          </v-timeline-item>

          <v-timeline-item class="mb-4" dot-color="grey" size="small">
            <div data-aos="fade-left" data-aos-delay="250">
              <div class="text-h6">Day 3</div>
              <p>
                Premium Photographic Navigation - Third Day
                of Immortalization. The morning breakfast, served at 6:00 AM, marks the beginning of the true immersion
                in your jaguar safari photography expeditions. On a nautical cruise along the Cuiabá River in the
                renowned Pantanal State Park Encontro das Águas, you will have unparalleled opportunities to photograph
                jaguars and giant otters. Lunch, a riverside picnic at noon, is followed by a brief rest interval before
                embarking on the second part of the tour until 5:00 PM. Ten hours dedicated to visual creation in a
                meticulously planned jaguar safari itinerary. Dinner concludes this extraordinary day, providing a
                tranquil rest in your high-quality accommodation.
              </p>
            </div>
          </v-timeline-item>
          <v-timeline-item class="mb-4" dot-color="grey" size="small">
            <div data-aos="fade-right" data-aos-delay="300">
              <div class="text-h6">Day 4</div>
              <p>
                Fourth Day of Focus and Precision. After a
                refined breakfast, the transfer back to the lodge on the Transpantaneira is followed by a lunch prepared
                for the most discerning palates. The afternoon offers choices between an exclusive horseback ride or
                another boat exploration, both promising unique opportunities for exceptional photos. At 7:00 PM, a
                gourmet dinner inaugurates a specialized night safari, where photographic skill is put to the test.
                Foxes, raccoons, and, with luck, giant anteaters, tapirs, or even ocelots may cross your path, with
                nighttime bird sightings like owls, night hawks, and potoos complementing the experience. Overnight in
                luxurious accommodations provides a refreshing break.
              </p>
            </div>
          </v-timeline-item>
          <v-timeline-item class="mb-4" dot-color="grey" size="small">
            <div data-aos="fade-left" data-aos-delay="350">
              <div class="text-h6">Day 5</div>
              <p>
                Fifth Day of Photographic Farewell. A final morning walk in the forest at sunrise presents ultimate
                opportunities to capture the magical morning light. Breakfast, a culinary masterpiece, precedes the luxury
                transfer to the airport or hotel in Cuiabá, concluding this exclusive chapter of photographic exploration.


              </p>
            </div>
          </v-timeline-item>
        </v-timeline>

        <!-- INCLUDES -->

        <div class="mt-10 flex flex-col leading-relaxed text-md font-normal italic" data-aos="fade-up">
          <h3 class="font-semibold not-italic text-xl text-center">
            Included in the Premium Jaguar Expedition for Photographers:
          </h3>
          <p class="mt-2">Accommodation in a luxury environment;</p>
          <p> VIP transfer services;</p>
          <p>All gourmet meals;</p>
          <p> Water;</p>
          <p> Beverages included;</p>
          <p> Naturalistic guide specialized in photography;</p>
          <p> As bonuses, we provide caps, pouches, T-shirts, and sunscreens throughout the experience, adding an extra
            touch of comfort and convenience.</p>

        </div>



        <!-- DIVIDER -->

        <div class="p-3 mx-auto">
          <JaguarDivider />
        </div>

        <!-- FOTOS -->
        <div class="mt-20 grid grid-cols-3 mx-auto gap-4 shadow-xl">
          <div class="lg:w-[400px] md:w-[355px]">
            <v-img class="flex justify-center items-center mx-auto" data-aos="fade-right" data-aos-delay="100"
              max-width="400" max-height="600" aspect-ratio="" cover src="../assets/img/4n.png"></v-img>
          </div>
          <div class="lg:w-[400px] md:w-[355px]">
            <v-img class="flex justify-center items-center mx-auto" data-aos="fade-left" data-aos-delay="140"
              max-width="400" max-height="600" aspect-ratio="" cover src="../assets/img/4n01.png"></v-img>
          </div>
          <div class="lg:w-[400px] md:w-[355px]">
            <v-img class="flex justify-center items-center mx-auto" data-aos="fade-up" data-aos-delay="180"
              max-width="400" max-height="600" aspect-ratio="" cover src="../assets/img/4n02.png"></v-img>
          </div>
          <div class="lg:w-[400px] md:w-[355px]">
            <v-img class="flex justify-center items-center mx-auto" data-aos="fade-right" data-aos-delay="220"
              max-width="400" max-height="600" aspect-ratio="" cover src="../assets/img/4n03.png"></v-img>
          </div>
          <div class="lg:w-[400px] md:w-[355px]">
            <v-img class="flex justify-center items-center mx-auto" data-aos="fade-left" data-aos-delay="260"
              max-width="400" max-height="600" aspect-ratio="" cover src="../assets/img/4n04.png"></v-img>
          </div>
          <div class="lg:w-[400px] md:w-[355px]">
            <v-img class="flex justify-center items-center mx-auto" data-aos="fade-left" data-aos-delay="300"
              max-width="400" max-height="300" aspect-ratio="" cover src="../assets/img/4n05.png"></v-img>
          </div>
          <div class="lg:w-[400px] md:w-[355px] mx-auto mt-6">
            <v-img class="flex justify-center items-center mx-auto" data-aos="fade-down" data-aos-delay="340"
              max-width="400" max-height="300" aspect-ratio="" cover src="../assets/img/4n06.png"></v-img>
          </div>
          <div class="lg:w-[400px] md:w-[355px] mx-auto mt-6">
            <v-img class="flex justify-center items-center mx-auto" data-aos="fade-down" data-aos-delay="380"
              max-width="400" max-height="300" aspect-ratio="" cover src="../assets/img/4n07.jpg"></v-img>
          </div>
          <div class="lg:w-[400px] md:w-[355px] mx-auto mt-6">
            <v-img class="flex justify-center items-center mx-auto" data-aos="fade-down" data-aos-delay="420"
              max-width="400" max-height="300" aspect-ratio="" cover src="../assets/img/4n08.jpg"></v-img>
          </div>
        </div>


      </div>
      

        <!-- DIVIDER -->
        <div class="pt-56">
        <JaguarDivider/>
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
