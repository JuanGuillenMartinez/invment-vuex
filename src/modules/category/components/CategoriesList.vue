<template>
    <div class="container-view">
        <div class="categories-container container-margin">
            <div class="search-container">
                <div class="search-input">
                    <input
                        v-model="inputSearch"
                        type="text"
                        class="form-control"
                        placeholder="Escriba la categoría"
                    />
                </div>
                <div class="search-button">
                    <p>
                        <button
                            class="btn btn-primary search-btn"
                            type="button"
                        >
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </p>
                </div>
            </div>
            <div class="list-container">
                <div>
                    <h5>Nombre de categoría</h5>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Aliquid, quidem sed? Reprehenderit iste quasi
                        dolor ratione magnam aperiam assumenda odio voluptatum
                        recusandae autem nobis repudiandae excepturi numquam,
                        perspiciatis consectetur aliquam.
                    </p>
                </div>
            </div>
        </div>
        <div class="category-container container-margin">
            <Category />
        </div>
    </div>
</template>

<script>
import Category from "./Category.vue";
export default {
    components: { Category },
    data() {
        return {
            inputSearch: "",
        };
    },
    methods: {},
};
</script>

<style>
.container-view {
    display: grid;
    grid-template-columns: 3fr 7fr;
}
.container-margin {
    margin: 12px;
}
.search-container {
    display: grid;
    grid-template-columns: 8fr 2fr;
    column-gap: 10px;
}
.search-btn {
    width: 100%;
}
.list-container {
    height: calc(100vh - 140px);
    overflow: scroll;
}
/* .categories-container {
    display: grid;
    grid-template-rows: 1fr 9fr;
} */
</style>
