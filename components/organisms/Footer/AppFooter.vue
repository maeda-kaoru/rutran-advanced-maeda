<template>
  <footer>
    <div class="footer-area">
      <a href="#"><img src="../../../assets/img/freelance-start-logo.png" /></a>
      <a href="#" class="copyright">©︎ Brocante Inc</a>
    </div>
  </footer>
</template>



<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({});
</script>

<style lang='scss' scoped>
footer {
  width: 100%;
  display: flex;
  justify-content: center;
  .footer-area {
    width: 70%;
    display: flex;
    flex-direction: column;
    img {
      width: 200px;
      height: 20px;
    }
    .copyright {
      color: #888888;
      text-decoration: none;
      font-size: 10px;
      font-weight: bold;
    }
  }
}
</style>