export interface IMessage {
  id: number;
  name: string;
  text: string;
  timestamp: Date;
  avatarURL?: string | null;
}
export interface IMessagesService {
  key: "messages";
  messages: IMessage[];
  addMessage: (name: string, text: string) => void;
  loadMessages: () => void;
}
