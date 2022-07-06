import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue"
import Posts from "@/views/Posts.vue"
import TaipeiDayTrip from "@/views/TaipeiDayTrip.vue"
import PalaceMuseumDayTrip from "@/views/PalaceMuseumDayTrip.vue"
import YokohamaDayTrip from "@/views/YokohamaDayTrip.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/TaipeiDayTrip",
    name: "TaipeiDayTrip",
    component: TaipeiDayTrip,
  },
  {
    path: "/PalaceMuseumDayTrip",
    name: "PalaceMuseumDayTrip",
    component: PalaceMuseumDayTrip,
  },
  {
    path: "/YokohamaDayTrip",
    name: "YokohamaDayTrip",
    component: YokohamaDayTrip,
  },
  {
    path: "/Login",
    name: "login",
    component: Login,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;