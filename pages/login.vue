<template>
  <div>
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "@/components/molecules/LoginForm/LoginForm.vue";

export default defineComponent({
  components: {
    LoginForm,
  },
});
</script>