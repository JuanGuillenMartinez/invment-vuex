<template>
    <custom-loader v-if="isLoadingComponent" :isLoading="isLoadingComponent" />
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
            <CategoryListItem
                v-for="category in getCategoriesByName"
                :key="category.id"
                :category="category"
            />
        </div>
    </div>
</template>

<script>
import CategoryListItem from "./CategoryListItem.vue";
import { mapActions, mapGetters } from "vuex";
import CustomLoader from './CustomLoader.vue';

export default {
    components: { CategoryListItem, CustomLoader },
    data() {
        return {
            inputSearch: "",
        };
    },
    computed: {
        ...mapGetters("category", ['categoriesByName', 'isLoadingComponent']),
        getCategoriesByName() {
            return this.categoriesByName( this.inputSearch );
        },
    },
    methods: {
        ...mapActions('category', [ 'getCategoriesList' ]),
    },
    created() {
        this.getCategoriesList();
    }
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
