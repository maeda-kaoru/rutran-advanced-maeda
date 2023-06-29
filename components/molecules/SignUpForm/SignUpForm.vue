<template>
  <div>
    <h2>新規会員登録</h2>
    <form @submit.prevent="register">
      <InputEmail v-model="email" />
      <Password v-model="password" />
      <Button text="✉︎ 同意して新規登録する（無料）" color="#F86987" />
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

    const register = () => {
      // 会員登録リクエストを送信
      axios
        .post(
          "https://us-central1-modaneducation.cloudfunctions.net/registration",
          {
            email: email.value,
            password: password.value,
          }
        )
        .then((response) => {
          // 会員登録成功の処理
          console.log(response.data);
          // 登録後のリダイレクトなどの処理を追加します
        })
        .catch((error) => {
          // 会員登録失敗の処理
          console.error(error);
          alert("会員登録に失敗しました");
        });
    };

    return {
      email,
      password,
      register,
    };
  },
});
</script>
