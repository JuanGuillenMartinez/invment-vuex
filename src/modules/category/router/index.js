export default {
    name: "categories",
    component: () =>
        import(
            /* webpackChunkName: "categories-index" */ "../layouts/Categories.vue"
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
