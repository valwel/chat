<template>
  <div class="chat">
    <sidebar-comp :user="user"></sidebar-comp>
    <chat-comp
      v-if="user"
      @onAddMessage="loadMessages"
      :messages="messages"
      :user="user"
    />
  </div>
</template>

<script setup lang="ts">
import { messagesService } from "@/api/messagesService";
import { userService } from "@/api/userService";
import SidebarComp from "@/components/SidebarComp.vue";
import ChatComp from "@/components/ChatComp.vue";
import { onBeforeMount, ref } from "vue";
import { IUser } from "@/models/userService.interface";
import { IMessage } from "@/models/messagesService.interface";

const user = ref<IUser>();
const messages = ref<IMessage[]>([]);

loadMessages();
function loadMessages() {
  messagesService.loadMessages();
  messages.value = [...messagesService.messages];
}
onBeforeMount(() => {
  userService.getUser();
  if (!userService.user) {
    return;
  }
  user.value = userService.user;
});
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  background-color: rgba(23, 33, 43, 1);
  max-width: 100%;
  height: 100vh;
  position: relative;
}
</style>
