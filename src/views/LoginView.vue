<template>
  <div class="container">
    <div class="login">
      <div class="login__logo">
        <img src="../assets/login_logo.svg" alt="" />
      </div>
      <h1 class="login__title">Авторизация</h1>
      <h2 class="login__subtitle">
        Введите пожалуйста свой ник для дальнейшей авторизации
      </h2>
      <form @submit.prevent="login">
        <input-comp
          class="login__input"
          v-model="name"
          placeholder="Введите свой ник"
        ></input-comp>
        <button-comp type="submit" class="login__button">войти</button-comp>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userService } from "@/api/userService";
import ButtonComp from "@/components/ButtonComp.vue";
import InputComp from "@/components/InputComp.vue";
import router from "@/router";
import { ref } from "vue";
const name = ref<string>("");
function login() {
  if (!name.value) {
    return;
  }
  userService.login(name.value);
  router.push("/main");
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgba(35, 47, 61, 1);
}

.login {
  max-width: 452px;
  padding: 39px 77px 50px 77px;
  background-color: rgba(23, 33, 43, 1);
  color: rgba(255, 255, 255, 1);
  margin: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  &__logo {
    max-width: 139px;
    margin: 0 auto;
    background-color: rgba(35, 47, 61, 1);
    border-radius: 50%;

    img {
      padding: 37px 27px;
    }
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    padding-top: 29px;
  }

  &__subtitle {
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(127, 145, 164, 1);
    padding-top: 13px;
  }

  &__input {
    margin-top: 37px;
  }

  &__button {
    margin-top: 42px;
  }
}
</style>
