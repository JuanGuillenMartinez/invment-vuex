

export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: "about" */ '../layouts/Auth.vue'),
    children: [

    ]
}