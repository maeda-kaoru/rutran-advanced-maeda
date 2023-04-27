<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('updateInput', $event)"
  />
</template>
  
<script setup lang="ts">
import { PropType } from "vue";
type InputType = "text" | "number" | "email" | "password";
// memo TypeScriptでは型を絞るだけ絞った方が良いです
// script setupの例を書きましたが、難しかったら今までの書き方でもいいです
// chatGpt使えば コードコピーして script setupに書き直してと言えば変わるので
const props = defineProps({
  type: {
    type: String as PropType<InputType>, // Proptypeで更に型を絞ってあげる。
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
});
</script>
