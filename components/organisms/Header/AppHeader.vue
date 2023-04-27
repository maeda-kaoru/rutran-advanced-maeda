<template>
  <header>
    <div class="menu-left">
      <p>フリーランスエンジニア向けIT求人・案件サイト[フリーランススタート]</p>
      <img src="../../../assets/img/rocket_icon.png" />
    </div>
    <div class="menu-right">
      <nuxt-link v-for="(link, key) in links" :key="key" :to="link.to">{{
        link.text
      }}</nuxt-link>
    </div>
  </header>
</template>



<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    // link.toとlink.textでエラーが出るので、anyをつけておきました。
    const links: any = reactive([{ text: "案件を探す", to: "#" }]);
    return { links };
  },
});
</script>

<style lang='scss' scoped>
header {
  padding: 10px 20px 15px 20px;
  p {
    font-size: 12px;
  }
  .menu-left {
    img {
      width: 30px;
      height: 30px;
    }
  }
  .menu-right {
    text-align: end;
    padding: 50px 50px;
  }
}
</style>