<template>
    <div class="container-search-list">
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
                    <button class="btn btn-primary search-btn" type="button">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </p>
            </div>
        </div>
        <div class="list-container">
            <CategoryListItem />
        </div>
    </div>
</template>

<script>
import CategoryListItem from "./CategoryListItem.vue";
export default {
    components: { CategoryListItem },
    data() {
        return {
            inputSearch: "",
        };
    },
    methods: {},
};
</script>

<style scoped>
.container-search-list {
    margin: 16px;
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
::-webkit-scrollbar {
    display: none;
}
</style>
