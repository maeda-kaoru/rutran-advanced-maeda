

<template>
  <div>
    <label for="InputEmail">メールアドレス</label>
    <input type="email" id="InputEmail" v-model="username" required />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 18px;
  input {
    width: 500px;
    height: 35px;
    background-color: #e8f0fe;
    border-radius: 8px;
    border-color: #d0d1d1;
    font-size: 18px;
  }
}
</style>