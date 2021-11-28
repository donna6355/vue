import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store.js"
// import Profile from "../views/Profile.vue";
// import Panama from "../views/Panama.vue";
// import Brazil from "../views/Brazil.vue";
// import Hawaii from "../views/Hawaii.vue";
// import Jamaica from "../views/Jamaica.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props:true
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
    path:"/profile/:id",
    name:"Profile",
    component: () => import(/* webpackChunkName: "profile" */ "../views/Profile.vue")
  },
  {
    path:"/destination/:slug",
    name:"Details",
    props:true,
    component: () => import(/* webpackChunkName: "DestDetails" */ "../components/Details.vue"),
    children:[
      {
        path:":expSlug",
        name:"ExpDetails",
        props:true,
        component:() => import("../components/ExpDetail.vue")
      }
    ],
    beforeEnter: (to, from, next) =>{
      const exists = store.destinations.find(
        destination => destination.slug === to.params.slug
      )
      if (exists){
        next()
      }else{
        next({name:"NotFound"})
      }
    }
  },
  {
    path:"/404",
    alias:"*",
    name:"NotFound",
    component: () => import("../views/FourOhFour.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
