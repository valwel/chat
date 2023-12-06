import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";
import MainView from "../views/MainView.vue";
import { userService } from "@/api/userService";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: LoginView,
  },
  {
    path: "/main",
    name: "main",
    component: MainView,
    beforeEnter: () => {
      userService.fetchUserFromLS();
      const user = userService.getUser();
      return !!user || { name: "home" };
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
