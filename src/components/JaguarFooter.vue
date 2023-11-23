<template>
  <div class="hidden md:block h-40">
    <div class="grid grid-cols-4 m-2 ml-40">
      <div class="flex flex-col gap-2">
        <v-img src="../assets/img/Logo.png" height="250px" width="250px">
          ></v-img
        >
        <div class="font-semibold">
          <p class="text-xl">Opening Hours</p>
          <p class="text-xl">
            Monday to Friday: 08:00 - 18:00<br />
            Saturday: 08:00 - 12:00<br />
            Sunday and Holiday: Closed
          </p>
        </div>
      </div>
      <div class="mt-40">
        <div
          class="flex flex-col gap-6 pt-5 justify-around text-md font-semibold md:text-xl"
        >
          <router-link class="underline" to="/">Home</router-link>
          <router-link class="underline" to="/about">About Us</router-link>
          <router-link class="underline" to="/jaguar-safari"
            >Jaguar Tours</router-link
          >
          <router-link class="underline" to="/contact">Contact</router-link>
        </div>
      </div>
      <div class="flex flex-col pt-40 w-52 text-lg font-semibold">
        <span> Jaguar Safari Photography </span>
        <span> CNPJ: 15.208.373/0001-20 Cadastur: 13.046489.10.0001-2 </span>
        <span> Rua Papagaio, 01 Recanto dos Pássaros I,</span>
        <span> Quadra 25 Cep 78.074-138 Cuiabá-MT | Brasil </span>
      </div>
      <div>4</div>
    </div>
    <div class="pt-20 flex justify-center items-center pb-8">
      <p>© Jaguar Safari Photography 2023. Todos os direitos Reservados</p>
    </div>
  </div>

  <!-- MOBILE -->

  <div class="md:hidden">
    <div
      class="mt-20 pt-2 p-2 leading-relaxed flex justify-center items-center text-center text-xs bg-[#287926] text-[#fff] font-semibold"
    >
      <p>© Jaguar Safari Photography 2023. Todos os direitos Reservados</p>
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
