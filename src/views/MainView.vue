<template>
  <div class="chat">
    <ul class="chat__users">
      <li class="chat__user">
        <div class="avatar-wrapper">
          <img src="" alt="" class="chat__user-avatar" />
        </div>
        <div class="chat__user-nickname">nickname</div>
      </li>
    </ul>
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
            :class="{ 'jc-r': message.name === `${'valwel'}` }"
          >
            <div class="messages-list__item-contant">
              <div
                v-if="i === 0 || messages[i - 1].name !== message.name"
                class="messages-list__item-nickname"
                :class="{ 'jc-r': message.name === `${'valwel'}` }"
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
        <form
          @submit.prevent="addMessage('valwel', newMessage)"
          class="chat__input-wrapper"
        >
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
console.log(localStorageService);
export default {
  data() {
    return {
      newMessage: null,
      messages: []
    }
  },
  methods: {
    addMessage(name, text) {
      messagesService.addMessage(name, text);
      this.newMessage = null;
      this.loadMessages();
    },
    loadMessages() {
      localStorageService.loadMessages();
      this.messages = [...messagesService.messages];
    }
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
  max-width: 810px;
  margin: 0 auto;

  &__users {
    width: 30%;
    border: 1px solid rgba(14, 22, 33, 1);
    padding: 60px 15px;
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
    height: 600px;
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
    // position: absolute;
    // right: 0;
    // bottom: 0;
    // left: 0;
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
  // height: 100%;
  // max-height: 100%;
  display: flex;
  flex-direction: column;
  // overflow: auto;
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
