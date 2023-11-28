<template>
  <!-- eslint-disable -->

  <!-- MOBILE -->
  <div class="p-3">
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
        <p class="text-justify indent-8 leading-relaxed text-lg">
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

      <div
        class="mt-10"
        data-aos="fade-up"
        data-aos-delay="250"
        data-aos-anchor-placement="center-center"
      >
        <div>
          <h1 class="text-4xl text-center font-serif tracking-wide uppercase">
            Jaguar expeditions 7 nights / 8 days
          </h1>
        </div>
      </div>

      <!-- TOUR ITINERARY DAYS  -->

      <div class="mt-10" data-aos="fade-up" data-aos-delay="350">
        <div class="w-full">
          <v-stepper
            style="font-weight: 400"
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
              'DAY 8',
            ]"
          >
            <template v-slot:item.1>
              <v-card title="Day 1:" flat class="leading-relaxed"
                >On the first day of our jaguar expeditions and photography, our
                guide will pick you up at the airport or your hotel in Cuiabá.
                After that, He will take you to the lodge in the Pantanal.
                Meanwhile, on the Transpantaneira park road, you will see
                mammals and reptiles and birds of many kinds. Afterwards, you
                will arrive at the lodge for lunch. After that, you will make a
                boat ride on the river. Generally, you may see Hawks,
                Kingfishers and Giant Otters, and if you are lucky, you may even
                see jaguars on the river banks of the Rio Pixaim. Dinner is at
                07:00 pm, followed by night safari. Overnight.</v-card
              >
            </template>

            <template v-slot:item.2>
              <v-card title="Day 2:" flat class="leading-relaxed"
                >On the second day. Soon, You will make a mornig walk to the
                tower to watch the sunrise. Breakfast at 07:00 am. After that,
                you will go for a hike in the forests. Usually, we see Monkeys,
                Trogons and Motmots in the trails of the farm. Lunch is at noon,
                then,your tour guide will drive you to the lodge in Porto Jofre.
                Dinner and overnight.</v-card
              >
            </template>

            <template v-slot:item.3>
              <v-card title="Day 3:" flat class="leading-relaxed"
                >On the third day, is the beginning of your jaguar trip.
                Breakfast at 06:00 am. After that, you start your jaguar safari.
                Altogether, from 7:00 am to 05:00 pm, you will make a jaguar
                trip by boat in the Pantanal state park Encontro das Águas. At
                noon, you will make a picnic, on the river. After that, you
                return to the lodge. In fact, you will make a jaguar trip for
                ten hours. Dinner and overnight.
              </v-card>
            </template>
            <template v-slot:item.4>
              <v-card title="Day 4:" flat class="leading-relaxed"
                >On the fourth day. In the same way, you will go looking for
                jaguars and Giant Otter on the river again. At noon, you will
                make a picnic ont the river. After that, you will stay on the
                river until 05:00 pm. Then, you return to the lodge for Dinner
                and overnight.
              </v-card>
            </template>
            <template v-slot:item.5>
              <v-card title="Day 5:" flat class="leading-relaxed">
                On the fifth day. In the same way, you will make the jaguar trip
                by boat. In short, you will make ten hours boat drive with
                picnic on the river. Dinner and overnight. <br />
                In sum, On this Jaguar trip you will be 30 hours on the river
                looking for these beautiful Jaguars.
              </v-card>
            </template>
            <template v-slot:item.6>
              <v-card title="Day 6:" flat class="leading-relaxed">
                On the sixth day of your jaguar safari expeditions and
                photography, you will start the last part of your tour. After
                breakfast, your guide will drive you back to a third lodge on
                the Transpantaneira. In this new farm, you may see many animals
                too. Such, as Tapirs, Anteaters, Peccaries, Ocelots and lots of
                birds of many kinds. After lunch, you will make a walk in the
                forests of the farm. Dinner followed by night safari. Overnight.
              </v-card>
            </template>
            <template v-slot:item.7>
              <v-card title="Day 7:" flat class="leading-relaxed">
                On the seventh day. You wull make a morning walk to watch the
                sunrise, After breakfast, you will make a photo safari. Then,
                you will have lunch at noon . After that, you will go to the
                Tapirs’ hide. Generally, Tayras, Peccaries and many birds will
                come around the hide to drink water in a pond. At dusk, you
                return to the lodge making a night safari. Dinner and overnight.
              </v-card>
            </template>
            <template v-slot:item.8>
              <v-card title="Day 8:" flat class="leading-relaxed">
                On the eighth day. You will watch some animals eating at the
                bird feeder. In fact, you can photograph them really close to
                you. After breakfast, your guide will drop you off in Cuiabá.
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
              src="../assets/img/7n.png"
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
              src="../assets/img/7n01.png"
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
              src="../assets/img/7n05.png"
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
              src="../assets/img/7n02.png"
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
              src="../assets/img/7n03.png"
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
              src="../assets/img/7n04.png"
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
              src="../assets/img/7n06.png"
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
