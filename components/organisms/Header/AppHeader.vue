<template>
  <header>
    <div class="header">
      <div class="menu-left">
        <p>
          フリーランスエンジニア向けIT求人・案件サイト[フリーランススタート]
        </p>
        <img src="../../../assets/img/icon-facebook2.svg" />
      </div>
      <div class="menu-right">
        <nuxt-link v-for="(link, key) in links" :key="key" :to="link.to">{{
          link.text
        }}</nuxt-link>
      </div>
    </div>
  </header>
</template>


<script lang="ts">
import { defineComponent, reactive } from "@nuxtjs/composition-api";
export default defineComponent({
  setup() {
    // link.toとlink.textでエラーが出るので、anyをつけておきました。
    const links: any = reactive([{ text: "案件を探す", to: "#" }]);
    return { links };
  },
});
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
}
.menu-left {
  width: 50%;
}
img {
  width: 30px;
  height: 30px;
}
p {
  font-size: 12px;
}
.menu-right {
  width: 50%;
  text-align: end;
  padding: 50px 50px;
}
</style>