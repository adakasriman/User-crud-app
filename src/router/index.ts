// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard }, 
  { path: '/signup', component: Signup },
  { path: '/', redirect: '/login' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
