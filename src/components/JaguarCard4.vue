<template>
  <v-card
    hover
    elevation="16"
    class="mx-auto md:w-[650px] lg:w-[480px] w-[340px]"
    style="
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
        0 8px 10px -6px rgb(0 0 0 / 0.1);
    "
  >
    <v-img src="../assets/img/avif/Cards/jaguar1.avif" height="300px" cover></v-img>

    <v-card-title class="font-serif text-center">
      Jaguar tour 4 nights / 5 days
    </v-card-title>

    <v-card-subtitle>Flexible Jaguar Photography Safari</v-card-subtitle>

    <v-card-actions>
      <router-link class="flex justify-center items-center" to="/tour4nights">
        <Icon icon="material-symbols-light:read-more" width="24" height="24" />
        <v-btn color="">Read More</v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <div
          class="mt-8 h-[1.3px] bg-grey w-3/4 flex justify-center items-center mx-auto"
        ></div>
        <v-card-text style="font-size: 15px">
          It includes one night Pantanal trip in a lodge in the Transpantaneira
          plus three nights in Porto Jofre. 20 hours jaguar safari.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  <!--   <div class="card">
    <a class="card1" href="#">
      <v-img
        max-width="350"
        aspect-ratio="16/9"
        cover
        src="../assets/img/jaguar4nightscard.png"
      ></v-img>
      <div class="flex flex-col gap-3">
        <p class="font-bold text-[#666] text-2xl pt-2">
          Jaguar tour 4 nights / 5 days
        </p>
        <p class="small text-base">
          It includes one night Pantanal trip in a lodge in the Transpantaneira
          plus three nights in Porto Jofre. 20 hours jaguar safari.
        </p>
      </div>

      <div class="go-corner" href="#">
        <div class="go-arrow">→</div>
      </div>
    </a>
  </div>
   -->
</template>
<script>
/* eslint-disable */
import { Icon } from "@iconify/vue";

import JaguarDivider from "../components/JaguarDivider.vue";

export default {
  components: {
    JaguarDivider,
    Icon,
  },
  name: "JaguarCard4",
  data: () => ({
    show: false,
  }),
};
</script>
<style scoped>
.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: #00838d;
  border-radius: 0 4px 0 20px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
}

.card1 {
  display: block;
  position: relative;
  max-width: 400px;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 52px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
}

.card1:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -24px;
  right: -24px;
  background: #00838d;
  height: 60px;
  width: 60px;
  border-radius: 12px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.25s ease-out;
}

.card1:hover:before {
  transform: scale(21);
}

.card1:hover p {
  transition: all 0.3s ease-out;
  color: rgba(255, 255, 255, 0.8);
}

.card1:hover h3 {
  transition: all 0.3s ease-out;
  color: #fff;
}
</style>
