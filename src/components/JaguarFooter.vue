<template>
  <div class="hidden md:block">
    <div class="lg:flex lg:justify-evenly p-3 mx-auto md:grid md:grid-cols-2">
      <div class="flex flex-col gap-2 lg:mb-32">
        <v-img src="../assets/img/Logo.png" height="" width="250px"> </v-img>
        <div class="tracking-wider">
          <p class="text-lg">Opening Hours</p>
          <p class="text-lg">
            Monday to Friday: 08:00 - 18:00<br />
            Saturday: 08:00 - 12:00<br />
            Sunday and Holiday: Closed
          </p>
        </div>
      </div>
      <div class="mt-10">
        <div
          class="mt-5 flex flex-col place-items-center gap-6 justify-around text-md md:text-lg tracking-wider decoration-transparent"
        >
          <router-link class="underline" to="/">Home</router-link>
          <router-link class="underline" to="/about">About Us</router-link>
          <router-link class="underline" to="/jaguar-safari"
            >Jaguar Tours</router-link
          >
          <router-link class="underline" to="/contact">Contact</router-link>
        </div>
      </div>
      <div class="lg:flex lg:flex-col lg:w-56 mt-14 text-lg tracking-wider">
        <span> Jaguar Safari Photography </span>
        <span> CNPJ: 15.208.373/0001-20 Cadastur: 13.046489.10.0001-2 </span>
        <span> Rua Papagaio, 01 Recanto dos Pássaros I,</span>
        <span> Quadra 25 Cep 78.074-138 Cuiabá-MT | Brasil </span>
      </div>

      <!-- MAPA TABLET -->

      <!-- MAPA DESKTOP -->

      <div class="mt-14">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1358.64317959102!2d-56.0343756669456!3d-15.60109107043721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db0056d62e5d9%3A0xc0b3890402833e07!2sSilva%20Tour%20Pantanal!5e0!3m2!1spt-BR!2sbr!4v1700740106143!5m2!1spt-BR!2sbr"
          height="350"
          style="border: 4"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div class="md:mt-6 flex justify-center items-center pb-6 tracking-widest">
      <p>© Jaguar Safari Photography 2024. Todos os direitos reservados.</p>
    </div>
  </div>

  <!-- MOBILE -->

  <div class="md:hidden">
    <div
      class="mt-20 pt-2 p-2 leading-relaxed flex justify-center items-center text-center text-xs bg-[#287926] text-[#fff] font-semibold tracking-widest"
    >
      <p>© Jaguar Safari Photography 2023. Todos os direitos reservados.</p>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import JaguarNavigation from "./JaguarNavigation.vue";

export default {
  components: { JaguarNavigation },
  name: "JaguarFooter",
};
/* eslint-disable */
</script>
<style scoped>
/* Estilos específicos para este componente */

/* Estilos para a seção de redes sociais */
.social-section {
  padding: 20px;
}

.social-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.social-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 14px;
}

/* Estilos para a seção de horário de funcionamento e informações de contato */
.contact-section {
  padding: 20px;
}

.contact-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Estilos para a seção de links e informações da empresa */
.company-section {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.company-links,
.company-info {
  flex: 1;
}

.company-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
}

.company-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
}
</style>
