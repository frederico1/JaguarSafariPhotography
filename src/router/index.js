/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AOS from "aos";
import "aos/dist/aos.css";

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
    path: "/tour4nights",
    name: "4nights",
    component: () => import("../views/TourFourNights.vue"),
  },
  {
    path: "/tour6nights",
    name: "6nights",
    component: () => import("../views/TourSixNights.vue"),
  },
  {
    path: "/tour7nights",
    name: "7nights",
    component: () => import("../views/TourSevenNights.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
});

export default router;
