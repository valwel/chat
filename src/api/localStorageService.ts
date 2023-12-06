export const localStorageService = {
  getItem: (key: string) => JSON.parse(localStorage.getItem(key) || "null"),
  setItem: (key: string, value: unknown) =>
    localStorage.setItem(key, JSON.stringify(value)),
};
