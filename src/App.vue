<template class="h-screen">
  <v-app class="">
    <v-main>
      <router-view />
      <div class="hidden md:block bg-black h-20 md:mt-64"></div>
      <div class="h-40">
        <div>
          <v-img></v-img>
        </div>
      </div>
    </v-main>
  </v-app>
</template>
<script>
/* eslint-disable */
</script>
<style>
#app {
  font-family: "Nunito Variable", sans-serif;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  line-height: 1;
}
</style>
