<template>
  <div>
    <h2>ログイン</h2>
    <form @submit.prevent="login">
      <InputEmail />
      <Password />
      <LoginButton />
    </form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { InputEmail } from "../../atoms/InputEmail";
import { Password } from "../../atoms/Password";
import { LoginButton } from "../../atoms/LoginButton";

export default defineComponent({
  components: {
    InputEmail,
    Password,
    LoginButton,
  },
  setup() {
    const InputEmail = ref("");
    const password = ref("");

    const login = () => {
      // ログインロジックをここに記述します
      // APIリクエストや他の認証メカニズムを使用することができます

      // ログインロジックの例
      if (InputEmail.value === "admin" && password.value === "password") {
        // ログイン成功
        // ユーザーをダッシュボードやホームページにリダイレクトします
        router.push("/dashboard");
      } else {
        // ログイン失敗
        alert("無効なユーザー名またはパスワードです");
      }
    };

    return {
      InputEmail,
      password,
      login,
    };
  },
});
</script>