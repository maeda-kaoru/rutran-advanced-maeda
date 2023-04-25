<template>
  <div class="wrapper">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { AppHeader } from "../components/organisms/Header";
import { AppFooter } from "../components/organisms/Footer";
import { defineComponent } from "vue";
export default defineComponent({
  components: { AppHeader, AppFooter },
  // ...
});
</script>

<style scoped>
</style>