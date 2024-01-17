<template>
  <!-- eslint-disable -->
  <div class="hidden md:flex mx-auto justify-center mt-20">
    <div>
      <div class="flex gap-20 uppercase font-semibold tracking-widest">
        <router-link class="underline" to="/">Home</router-link>
        <router-link class="underline" to="/about">About Us</router-link>
        <router-link class="underline" to="/">Gallery</router-link>
        <router-link class="underline" to="/contact">Contact</router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "JaguarMenuDesktop",
};
</script>

<style scoped>
.underline::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #000;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.underline {
  position: relative;
  color: #000;
  text-decoration: none;
}

.underline:hover {
  color: #000;
}

.underline::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 1.5px;
  bottom: 0;
  left: 0;
  top: 10;

  background-color: #07396b;
  transform: scaleX(0);
  transform-origin: top left;
  transition: transform 0.3s ease;
}

.underline:hover::before {
  transform: scaleX(1);
}
</style>
