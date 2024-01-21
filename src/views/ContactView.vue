<template>
  <!-- eslint-disable -->
  <!-- MOBILE -->
  <div class="md:hidden p-3">
    <div class="">
      <div>
        <JaguarMenu />
      </div>
      <div class="">
        <button
          class="bg-#000"
          id="backToTopBtn"
          @click="scrollToTop"
          v-show="showBackToTopButton"
        >
          <Icon icon="line-md:arrow-up" color="#454546" width="33px" />
        </button>
      </div>
      <div class="mt-20">
        <div class="mt-28">
          <h1
            class="text-4xl font-serif text-center uppercase tracking-wider"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Pantanal trip photography.
          </h1>
        </div>
        <p
          data-aos="fade-right"
          data-aos-delay="200"
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
        <form action="https://formspree.io/f/xeqyqywn" method="POST">
          <v-text-field
            variant="outlined"
            clearable
            class=""
            name="Nome"
            v-model="name.value.value"
            :counter="10"
            :error-messages="name.errorMessage.value"
            label="Name"
          ></v-text-field>

          <v-text-field
            variant="outlined"
            clearable
            name="Phone Number"
            class="mt-5"
            v-model="phone.value.value"
            :counter="7"
            :error-messages="phone.errorMessage.value"
            label="Phone Number"
          ></v-text-field>

          <v-text-field
            variant="outlined"
            clearable
            name="E-mail"
            class="mt-5"
            v-model="email.value.value"
            label="E-mail"
          ></v-text-field>

          <div class="mt-3">
            <v-textarea
              counter
              variant="outlined"
              clearable
              clear-icon="mdi-close-circle"
              name="message"
              label="Message"
            ></v-textarea>
          </div>
          <div>
            <button>
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
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
              target="_blank"
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
              target="_blank"
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
  <div class="hidden md:block p-3">
    <!-- MENU -->
    <div class="">
      <JaguarMenuDesktop />
    </div>

    <div class="">
      <button
        class="bg-#000"
        id="backToTopBtn"
        @click="scrollToTop"
        v-show="showBackToTopButton"
      >
        <Icon icon="line-md:arrow-up" color="#454546" width="45px" />
      </button>
    </div>

    <div class="mt-28 lg:w-3/5 mx-auto">
      <h1
        class="text-4xl font-serif text-center uppercase tracking-wider"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        Pantanal trip photography.
      </h1>
      <p
        data-aos="fade-right"
        data-aos-delay="200"
        class="mt-8 leading-relaxed justify-center mx-auto text-center font-sans text-lg"
      >
        If you wish to make a Pantanal trip photography, you are in the right
        page. In fact, Silva Tour Pantanal is organizing naturalistic tours
        since 2014. If you have any questions about the trip, forthwith, we will
        answer and try clarify your doubts. By and large, we give all
        information about booking hotels, transfers and guides. thus, do not
        hesitate to get in touch with us.
      </p>
    </div>
    <div class="">
      <!-- FORM -->

      <div
        class="lg:pt-40 lg:w-3/5 mx-auto lg:grid lg:grid-cols-2 lg:gap-20 md:gap-8 md:pt-20"
      >
        <!--  -->

        <form
          form
          action="https://formspree.io/f/xeqyqywn"
          method="POST"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <v-text-field
            variant="outlined"
            clearable
            name="Nome"
            v-model="name.value.value"
            :counter="10"
            :error-messages="name.errorMessage.value"
            label="Name"
          ></v-text-field>

          <v-text-field
            variant="outlined"
            clearable
            name="Phone Number"
            class="mt-5"
            v-model="phone.value.value"
            :counter="7"
            :error-messages="phone.errorMessage.value"
            label="Phone Number"
          ></v-text-field>

          <v-text-field
            variant="outlined"
            clearable
            name="E-mail"
            class="mt-5"
            v-model="email.value.value"
            label="E-mail"
          ></v-text-field>
          <div class="mt-6">
            <v-textarea
              counter
              variant="outlined"
              clearable
              clear-icon="mdi-close-circle"
              name="message"
              label="Message"
            ></v-textarea>
          </div>

          <div>
            <button>
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
          </div>
        </form>

        <!-- CONTACT  -->

        <div class="" data-aos="fade-left" data-aos-delay="200">
          <div class="">
            <h2 class="text-2xl font-medium tracking-widest font-sans">
              Contact US
            </h2>
          </div>
          <div class="pt-1">
            <p class="text-lg font-sans">
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
              <a
                class="text-base font-sans tracking-wider hover:text-[#1b6dc1] ease-in duration-200"
                href="tel:+55 65992764968"
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
                target="_blank"
              >
                <span class="elementor-icon-list-icon">
                  <i aria-hidden="true" class="fas fa-mobile-alt"></i>
                </span>
                <span
                  class="elementor-icon-list-text text-base tracking-wider hover:text-[#1b6dc1] ease-in duration-200"
                  >+55 65 99276-4968</span
                >
              </a>
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="ic:outline-email" width="35" height="35" color="#" />
              <a
                class="hover:[#] text-base font-sans tracking-wider hover:text-[#1b6dc1] ease-in duration-200"
                href="mailto:http://jaguarsafariphotograph@gmail.com"
                target="_blank"
                >jaguarsafariphotograph@gmail.com
              </a>
            </div>
          </div>

          <div
            class="mx-auto justify-center items-center gap-10 mt-14 hidden lg:flex"
          >
            <div class="">
              <a href="https://instagram.com/guitophotographs" target="_blank">
                <Icon icon="iconoir:instagram" width="37" height="37" />
              </a>
              <div
                class="mt-1 h-[2px] bg-[#E1306C] w-4/4 flex justify-center items-center mx-auto"
              ></div>
            </div>

            <div class="">
              <a
                href="https://api.whatsapp.com/send?phone=+5565992764968&text=Hello%21"
                target="_blank"
              >
                <Icon icon="la:whatsapp" width="37" height="37" />
              </a>
              <div
                class="mt-1 h-[2px] bg-[#128C7E] w-4/4 flex justify-center items-center mx-auto"
              ></div>
            </div>

            <div class="">
              <a
                href="https://www.tripadvisor.com.br/Attraction_Review-g488170-d27133585-Reviews-Jaguar_Safari_Photography-Cuiaba_State_of_Mato_Grosso.html"
                target="_blank"
              >
                <Icon icon="cib:tripadvisor" color="" width="37" height="37" />
              </a>
              <div
                class="mt-1 h-[2px] bg-[#25D366] w-4/4 flex justify-center items-center mx-auto"
              ></div>
            </div>

            <div>
              <div class="">
                <a
                  href="mailto:http://jaguarsafariphotograph@gmail.com"
                  target="_blank"
                >
                  <Icon icon="iconamoon:email-thin" width="37" height="37" />
                  <div
                    class="mt-1 h-[2px] bg-[#4285F4] w-4/4 flex justify-center items-center mx-auto"
                  ></div>
                </a>
              </div>
            </div>
          </div>

          <div class="hidden lg:block">
            <JaguarDivider />
          </div>
        </div>
      </div>

      <!-- DIVIDER -->
      <div class="lg:pt-56 md:pt-20">
        <JaguarDivider />
      </div>

      <!-- FOOTER -->

      <div>
        <JaguarFooter />
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

  data: () => ({
    rules: [(v) => v.length <= 25 || "Max 25 characters"],
    value: "Hello!",
  }),
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

button {
  font-family: inherit;
  font-size: 15px;
  height: 37px;
  background: #212121;
  color: #fff;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border-radius: 2px;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
}

button span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}

button svg {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover svg {
  transform: translateX(1.2em) rotate(45deg) scale(1.1);
}

button:hover span {
  transform: translateX(5em);
}

button:active {
  transform: scale(0.95);
}

@keyframes fly-1 {
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.1em);
  }
}

.input-no-focus:focus {
  outline: none !important; /* Remover a borda ao focar */
  box-shadow: none !important; /* Remover a sombra ao focar */
}
</style>
