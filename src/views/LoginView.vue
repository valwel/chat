<template>
  <div class="login">
    <div class="login__logo"><img src="../assets/login_logo.svg" alt="" /></div>
    <h1 class="login__title">Авторизация</h1>
    <h2 class="login__subtitle">
      Введите пожалуйста свой ник для дальнейшей авторизации
    </h2>
    <input
      class="login__input"
      type="text"
      name=""
      id=""
      placeholder="Введите свой ник"
    />
    <button class="login__button">войти</button>
  </div>
</template>

<style lang="scss" scoped>
.login {
  max-width: 452px;
  padding: 39px 77px 50px 77px;
  background-color: rgba(23, 33, 43, 1);
  color: rgba(255, 255, 255, 1);
  margin: auto;

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
    font-size: 16px;
    margin-top: 37px;
    padding: 0 8px 13px 8px;
    border: none;
    border-bottom: 1px solid rgba(70, 84, 97, 1);
    line-height: 1.4em;
    outline: none;
    color: inherit;
    width: 100%;
    background: none;
  }

  &__button {
    margin-top: 42px;
    font-size: 15px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    padding: 13px 40px;
    background-color: rgba(81, 136, 193, 1);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
