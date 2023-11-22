<template>
  <v-footer app fixed dark color="#000">
    <v-container>
      <!-- Seção de redes sociais -->
      <v-row>
        <v-col>
          <div class="social-section">
            <div class="social-title">Access our social networks</div>
            <div class="social-icons">
              <div>Facebook</div>
              <div>Tripadvisor</div>
              <div>Youtube</div>
              <div>Whatsapp</div>
              <div>Instagram</div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Seção de horário de funcionamento e informações de contato -->
      <v-row>
        <v-col>
          <div class="contact-section">
            <div class="contact-title">Opening hours</div>
            <div>Monday to Friday: 08:00 - 18:00</div>
            <div>Saturday: 08:00 - 12:00</div>
            <div>Sunday and Holiday: Closed</div>
            <div>55 (65) 99922-3295</div>
            <div>silvapantanaltour@gmail.com</div>
          </div>
        </v-col>
      </v-row>

      <!-- Seção de links e informações da empresa -->
      <v-row>
        <v-col>
          <div class="company-section">
            <div class="company-links">
              <div>Home</div>
              <div>About Us</div>
              <div>Tours</div>
              <div>Lodges</div>
              <div>News</div>
              <div>Contact</div>
              <div>Silva Tour Pantanal</div>
            </div>
            <div class="company-info">
              <div>CNPJ: 15.208.373/0001-20</div>
              <div>Cadastur: 13.046489.10.0001-2</div>
              <div>Rua Papagaio, 01</div>
              <div>Recanto dos Pássaros I, Quadra 25 Cep 78.074-138</div>
              <div>Cuiabá-MT | Brasil</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
/* eslint-disable */
export default {
  name: "JaguarFooter",
};
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
