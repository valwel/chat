import { localStorageService } from "./localStorageService";

export const userService = {
  key: "user",
  user: null,
  login(name) {
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
