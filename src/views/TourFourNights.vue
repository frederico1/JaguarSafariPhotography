<template>
  <!-- eslint-disable -->
  <div>
    <!-- <JaguarNavigation></JaguarNavigation> -->

    <!-- MOBILE -->
    <div class="p-3">
      <!-- MENU -->

      <div>
        <JaguarMenu></JaguarMenu>
      </div>

      <div class="">
        <div class="">
          <button
            data-aos="fade-right"
            data-aos-delay="200"
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
            <h1 class="text-4xl text-center font-serif tracking-wide uppercase">
              Jaguar expeditions 4 nights / 5 days
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
              :items="['DAY 1', 'DAY 2', 'DAY 3', 'DAY 4', 'DAY 5']"
            >
              <template v-slot:item.1>
                <v-card title="Day 1:" flat class="leading-relaxed font-sans"
                  >First, on this Jaguar safari photography, we will pick you up
                  at the airport or hotel in Cuiabá and transfer to the Lodge.
                  Generally, the trip takes 3 hours. In fact, we’ll take you 100
                  kilometers on a paved road, plus 40 kilometers on the
                  Transpantaneira. Certainly, you will see birds, mammals and
                  reptiles. You will arrive at the lodge for lunch and then make
                  a boat ride. On the boat, we usually see hawks, kingfishers,
                  anhingas, and Giant otters. You may also see jaguars and
                  various other types of animals. Dinner will be at 07:00 pm at
                  the Lodge, then at 08:00 pm. We will go on a nightafari to
                  observe some of the nocturnal animals. Overnight.</v-card
                >
              </template>

              <template v-slot:item.2>
                <v-card title="Day 2:" flat class="leading-relaxed font-sans"
                  >This time you will make a morning walk in the forest to watch
                  the sunrise. Then breakfast, followed by hiking in the forest.
                  Thre, you may see some animals living in different habitats.
                  We usually see monkeys, Deers, Woodcreepers. However, if
                  you’re lucky. You may also see Trogons and Motmots. Lunch and
                  transfer to the lodge in Porto Jofre. The drive will be 110
                  kilometers along the Transpantaneira until the end of the
                  road. Dinner at 07:00 pm and Overnight.</v-card
                >
              </template>

              <template v-slot:item.3>
                <v-card title="Day 3:" flat class="leading-relaxed font-sans"
                  >Breakfast is at 06:00 am. Then, this is the beginning of your
                  jaguar safari itinerary. Once we’re ready, we’ll make a boat
                  drive in search of jaguars and giant otters along the Cuiabá
                  River in the Pantanal State Park Encontro das Águas. Lunch is
                  a picnic on the river at 12:00 pm followed by a short siesta.
                  Then, we will make the second part of the tour until 05:00 pm.
                  In total, it will be ten hours making this jaguar safari
                  itinerary. Dinner and overnight.
                </v-card>
              </template>
              <template v-slot:item.4>
                <v-card title="Day 4:" flat class="leading-relaxed font-sans"
                  >Breakfast, transfer back to the lodge on the Transpantaneira.
                  Lunch and horseback ride or another boat ride. Dinner at 7:00
                  pm followed by night safari. Generally, on a night safari, we
                  see foxes, Raccoons. If we are lucky, we may also, see Giant
                  anteaters, Tapirs, or even Ocelots. We might also, see birds
                  like, Owls, Night Hawks and Potoos. Overnight.
                </v-card>
              </template>
              <template v-slot:item.5>
                <v-card title="Day 5:" flat class="leading-relaxed font-sans">
                  Morning walk in the forest to watch the sunrise. Breakfast and
                  transfer to the airport or hotel in Cuiabá. This Jaguar safari
                  itinerary includes, accommodation, transfers, all meals,water
                  and a naturalist tour guide. No beverages.
                </v-card>
              </template>
            </v-stepper>
          </div>

          <div class="mt-10" data-aos="fade-up">
            <p class="leading-relaxed text-sm font-normal italic">
              *This Jaguar safari itinerary includes, accommodation, transfers,
              all meals, water and a naturalist tour guide. No beverages.
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
                src="../assets/img/4n.png"
              ></v-img>
            </div>
            <div>
              <v-img
                class="flex justify-center items-center mx-auto"
                data-aos="fade-left"
                data-aos-delay="200"
                max-width="350"
                max-height="300"
                aspect-ratio=""
                cover
                src="../assets/img/4n01.png"
              ></v-img>
            </div>
            <div>
              <v-img
                class="flex justify-center items-center mx-auto"
                data-aos="fade-up"
                data-aos-delay="300"
                max-width="350"
                max-height="300"
                aspect-ratio=""
                cover
                src="../assets/img/4n02.png"
              ></v-img>
            </div>
            <div>
              <v-img
                class="flex justify-center items-center mx-auto"
                data-aos="fade-right"
                data-aos-delay="400"
                max-width="350"
                max-height="300"
                aspect-ratio=""
                cover
                src="../assets/img/4n03.png"
              ></v-img>
            </div>
            <div>
              <v-img
                class="flex justify-center items-center mx-auto"
                data-aos="fade-left"
                data-aos-delay="420"
                max-width="350"
                max-height="300"
                aspect-ratio=""
                cover
                src="../assets/img/4n04.png"
              ></v-img>
            </div>
            <div>
              <v-img
                class="flex justify-center items-center mx-auto"
                data-aos="fade-up"
                data-aos-delay="440"
                max-width="350"
                max-height="300"
                aspect-ratio=""
                cover
                src="../assets/img/4n05.png"
              ></v-img>
            </div>
            <div>
              <v-img
                class="flex justify-center items-center mx-auto"
                data-aos="fade-down"
                data-aos-delay="460"
                max-width="350"
                max-height="300"
                aspect-ratio=""
                cover
                src="../assets/img/4n06.png"
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
  </div>
</template>

<script>
/* eslint-disable */
import BackToTop from "../components/BackToTop.vue";
import { Icon } from "@iconify/vue";
import JaguarDivider from "../components/JaguarDivider.vue";
import JaguarMenu from "../components/JaguarMenu.vue";
import FooterMobile from "../components/JaguarFooterMobile.vue";
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
