import { localStorageService } from "./localStorageService";
export const messagesService = {
  messages: [
    {
      id: "1",
      name: "John Doe",
      text: "Привет!",
      timestamp: "2021-10-15T09:34:00Z",
      avatarURL: null,
    },
    {
      id: "2",
      name: "John Doe",
      text: "У меня тоже все хорошо",
      timestamp: "2021-10-15T09:34:00Z",
      avatarURL: null,
    },
  ],
  addMessage(name, text) {
    //добавление одного сообщения
    this.messages.push({
      id: this.messages.length,
      name,
      text,
      timestamp: new Date(),
      avatarURL: null,
    });
    localStorageService.saveMessages();
  },
};
