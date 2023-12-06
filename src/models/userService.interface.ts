export interface IUser {
  name: string;
}
export interface IUserService {
  key: "user";
  user: IUser | null;
  login: (name: string) => void;
  logout: () => void;
  getUser: () => IUser | null;
  fetchUserFromLS: () => void;
}
