import { localStorageService } from "./localStorageService";
export const messagesService = {
  key: "messages",
  messages: [],
  addMessage(name, text) {
    this.messages.push({
      id: this.messages.length,
      name,
      text,
      timestamp: new Date(),
      avatarURL: null,
    });
    localStorageService.setItem(this.key, this.messages);
  },
  loadMessages() {
    this.messages = localStorageService.getItem(this.key) || [];
  },
};
