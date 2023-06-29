<template>
  <div>
    <h2>ログイン</h2>
    <form @submit.prevent="login">
      <InputEmail v-model="email" />
      <Password v-model="password" />
      <Button />
    </form>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";
import { InputEmail } from "../../atoms/InputEmail";
import { Password } from "../../atoms/Password";
import { Button } from "../../atoms/Button";

export default defineComponent({
  components: {
    InputEmail,
    Password,
    Button,
  },
  setup() {
    const email = ref("");
    const password = ref("");

    const login = () => {
      // ログインリクエストを送信
      axios
        .post(
          "https://us-central1-modaneducation.cloudfunctions.net/AuthResource",
          {
            email: email.value,
            password: password.value,
          }
        )
        .then((response) => {
          // ログイン成功の処理
          console.log(response.data);
          // ユーザーをダッシュボードやホームページにリダイレクトします
          // router.push("/dashboard");
        })
        .catch((error) => {
          // ログイン失敗の処理
          console.error(error);
          alert("ログインに失敗しました");
        });
    };

    return {
      email,
      password,
      login,
    };
  },
});
</script>
