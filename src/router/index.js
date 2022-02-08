import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import auth from "../modules/auth/router";
import categoriesRoutes from "../modules/category/router";
import corporationRoutes from "../modules/corporation/router";
import NoItemSelected from "../components/NoItemSelected.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/auth",
        ...auth,
    },
    {
        path: "/categories",
        ...categoriesRoutes,
    },
    {
        path: "/corporations",
        ...corporationRoutes,
    },
    {
        path: "/error",
        name: "NoItemSelected",
        component: NoItemSelected,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
router.beforeEach((to) => {
    if (to.name === "category") {
        if (isNaN(parseInt(to.params.id))) return "/categories";
        else return true;
    }
});
export default router;
