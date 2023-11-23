<template>
  <JaguarNavigation></JaguarNavigation>
  <!-- eslint-disable -->

  <div class="p-4 pt-10 text-center leading-4 md:w-4/4 lg:w-3/4 mx-auto">
    <h1
      class="md:text-2xl lg:text-3xl text-xl font-semibold text-[#1b6dc1] tracking-widest"
    >
      Pantanal trip photography.
    </h1>
    <p
      class="mt-8 leading-relaxed text-justify justify-center mx-auto md:text-xl indent-8"
    >
      If you wish to make a Pantanal trip photography, you are in the right
      page. In fact, Silva Tour Pantanal is organizing naturalistic tours since
      2014. If you have any questions about the trip, forthwith, we will answer
      and try clarify your doubts. By and large, we give all information about
      booking hotels, transfers and guides. thus, do not hesitate to get in
      touch with us.
    </p>
  </div>
  <div
    class="p-3 md:w-4/4 lg:w-3/4 md:grid md:grid-cols-2 md:mx-auto md:gap-10"
  >
    <!-- FORM -->
    <div class="pt-8">
      <form @submit.prevent="submit">
        <div class="">
          <v-text-field
            v-model="name.value.value"
            :counter="10"
            :error-messages="name.errorMessage.value"
            label="Name"
            clearable
            variant="outlined"
            color="#1b6dc1"
          ></v-text-field>
        </div>
        <div class="pt-5">
          <v-text-field
            v-model="phone.value.value"
            :counter="7"
            :error-messages="phone.errorMessage.value"
            label="Phone Number"
            clearable
            variant="outlined"
            color="#1b6dc1"
          ></v-text-field>
        </div>
        <div class="pt-5">
          <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="E-mail"
            clearable
            variant="outlined"
            color="#1b6dc1"
          ></v-text-field>
        </div>
        <div class="pt-3">
          <v-btn class="me-4" type="submit" color="#41bc3f"> submit </v-btn>
          <v-btn @click="handleReset" color="#41bc3f"> clear </v-btn>
        </div>
      </form>
    </div>

    <!-- CONTACT  -->
    <div class="pt-6">
      <div class="">
        <h1 class="text-2xl font-medium text-[#1b6dc1] tracking-widest">
          Contact US
        </h1>
      </div>
      <div class="pt-1">
        <p class="md:text-xl">
          For a Pantanal trip photography or suggestions, contact us by e-mail,
          phone or fill in the formular.
        </p>
      </div>
      <div class="pt-8 flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Icon
            icon="game-icons:smartphone"
            width="35"
            height="35"
            color="#1b6dc1"
          />
          <a class="md:text-xl" href="tel:+55 65992764968">+55 65992764968 </a>
        </div>

        <div class="flex items-center gap-2">
          <Icon
            icon="ic:baseline-whatsapp"
            width="35"
            height="35"
            color="#1b6dc1"
          />
          <a
            class="font-semibold md:text-xl"
            href="https://api.whatsapp.com/send?phone=+5565992764968&text=Hello%21"
            target="_blanck"
          >
            <span class="elementor-icon-list-icon">
              <i aria-hidden="true" class="fas fa-mobile-alt"></i>
            </span>
            <span class="elementor-icon-list-text font-normal"
              >+55 65 99276-4968</span
            >
          </a>
        </div>
        <div class="flex items-center gap-2">
          <Icon
            icon="ic:outline-email"
            width="35"
            height="35"
            color="#1b6dc1"
          />
          <a
            class="hover:[#1b6dc1] md:text-xl"
            href="mailto:http://jaguarsafariphotograph@gmail.com"
            target="_blanck"
            >jaguarsafariphotograph@gmail.com
          </a>
        </div>
      </div>
      <div class="pt-10 flex gap-2 justify-center mt-3">
        <div>
          <a href="https://instagram.com/guitophotographs" target="_blanck">
            <Icon icon="mdi:instagram" width="35" height="35" color="#1b6dc1" />
          </a>
        </div>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=+5565992764968&text=Hello%21"
            target="_blanck"
          >
            <Icon
              icon="ic:baseline-whatsapp"
              width="35"
              height="35"
              color="#1b6dc1"
            />
          </a>

          <span class="elementor-icon-list-icon">
            <i aria-hidden="true" class="fas fa-mobile-alt"></i>
          </span>
        </div>
        <div class="">
          <a href="https://www.tripadvisor.com.br" target="_blanck">
            <Icon
              class=""
              icon="simple-icons:tripadvisor"
              width="35"
              height="35"
              color="#1b6dc1"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { Icon } from "@iconify/vue";

import JaguarNavigation from "../components/JaguarNavigation.vue";

import { ref, reactive } from "vue";
import { useField, useForm } from "vee-validate";

export default {
  components: {
    Icon,
    JaguarNavigation,
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
a:hover {
  color: #1b6dc1;
}
</style>
