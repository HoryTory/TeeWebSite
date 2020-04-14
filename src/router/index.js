import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Home from "@/components/Home";
import Product from "@/components/Product";
import News from "@/components/News";
import Culture from "@/components/Culture";
import Activity from "@/components/Activity";
import Aboutus from "@/components/Aboutus";
import Main from '@/components/Main'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home",
      component: Main,
      children: [
        {
          path: "/home",
          name: "Home",
          component: Home
        },
        {
          path: "/product",
          name: "Product",
          component: Product
        },
        {
          path: "/news",
          name: "News",
          component: News
        },
        {
          path: "/culture",
          name: "Culture",
          component: Culture
        },
        {
          path: "/activity",
          name: "Activity",
          component: Activity
        },
        {
          path: "/aboutus",
          name: "Aboutus",
          component: Aboutus
        }
      ] 
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});
