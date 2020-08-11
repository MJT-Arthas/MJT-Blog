import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: '/demo',
    // component: Demo,
    name: 'demo',
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Demo.vue")
  },
  {
    path: '/photo',
    // component: photo,
    name: 'photo',
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Photo.vue")
  },
  {
    path: '/collections',
    // component: Collections,
    name: 'Collections',
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Collections.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
