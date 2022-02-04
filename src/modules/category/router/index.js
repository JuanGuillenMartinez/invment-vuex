export default {
    name: "categories",
    component: () =>
        import(
            /* webpackChunkName: "categories-entry" */ "../layouts/Categories.vue"
        ),
    children: [
        {
            path: "",
            name: "no-entry-selected",
            component: () =>
                import(
                    /* webpackChunkName: "categories-no-entry" */ "../views/NoEntrySelected.vue"
                ),
        },
    ],
};
