<template>
  <header>
    <p>フリーランスエンジニア向けIT求人・案件サイト【フリーランススタート】</p>
    <div class="menu">
      <div class="menu-left">
        <img src="../../../assets/img/rocket_icon.png" />
      </div>
      <div class="menu-right">
        <nuxt-link v-for="(link, key) in links" :key="key" :to="link.to">{{
          link.text
        }}</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script lang='ts'>
export default {
  setup() {
    const links = reactive([{ text: "案件を探す", to: "#" }]);

    return { links };
  },
};
</script>

<style lang='scss' scoped>
header {
  border-bottom: solid 0.5px black;
  padding: 0 20px;
  p {
    font-size: 10px;
  }
  .menu {
    width: 100%;
    padding: 15px 0;
    display: flex;
    img {
      width: 40px;
      height: 40px;
    }
    .menu-right {
      margin-left: auto;
      display: flex;
      align-items: center;
    }
    a {
      font-weight: bold;
      text-decoration: none;
      color: black;
    }
  }
}
</style>