import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js";
import Home from "../views/Home.vue";
import SecretPathV1 from "../views/SecretPathV1.vue";
import Projects from "../views/Projects.vue";
import Error404 from "../components/errors/error404.vue";
import Card from "../views/PersonalCard.vue";
const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "error404",
    component: Error404,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/card",
    name: "Card",
    component: Card,
  },
  {
    path: "/secret_path",
    name: "Secret Path 1",
    component: SecretPathV1,
    beforeEnter: (to, from, next) => {
      if (store.state.passcode == "pass!") {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
