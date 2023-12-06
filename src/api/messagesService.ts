import { localStorageService } from "./localStorageService";
import { IMessagesService } from "@/models/messagesService.interface";
export const messagesService: IMessagesService = {
  key: "messages",
  messages: [],
  addMessage(name: string, text: string) {
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
