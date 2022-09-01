import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";

const routes = [
  {
    path: "/",
    name: "",
    component: LandingView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/posts",
    name: "posts",
    component: () => import("../views/PostsView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/userposts",
    name: "userposts",
    component: () => import("../views/userPostsView.vue"),
  },
  {
    path: "/posts/:id",
    name: "singlepost",
    component: () => import("../views/singlePost.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
