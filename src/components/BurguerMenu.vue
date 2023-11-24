<template>
  <div>
    <v-bottom-sheet v-model="sheet" absolute bottom class="custom-bottom-sheet">
      <template v-slot:activator="{ props }">
        <div class="m-4">
          <Icon
            v-bind="props"
            icon="line-md:menu-fold-right"
            width="30px"
            color="#000"
          />
          <v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
        </div>
      </template>

      <v-list class="flex flex-col items-center gap-10 tracking-widest">
        <router-link to="/" @click="closeSheet">Home</router-link>
        <router-link to="/about" @click="closeSheet">About US</router-link>
        <router-link to="/gallery" @click="closeSheet">Gallery</router-link>
        <router-link to="/contact" @click="closeSheet">Contact</router-link>

        <v-list-item
          v-for="tile in tiles"
          :key="tile.title"
          :prepend-avatar="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
          :title="tile.title"
          @click="sheet = false"
        ></v-list-item>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script>
/* eslint-disable */
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  data: () => ({
    sheet: false,
  }),
  methods: {
    closeSheet() {
      this.sheet = false;
    },
  },
};
</script>

<style scoped>
.custom-bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
