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
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
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
