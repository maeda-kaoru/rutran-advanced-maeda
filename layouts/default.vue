<template>
  <div class="wrapper">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { AppHeader } from "../components/organisms/Header";
import { AppFooter } from "../components/organisms/Footer";
// typescriptでは,defineComponentを使います。これはexport defaultの中でtypeセーフかどうか調べてくれます
export default defineComponent({
  components: { AppHeader, AppFooter },
  // ...
});
</script>

<style scoped>
</style>