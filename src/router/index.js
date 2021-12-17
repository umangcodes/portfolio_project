import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SecretPathV1 from "../views/SecretPathV1.vue";
import Projects from "../views/Projects.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/secret_path",
    name: "Secret Path 1",
    component: SecretPathV1,
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
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
