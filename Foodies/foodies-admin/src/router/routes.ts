import { RoutesName } from "@/types/route-name";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import DashboardView from "@/views/DashboardView.vue";
import AdminList from "@/views/admin/AdminView.vue";
import BasicView from "@/views/admin/BasicInfo.vue";
import AddBranchView from "@/views/branch/BranchView.vue";
import CategoryView from "@/views/category/Category.vue";
import MenuView from "@/views/menu/Menu.vue";
export default [
  {
    path: "/",
    name: RoutesName.HOME,
    component: HomeView,
    meta: {
      title: RoutesName.HOME,
    },
  },
  {
    path: "/login",
    name: RoutesName.LOGIN,
    component: LoginView,
    meta: {
      title: RoutesName.LOGIN,
    },
  },
  {
    path: "/dashboard",
    name: RoutesName.DASHBOARD,
    component: DashboardView,
    meta: {
      title: RoutesName.DASHBOARD,
    },
    children: [
      {
        path: "/admin",
        name: RoutesName.ADMIN_LIST,
        component: AdminList,
        meta: {
          title: RoutesName.ADMIN_LIST,
        },
      },
      {
        path: "/basic",
        name: RoutesName.BASIC,
        component: BasicView,
        meta: {
          title: RoutesName.BASIC,
        },
      },
      {
        path: "/branch",
        name: RoutesName.BRANCH,
        component: AddBranchView,
        meta: {
          title: RoutesName.BRANCH,
        },
      },
      {
        path: "/category",
        name: RoutesName.CATEGORY,
        component: CategoryView,
        meta: {
          title: RoutesName.CATEGORY,
        },
      },
      {
        path: "/menu",
        name: RoutesName.MENU,
        component: MenuView,
        meta: {
          title: RoutesName.MENU,
        },
      },
    ],
  },
];
