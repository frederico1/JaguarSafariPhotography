<template>
  <div class="md:p-8">
    <JaguarNavigation></JaguarNavigation>
  </div>
</template>

<script>
/* eslint-disable */
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import { Form, Field, ErrorMessage } from "vee-validate";

import JaguarNavigation from "../components/JaguarNavigation.vue";

export default {
  components: {
    JaguarNavigation,
  },
};
/* eslint-disable */
</script>

<style></style>
