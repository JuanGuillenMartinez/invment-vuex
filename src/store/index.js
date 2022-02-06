import { createStore } from "vuex";

import category from "../modules/category/store/category";

const store = createStore({
    modules: {
        category,
    }
});

export default store;
