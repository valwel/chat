<template>
  <div class="chat">
    <sidebar-comp :user="user"></sidebar-comp>
    <chat-comp @addMessage="addMessage" :messages="messages" :user="user" />
  </div>
</template>

<script lang="js">
import { messagesService } from "@/api/messagesService";
import { userService } from "@/api/userService";
import SidebarComp from '@/components/SidebarComp.vue';
import ChatComp from "@/components/ChatComp.vue";

export default {
  components: {
    SidebarComp,
    ChatComp
},
  data() {
    return {
      messages: [],
      user: null,
    }
  },
  methods: {
    addMessage(newMessage) {
      messagesService.addMessage(this.user.name, newMessage);
      this.loadMessages();
    },
    loadMessages() {
      messagesService.loadMessages();
      this.messages = [...messagesService.messages];
    },
  },
  beforeMount() {
    userService.getUser();
    this.user = userService.user;
  },
  created() {
    this.loadMessages()
  },
}
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
