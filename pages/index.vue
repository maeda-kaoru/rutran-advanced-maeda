<template>
  <div class="top_menu">
    <div class="section1">
      <img src="../assets/img/top-logo.svg" />
      <p>案件・求人数[変数]件（05/18更新)</p>
      <p class="Subtitle">
        フリーランスエンジニア専用のIT求人・案件検索サイトで仕事探し
      </p>
    </div>
    <div class="section2">
      <p style="f; font-size: 20px">フリーワードで案件検索</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  setup() {},
};
</script>

<style lang='scss' scoped>
.top_menu {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .section1 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    img {
      width: 35%;
    }
    .Subtitle {
      font-weight: bold;
      font-size: 20px;
    }
  }
  .section2 {
    width: 70%;
    display: flex;
    justify-content: center;
  }
}
</style>