<template>
  <div class="chat">
    <modal :show="showModal" @close="showModal = false"></modal>
    <div class="chat__sidebar">
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
    <div class="chat__header">
      <div class="chat__header-container">
        <div class="chat__header-title">Чат</div>
        <div class="chat__header-subtitle">1 участник</div>
      </div>
      <div class="chat__window">
        <ul class="messages-list">
          <li
            v-for="(message, i) in messages"
            :key="message.id"
            class="messages-list__item"
            :class="{ 'jc-r': message.name === user.name }"
          >
            <div class="messages-list__item-contant">
              <div
                v-if="i === 0 || messages[i - 1].name !== message.name"
                class="messages-list__item-nickname"
                :class="{ 'jc-r': message.name === user.name }"
              >
                {{ message.name }}
              </div>
              <div class="messages-list__item-message">
                <span class="messages-list__item-text">{{ message.text }}</span>
                <span class="messages-list__item-time">{{
                  new Date(message.timestamp).toLocaleTimeString()
                }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="chat__input">
        <form @submit.prevent="addMessage" class="chat__input-wrapper">
          <input
            class="input"
            type="text"
            placeholder="Введите сообщение..."
            v-model="newMessage"
            required
            pattern=".{1,}"
            autofocus
          />
          <button type="submit" class="button">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { localStorageService } from '@/api/localStorageService';
import { messagesService } from "@/api/messagesService";
import { userService } from "@/api/userService";
import Modal from "@/components/ModalComp";

console.log(localStorageService);
export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false,
      newMessage: null,
      messages: [],
      user: null,
    }
  },
  methods: {
    addMessage() {
      messagesService.addMessage(this.user.name, this.newMessage);
      this.newMessage = null;
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

  &__header {
    position: relative;
    width: 100%;
    height: 100vh;
  }

  &__header-container {
    padding: 13px 16px 9px 16px;
  }

  &__header-title {
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }

  &__header-subtitle {
    color: rgba(127, 145, 164, 1);
    padding-top: 4px;
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
  }

  &__window {
    position: absolute;
    left: 0;
    top: 56px;
    right: 0;
    bottom: 53px;
    background-color: rgba(14, 22, 33, 1);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  &__window-unit {
  }

  &__window-nickname {
    color: rgba(83, 135, 193, 1);
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
  }

  &__window-wrapper {
  }

  &__window-messages {
  }

  &__window-message {
    padding: 9px 11px;
    background-color: rgba(43, 82, 121, 1);
    color: #fff;
    display: flex;

    border-radius: 5px;
    justify-content: right;
    margin: 7px;
    max-width: 50%;
  }

  &__chat__window-message-text {
    width: 100%;
  }

  &__chat__window-message-time {
  }

  &__window-avatar-wrapper {
  }

  &__window-avatar {
  }

  &__input {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 12px 10px;
    background-color: rgba(23, 33, 43, 1);
    color: #fff;

    .input {
      font-size: 16px;
      border: none;
      line-height: 1.4em;
      outline: none;
      color: inherit;
      width: 100%;
      background: none;
    }

    .button {
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

  &__input-wrapper {
    display: flex;
  }
}

.messages-list {
  display: flex;
  flex-direction: column;
  justify-content: end;
  flex-grow: 1;

  &__item {
    justify-content: left;
    display: flex;
  }

  &__item-contant {
    max-width: 50%;
    margin: 0 7px 4px 7px;
  }

  &__item-nickname {
    color: rgba(83, 135, 193, 1);
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
    justify-content: left;
    display: flex;
  }

  &__item-message {
    padding: 9px 11px;
    background-color: rgba(43, 82, 121, 1);
    color: #fff;
    display: inline-flex;
    justify-content: space-between;
    border-radius: 5px;
    min-width: 123px;
    width: 100%;
  }

  &__item-text {
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }

  &__item-time {
    color: rgba(101, 143, 183, 1);
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
    letter-spacing: 0em;
    padding-left: 13px;
    margin-bottom: -5px;
    display: flex;
    align-items: end;
    justify-content: end;
  }
}

.jc-r {
  justify-content: right;
}

.jc-l {
  justify-content: left;
}

.dn {
  display: none;
}
</style>
