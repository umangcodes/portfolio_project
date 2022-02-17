import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js";
import Home from "../views/Home.vue";
import SecretPathV1 from "../views/SecretPathV1.vue";
import Projects from "../views/Projects.vue";
import Error404 from "../components/errors/error404.vue";
import Card from "../views/PersonalCard.vue";
import DevelopersCorner from "../views/DevelopersCorner.vue";
import DcFrontEnd from "../components/dc/DcFrontEnd.vue";
import DcTools from "../components/dc/DcTools";
import DcMisc from "../components/dc/DcMisc";
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
      if (store.state.passcode == "Pass!") {
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
    path: "/DC",
    name: "DC",
    component: DevelopersCorner,
  },
  {
    path: "/dc/frontEnd",
    name: "dcfrontend",
    component: DcFrontEnd,
  },
  {
    path: "/dc/tools",
    name: "dctools",
    component: DcTools,
  },
  {
    path: "/dc/misc",
    name: "dcmisc",
    component: DcMisc,
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

router.beforeEach((to, from, next) => {
  window.scroll(0, 0);
  next();
});

export default router;
