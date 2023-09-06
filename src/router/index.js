import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from "@/store.js" 

//import Vue from 'vue';
//import VueRouter from 'vue-router';
//import HomeView from '../views/HomeView.vue'

//Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      needsUser: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});  //ovo je iz vue router 4 doc

router.beforeEach( (to, from, next) => {
  //console.log("Stara ruta ", from.name, " -> nova ruta ", to.name, 'korisnik', store.currentUser)

  const noUser = store.currentUser === null;

  if (noUser && to.meta.needsUser) {
    next('login');
  }
  else { 
    next();
  }
  
});

export default router  

