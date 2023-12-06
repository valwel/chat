<template>
  <div class="chat__window">
    <ul v-if="messages" class="messages-list">
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
              new Date(message.timestamp).toLocaleTimeString("ru").substr(0, 5)
            }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { IMessage } from "@/models/messagesService.interface";
import { IUser } from "@/models/userService.interface";
defineProps<{
  messages: IMessage[];
  user: IUser;
}>();
</script>
<style lang="scss" scoped>
.chat {
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

    @media (max-width: 600px) {
      left: -30%;
    }
  }

  &__window-nickname {
    color: rgba(83, 135, 193, 1);
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
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
</style>
