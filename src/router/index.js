/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/tours",
    name: "tours",
    component: () => import("../views/ToursView.vue"),
  },

  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },

  {
    path: "/jaguar-safari",
    name: "jaguarsafari",
    component: () => import("../views/JaguarSafariView.vue"),
  },

  {
    path: "/tour4days",
    name: "4days",
    component: () => import("../views/TourFourDays.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
