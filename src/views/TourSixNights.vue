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
          <h1 class="text-4xl text-center font-serif tracking-wide uppercase">
            Jaguar expeditions 6 nights / 7 days
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
              <v-card title="Day 1:" flat class="leading-relaxed font-sans"
                >Eventually, on the first day of your Pantanal jaguar
                expeditions and photography. Our guide will pick you up at the
                Hotel in Cuiabá and take you to the lodge in the Pantanal.
                Meanwhile, on the Transpantaneira, you will see birds, mammals
                and reptiles. Lunch is at noon. Afterwards, you will make a boat
                ride. There, you may see hawks, kingfishers, otters, sometimes
                even jaguars on this river. Dinner followed by a nightafari and
                overnight.</v-card
              >
            </template>

            <template v-slot:item.2>
              <v-card title="Day 2:" flat class="leading-relaxed font-sans"
                >On the second day, you will go for a morning walk to the tower
                to watch the sunrise. Breakfast at 07:00 am. Afterwards, you go
                for a hike in the forests of the farm. Certainly, you may see
                monkeys, Agoutis and birds of many kinds in this forest. Lunch
                is at noon. After that, drive to the lodge in Porto Jofre.
                Arrival for dinner around 7:00 pm. Overnight.</v-card
              >
            </template>

            <template v-slot:item.3>
              <v-card title="Day 3:" flat class="leading-relaxed font-sans"
                >On the third day, we start the jaguar safari Itinerary. This
                time you will have breakfast at 6:00 am. After that, you will
                make your first jaguar safari from 07:00 am to 05:00 pm.
                Actually looking for jaguars and Giant otters in the State Park
                Encontro das Águas. Lunch is a picnic on the river at noon.
                After that, you go to the second part of your jaguar safari
                itinerary. In truth, you will spend ten hours on the boat.
                Dinner at 7:00 pm and overnight.
              </v-card>
            </template>
            <template v-slot:item.4>
              <v-card title="Day 4:" flat class="leading-relaxed font-sans"
                >On the fourth day. In similar fashion, you will make a jaguar
                trip for 10 hours, having lunch on the river and returning to
                the lodge at 05:00 pm. Dinner and overnight.<br />
                On this jaguar trip exemple, you will make two full days on the
                river, totalizing 20 hours boat drive. But, we are flexible to
                make your tour according to your wishes.
              </v-card>
            </template>
            <template v-slot:item.5>
              <v-card title="Day 5:" flat class="leading-relaxed font-sans">
                This time, you will have breakfast. Thereafter, our guide will
                drive you to a different lodge on the Transpantaneira.
                Certainly, you will see lots of animals in the farm. For
                instance, Tapirs, Anteaters, Caymans, and many birds of
                different kinds. Lunch is at noon, after that, you will go for a
                hike in the forests of the farm. Dinner followed by night safari
                and overnight.
              </v-card>
            </template>
            <template v-slot:item.6>
              <v-card title="Day 6:" flat class="leading-relaxed font-sans">
                On the sixth day, you will go for a morning walk to watch the
                sunrise. Breakfast is at 07:00 am. Afterwards, you go on a photo
                safari. Generally, tourists see many birds, mammals and reptiles
                on this tour. Lunch is at noon. All in all, in the afternoon,
                you will go to the Tapir’s hide. This jaguar safari photography
                is followed by a night safari on the way back to the lodge.
                Dinner and overnight.
              </v-card>
            </template>
            <template v-slot:item.7>
              <v-card title="Day 7:" flat class="leading-relaxed font-sans">
                Finally, on the seventh day. You will watch animals on the bird
                feeder. Breakfast is at 07:00. Then, our guide will take you
                back to Cuiabá.
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
              src="../assets/img/6n.png"
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
              src="../assets/img/6n01.png"
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
              src="../assets/img/6n02.png"
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
              src="../assets/img/6n03.png"
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
              src="../assets/img/6n04.png"
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
              src="../assets/img/dsc0005.png"
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
