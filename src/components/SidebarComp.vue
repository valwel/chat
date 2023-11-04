<template>
  <div class="chat__sidebar">
    <modal-comp :show="showModal" @close="showModal = false"></modal-comp>
    <div class="chat__exit">
      <button @click="showModal = true" class="chat__exit-button">
        <img src="@/assets/exit.svg" alt="" />
      </button>
    </div>
    <ul class="chat__users">
      <li v-if="user" class="chat__user">
        <div class="avatar-wrapper">
          <img src="" alt="" class="chat__user-avatar" />
        </div>
        <div class="chat__user-nickname">{{ user.name }}</div>
      </li>
    </ul>
  </div>
</template>
<script lang="js">
import ModalComp from "./ModalComp.vue";
export default {
  components: {
    ModalComp
  },
  data() {
    return {
      showModal: false,
    }
  },
  props: {
    user: Object
  },
}
</script>
<style lang="scss" scoped>
.chat {
  &__sidebar {
    width: 30%;
    border: 1px solid rgba(14, 22, 33, 1);
  }

  &__exit {
    height: 56px;
    display: flex;
    margin-left: 15px;
    align-items: center;
  }

  &__exit-button {
    width: 35px;
    height: 35px;
    appearance: none;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  &__users {
    padding: 0 15px;
  }

  &__user {
    display: flex;
    color: rgba(83, 135, 193, 1);
  }

  .avatar-wrapper {
    border-radius: 50%;
    width: 46px;
    height: 46px;
    background-color: #fff;
  }

  &__user-nickname {
    margin: auto 9px;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
  }
}
</style>
