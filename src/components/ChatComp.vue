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
<script setup lang="ts">
import InputComp from "@/components/InputComp.vue";
import ButtonComp from "@/components/ButtonComp.vue";
import ChatHeader from "./ChatHeader.vue";
import ChatWindow from "./ChatWindow.vue";
import { ref, defineProps, watch, defineEmits } from "vue";
import { IUser } from "@/models/userService.interface";
import { IMessage } from "@/models/messagesService.interface";
import { messagesService } from "@/api/messagesService";

const newMessage = ref<string>("");
watch(newMessage, (newValue) => console.log(newValue));
const props = defineProps<{
  messages: IMessage[];
  user: IUser;
}>();

const emit = defineEmits<{
  (e: "onAddMessage"): void;
}>();
function addMessage() {
  if (!newMessage.value) {
    return;
  }
  messagesService.addMessage(props.user.name, newMessage.value);
  emit("onAddMessage");
  newMessage.value = "";
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
    @media (max-width: 600px) {
      left: -30%;
    }

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
