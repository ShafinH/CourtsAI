import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Deception from "../views/Deception.vue"
import Bail from "../views/Bail.vue"
import About from "../views/About.vue"
import Sentencing from "../views/Sentencing.vue"

import firebase from 'firebase/app'
import 'firebase/auth'

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    name: "About",
    component: About
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/deception",
    name: "Deception",
    component: Deception,
    meta: { requiresAuth: true }
  },
  {
    path: "/bail",
    name: "Bail",
    component: Bail,
    meta: { requiresAuth: true }
  },
  {
    path: "/sentence",
    name: "Sentencing",
    component: Sentencing,
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
})

export default router;
