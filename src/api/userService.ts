import { localStorageService } from "./localStorageService";
import { IUserService } from "@/models/userService.interface";

export const userService: IUserService = {
  key: "user",
  user: null,
  login(name: string) {
    this.user = {
      name,
    };
    localStorageService.setItem(this.key, this.user);
  },
  logout() {
    this.user = null;
    localStorageService.setItem(this.key, this.user);
  },
  getUser() {
    return this.user;
  },
  fetchUserFromLS() {
    this.user = localStorageService.getItem(this.key);
  },
};
