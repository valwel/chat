<template>
  <div class="modal" v-if="show">
    <div class="modal__contant">
      <h2>Вы действительно хотите выйти?</h2>
      <div class="modal__wrapper">
        <button @click="$emit('close')" class="modal__button">Остаться</button>
        <button @click="logout" class="modal__button">Разлогиниться</button>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
    }
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    logout() {
      this.$router.push('/');
    },
    close() {
      this.showModal = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.8);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  &__contant {
    width: 60%;
    height: 30%;
    padding: 20px;
    color: rgb(255, 255, 255);
    background-color: rgba(23, 33, 43, 1);
  }

  &__wrapper {
    display: flex;
    justify-content: center;
  }

  &__button {
    margin: 150px 5px 0 5px;
    font-size: 15px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    padding: 6px 20px;
    background-color: rgba(81, 136, 193, 1);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
