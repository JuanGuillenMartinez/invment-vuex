<template>
    <Navbar />
    <div class="container-layout">
        <CategoriesList />
        <router-view />
    </div>
</template>

<script>
import CategoriesList from "../components/CategoryList.vue";
import Navbar from "../components/Navbar.vue";
export default {
    components: {
        Navbar,
        CategoriesList,
    },
};
</script>

<style scoped>
.container-layout {
    display: grid;
    grid-template-columns: 3fr 7fr;
    column-gap: 10px;
}
</style>
