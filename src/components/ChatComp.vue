<template>
  <div class="chat__header">
    <chat-header />
    <chat-window :messages="messages" :user="user" />
    <div class="chat__input">
      <form @submit.prevent="addMessage" class="chat__input-wrapper">
        <input-comp
          placeholder="Введите сообщение..."
          v-model="newMessage"
        ></input-comp>
        <button-comp type="submit" class="button">Отправить</button-comp>
      </form>
    </div>
  </div>
</template>
<script lang="js">
import InputComp from "@/components/InputComp.vue";
import ButtonComp from "@/components/ButtonComp.vue";
import ChatHeader from "./ChatHeader.vue";
import ChatWindow from "./ChatWindow.vue";

export default {
  components: {
    InputComp,
    ButtonComp,
    ChatHeader,
    ChatWindow
},
  data() {
    return {
      newMessage: null,
    };
  },
  props: {
    messages: {type: Array, default: () => []},
    user: {type: Object, default: () => ({})}
  },
  methods: {
    addMessage() {
      this.$emit('addMessage', this.newMessage);
      this.newMessage = null;
    },
  },
}
</script>
<style lang="scss" scoped>
.chat {
  &__header {
    position: relative;
    width: 100%;
    height: 100vh;
  }
  &__input {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 53px;
    color: #fff;

    .input {
      border: none;
    }

    .button {
      padding: 6px 20px;
      margin: 10px;
    }
  }

  &__input-wrapper {
    display: flex;
    height: 100%;
  }
}
</style>
