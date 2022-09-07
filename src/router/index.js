import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";

const routes = [
  {
    path: "/",
    name: "",
    component: LandingView,
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/contactView.vue"),
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
    props: true,
  },
  {
    path: "/posts/:id",
    name: "singlepost",
    component: () => import("../views/singlePost.vue"),
    props: true,
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/Admin.vue"),
    props: true,
  },
  {
    path: "/profile/:id",
    name: "profile",
    component: () => import("../views/Profile.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
