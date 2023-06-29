

<template>
  <div>
    <label for="password">パスワード</label>
    <input
      :type="type"
      :id="password"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('updateInput', $event)"
      v-model="email"
      required
    />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { PropType } from "vue";
type InputType = "password";

const props = defineProps({
  type: {
    type: String as PropType<InputType>, // Proptypeで更に型を絞ってあげる。
    default: "password",
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