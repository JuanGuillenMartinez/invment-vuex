import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import auth from "../modules/auth/router";
import categoriesRoutes from "../modules/category/router";

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
