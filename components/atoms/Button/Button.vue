<template>
  <div>
    <button type="submit" class="login-button">{{ text }}</button>
    <!-- <button @click="$emit('clickSubmit')" type="button">{{ text }}</button> -->
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "✉︎ メールアドレスでログインする" },
    color: { type: String, default: "#2d9a9e" },
    borderRadius: { type: String, default: "10px" },
    fontsize: { type: String, default: "18px" },
  },
  //   const emit = defineEmits(["clickSubmit"]);
  // const props = defineProps({
  //   text: {type: String,default:'送信'}
  // })
};
</script>

<style lang="scss" scoped>
.login-button {
  padding: 15px 25px;
  background-color: v-bind(color);
  color: #fff;
  border-radius: v-bind(borderRadius);
  font-size: v-bind(fontsize);
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
}
</style>
