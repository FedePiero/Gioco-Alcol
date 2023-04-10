import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Start from "../views/Start.vue";
import Game from "../views/Game.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/start",
    name: "Start",
    component: Start,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;