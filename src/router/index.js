import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LogIn from "../views/LogIn.vue";
import AboutUs from "../views/AboutUs.vue";
import ProductView from "../views/ProductView.vue";
import SkinCare from "../components/SkinCare.vue";
import HairCare from "../components/HairCare.vue";
import PerfuMe from "../components/PerfuMe.vue";
import AllProduct from "../components/AllProduct.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import ProfileView from "../views/ProfileView.vue";
import CheckOut from "../views/CheckOut.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
  {
    path: "/about",
    name: "about",
    component: AboutUs,
  },
  {
    path: "/product",
    name: "product",
    component: ProductView,
  },
  {
    path: "/all",
    name: "all-product",
    component: AllProduct,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/skin",
    name: "skin-care",
    component: SkinCare,
  },
  {
    path: "/hair",
    name: "hair-care",
    component: HairCare,
  },
  {
    path: "/perfume",
    name: "perfume",
    component: PerfuMe,
  },
  {
    path: "/cart",
    name: "cart",
    component: ShoppingCart,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckOut,
  },
  {
    path: "/sign",
    name: "sign",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUp.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
