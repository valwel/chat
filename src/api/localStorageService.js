import { messagesService } from "./messagesService";
console.log(messagesService.messages);
export const localStorageService = {
  loadMessages() {
    //загрузка сообщений из ls
    if (localStorage.getItem("messages")) {
      messagesService.messages = JSON.parse(localStorage.getItem("messages"));
    }
  },
  saveMessages() {
    //запись сообщений в ls
    const parsed = JSON.stringify(messagesService.messages);
    localStorage.setItem("messages", parsed);
  },
};
