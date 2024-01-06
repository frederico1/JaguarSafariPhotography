<template>
   <!-- eslint-disable -->
  <div class="hidden lg:block" data-aos="fade-right" data-aos-delay="200">
    <div class=" p-3 mx-auto flex justify-evenly place-items-center">
      <div class="flex flex-col gap-2">
        <v-img src="../assets/img/Logo.png" height="" width="250px"> </v-img>
        <div class="tracking-wider flex flex-col gap-3">
          <p class="">Opening Hours</p>
            <p>
            Monday to Friday: 08:00 - 18:00
          </p>
          <p>
            Saturday: 08:00 - 12:00
          </p>
          <p>
            Sunday and Holiday: Closed
          </p>
        </div>
      </div>
      <div class="">
        <div
          class="flex flex-col place-items-center gap-6 justify-around tracking-wider decoration-transparent"
        >
          <router-link class="underline" to="/">Home</router-link>
          <router-link class="underline" to="/about">About Us</router-link>
          <router-link class="underline" to="/"
            >Gallery</router-link
          >
          <router-link class="underline" to="/contact">Contact</router-link>
        </div>
      </div>
      <div class=" flex flex-col tracking-wider gap-4">
        <span> Jaguar Safari Photography </span>
        <span> CNPJ: 41.785.966/0001-69 </span>
        <span> Rua Papagaio, 01 Recanto dos Pássaros I,</span>
        <span> Quadra 25 Cep 78.074-138 Cuiabá-MT | Brasil </span>
      </div>

      <!-- MAPA TABLET -->

      <!-- MAPA DESKTOP -->

      <div class="mt-14">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1358.64317959102!2d-56.0343756669456!3d-15.60109107043721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db0056d62e5d9%3A0xc0b3890402833e07!2sSilva%20Tour%20Pantanal!5e0!3m2!1spt-BR!2sbr!4v1700740106143!5m2!1spt-BR!2sbr"
          height="350"
          width="500"
          style="border: 4"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div class="mt-14 mb-6 text-sm flex justify-center items-center tracking-widest">
      <p>© Jaguar Safari Photography 2024. Todos os direitos reservados.</p>
    </div>
  </div>

 <!-- TABLET FOOTER -->
 <div class="md:block lg:hidden">
  <div>ddsadsadadada</div>

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
  height: 1px;
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
