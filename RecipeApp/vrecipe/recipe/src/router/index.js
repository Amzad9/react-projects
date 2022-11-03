import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/viewcart",
      name: "viewcart",
      component: () => import("../views/VewCart.vue"),
    },
    {
      path: "/cuisine/:id",
      name: "cuisine",
      component: () => import("../views/CuisineVue.vue"),
    
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../views/ProductVue.vue"),
    
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactVue.vue"),
    
    },
  ],
});

export default router;
