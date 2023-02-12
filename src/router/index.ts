import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/main/Main.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/main",
      component: () => import("@/views/main/Main.vue"),
    },
    {
      path: "/login",
      component: () => import("@/views/login/Login.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("@/views/not-found/NotFound.vue"),
    },
  ],
});

export default router;
