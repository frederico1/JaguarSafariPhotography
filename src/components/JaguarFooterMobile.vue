<template>
  <!-- FOOTER -->

  <div class="mt-10">
    <!-- ICONES -->
    <div class="flex justify-center items-center gap-5">
      <div class="border-b-2 h-8 border-[#E1306C]">
        <a href="https://instagram.com/guitophotographs" target="_blanck">
          <Icon icon="iconoir:instagram" width="27" height="27" />
        </a>
      </div>

      <div class="border-b-2 h-8 border-[#128C7E]">
        <a
          href="https://api.whatsapp.com/send?phone=+5565992764968&text=Hello%21"
          target="_blanck"
        >
          <Icon icon="la:whatsapp" width="27" height="27" />
        </a>
      </div>

      <div class="border-b-2 h-8 border-[#25D366]">
        <a href="https://www.tripadvisor.com.br" target="_blanck">
          <Icon icon="cib:tripadvisor" color="" width="27" height="27" />
        </a>
      </div>

      <div>
        <div class="border-b-2 h-8 border-[#4285F4]">
          <a
            href="mailto:http://jaguarsafariphotograph@gmail.com"
            target="_blanck"
          >
            <Icon icon="iconamoon:email-thin" width="27" height="27" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- FOOTER FOOTER -->
  <div
    class="mt-6 uppercase text-xs flex flex-col justify-center items-center tracking-wider"
  >
    <div class="">
      <p>© 2023 All rights reserved.</p>
    </div>

    <div>
      <p class="">Jaguar Safari Photography</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  name: "FooterMobile",
};
</script>

<style scoped></style>
