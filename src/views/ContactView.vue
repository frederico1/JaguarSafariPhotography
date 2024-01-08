<template>
  <!-- eslint-disable -->

  <!-- MOBILE -->
  <div class="md:hidden p-3">
    <div class="">
      <div>
        <JaguarMenu />
      </div>
      <div class="mt-20">
        <div class="">
          <button
            class="bg-#000"
            id="backToTopBtn"
            @click="scrollToTop"
            v-show="showBackToTopButton"
          >
          <Icon icon="line-md:arrow-up" color="#454546" width="30px" />
          </button>
        </div>
        <div class="mt-28">
        <h1 class="text-4xl font-serif text-center uppercase tracking-wider" data-aos="fade-right" data-aos-delay="200">
          Pantanal trip photography.
        </h1>
      </div>
        <p data-aos="fade-right" data-aos-delay="200"
          class="mt-8 leading-relaxed justify-center mx-auto text-center font-sans"
        >
          If you wish to make a Pantanal trip photography, you are in the right
          page. In fact, Silva Tour Pantanal is organizing naturalistic tours
          since 2014. If you have any questions about the trip, forthwith, we
          will answer and try clarify your doubts. By and large, we give all
          information about booking hotels, transfers and guides. thus, do not
          hesitate to get in touch with us.
        </p>
      </div>
    </div>

    <JaguarDivider />

    <div class="pt-8" data-aos="fade-right" data-aos-delay="200">
      <!-- FORM -->
      <div class="pt-8">
        <form @submit.prevent="submit">
          <v-text-field
            v-model="name.value.value"
            :counter="10"
            :error-messages="name.errorMessage.value"
            label="Name"
          ></v-text-field>

          <v-text-field
            class="mt-3 ring-inset	--tw-ring-inset: inset;"
            v-model="phone.value.value"
            :counter="7"
            :error-messages="phone.errorMessage.value"
            label="Phone Number"
          ></v-text-field>

          <v-text-field
            class="mt-3"
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="E-mail"

          ></v-text-field>

          <div class="mt-6">
            <v-btn class="me-4" type="submit"> submit </v-btn>

          </div>
        </form>
      </div>

      <!-- CONTACT  -->

      <div class="pt-12" data-aos="fade-left" data-aos-delay="200">
        <div class="">
          <h1 class="text-2xl font-medium tracking-widest font-sans">
            Contact US
          </h1>
        </div>
        <div class="pt-1">
          <p class="text-base font-sans">
            For a Pantanal trip photography or suggestions, contact us by
            e-mail, phone or fill in the formular.
          </p>
        </div>
        <div class="pt-8 flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <Icon
              icon="game-icons:smartphone"
              width="35"
              height="35"
              color=""
            />
            <a class="text-sm font-sans" href="tel:+55 65992764968"
              >+55 65992764968
            </a>
          </div>

          <div class="flex items-center gap-2">
            <Icon
              icon="ic:baseline-whatsapp"
              width="35"
              height="35"
              color="#"
            />
            <a
              class="font-sans text-sm"
              href="https://api.whatsapp.com/send?phone=+5565992764968&text=Hello%21"
              target="_blanck"
            >
              <span class="elementor-icon-list-icon">
                <i aria-hidden="true" class="fas fa-mobile-alt"></i>
              </span>
              <span class="elementor-icon-list-text">+55 65 99276-4968</span>
            </a>
          </div>
          <div class="flex items-center gap-2">
            <Icon icon="ic:outline-email" width="35" height="35" color="#" />
            <a
              class="hover:[#] text-sm font-sans"
              href="mailto:http://jaguarsafariphotograph@gmail.com"
              target="_blanck"
              >jaguarsafariphotograph@gmail.com
            </a>
          </div>
        </div>

        <div class="">
          <JaguarDivider />
        </div>

        <!-- FOOTER -->
        <div class="mt-10">
          <FooterMobile />
        </div>
      </div>
    </div>
  </div>

  <!-- TABLET & DESKTOP -->
  <div class="hidden md:block " >

    <!-- MENU -->
<div class="p-3">
    <JaguarMenuDesktop/>
  </div>
  
    <div class="mt-28 w-3/5 mx-auto">
        <div class="">
          <button
            class="bg-#000"
            id="backToTopBtn"
            @click="scrollToTop"
            v-show="showBackToTopButton"
          >
          <Icon icon="line-md:arrow-up" color="#454546" width="30px" />
          </button>
        </div>
        <h1  class="text-4xl font-serif text-center uppercase tracking-wider" data-aos="fade-right" data-aos-delay="200" >
          Pantanal trip photography.
        </h1>
        <p data-aos="fade-right" data-aos-delay="200"
          class="mt-8 leading-relaxed justify-center mx-auto text-center font-sans text-lg"
        >
          If you wish to make a Pantanal trip photography, you are in the right
          page. In fact, Silva Tour Pantanal is organizing naturalistic tours
          since 2014. If you have any questions about the trip, forthwith, we
          will answer and try clarify your doubts. By and large, we give all
          information about booking hotels, transfers and guides. thus, do not
          hesitate to get in touch with us.
        </p>
      </div>
      <div class="">

      <!-- FORM -->
      <div class="pt-40 w-3/5 mx-auto grid grid-cols-2 gap-20" >
        <form @submit.prevent="submit" data-aos="fade-right" data-aos-delay="200">
          <v-text-field
          class="text-field"
           v-model="name.value.value"
            :counter="10"
            :error-messages="name.errorMessage.value"
            label="Name"
          ></v-text-field>

          <v-text-field
            class="mt-3"
            v-model="phone.value.value"
            :counter="7"
            :error-messages="phone.errorMessage.value"
            label="Phone Number"
          ></v-text-field>

          <v-text-field
            class="mt-3"
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="E-mail"
          ></v-text-field>

          <div class="mt-6">
            <v-btn class="me-4" type="submit"> submit </v-btn>

            <v-btn @click="handleReset"> clear </v-btn>
          </div>
        </form>
        <!-- CONTACT  -->
  
        <div class="" data-aos="fade-left" data-aos-delay="200">
          <div class="">
            <h1 class="text-2xl font-medium tracking-widest font-sans">
              Contact US
            </h1>
          </div>
          <div class="pt-1">
            <p class="text-base font-sans">
              For a Pantanal trip photography or suggestions, contact us by
              e-mail, phone or fill in the formular.
            </p>
          </div>
          <div class="pt-8 flex flex-col gap-4">
            <div class="flex items-center gap-2">
              <Icon
                icon="game-icons:smartphone"
                width="35"
                height="35"
                color=""
              />
              <a class="text-sm font-sans" href="tel:+55 65992764968"
                >+55 65992764968
              </a>
            </div>
  
            <div class="flex items-center gap-2">
              <Icon
                icon="ic:baseline-whatsapp"
                width="35"
                height="35"
                color="#"
              />
              <a
                class="font-sans text-sm"
                href="https://api.whatsapp.com/send?phone=+5565992764968&text=Hello%21"
                target="_blanck"
              >
                <span class="elementor-icon-list-icon">
                  <i aria-hidden="true" class="fas fa-mobile-alt"></i>
                </span>
                <span class="elementor-icon-list-text">+55 65 99276-4968</span>
              </a>
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="ic:outline-email" width="35" height="35" color="#" />
              <a
                class="hover:[#] text-sm font-sans"
                href="mailto:http://jaguarsafariphotograph@gmail.com"
                target="_blanck"
                >jaguarsafariphotograph@gmail.com
              </a>
            </div>
          </div>
  
          <div class="">
            <JaguarDivider />
          </div>
  
        </div>
      </div>

      <!-- DIVIDER -->
      <div class="pt-56">
        <JaguarDivider/>
      </div>

      <!-- FOOTER -->

      <div>
        <JaguarFooter/>
      </div>

    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { Icon } from "@iconify/vue";
import JaguarMenu from "../components/JaguarMenu.vue";
import JaguarNavigation from "../components/JaguarNavigation.vue";
import JaguarDivider from "../components/JaguarDivider.vue";
import FooterMobile from "../components/JaguarFooterMobile.vue";
import BackToTop from "../components/BackToTop.vue";
import JaguarFooter from "../components/JaguarFooter.vue";
import JaguarMenuDesktop from "@/components/JaguarMenuDesktop.vue";

import { ref, reactive } from "vue";
import { useField, useForm } from "vee-validate";

export default {
  components: {
    Icon,
    BackToTop,
    JaguarNavigation,
    JaguarDivider,
    JaguarMenu,
    FooterMobile,
    JaguarMenuDesktop,
    JaguarFooter,
  
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
  setup() {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        name(value) {
          if (value?.length >= 2) return true;
          return "Name needs to be at least 2 characters.";
        },
        phone(value) {
          if (value?.length > 9 && /[0-9-]+/.test(value)) return true;
          return "Phone number needs to be at least 9 digits.";
        },
        email(value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
          return "Must be a valid e-mail.";
        },
      },
    });

    const name = useField("name");
    const phone = useField("phone");
    const email = useField("email");
    const select = useField("select");
    const checkbox = useField("checkbox");

    const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);

    const submit = handleSubmit((values) => {
      alert(JSON.stringify(values, null, 2));
    });

    const clear = () => {
      handleReset();
      for (const key in state) {
        state[key].$pending = false;
        state[key].$params = {};
        state[key].$reset();
      }
    };
    return {
      name,
      phone,
      email,
      select,
      checkbox,
      items,
      submit,
      clear,
    };
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
