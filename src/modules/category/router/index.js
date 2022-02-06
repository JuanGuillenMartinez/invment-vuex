export default {
    name: "categories",
    component: () =>
        import(
            /* webpackChunkName: "categories-index" */ "../layouts/CategoryIndex.vue"
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
        // con la propiedad de props como true, bindeamos los parámetros que sean mandados por url a una propiedad recibida desde el componente al que se dirige. hay que asegurarse de que en el componente de destino haya una propiedad con el nombre exacto a como se enviá en el path.
        {
            path: ":id",
            name: "category",
            component: () =>
                import(
                    /* webpackChunkName: "category-view" */ "../views/CategoryItem.vue"
                ),
            props: true,
        },
    ],
};
