export default {
    name: "corporationIndex",
    component: () =>
        import(
            /* webpackChunkName: "categories-index" */ "@/modules/corporation/views/IndexCorporation.vue"
        ),
};
