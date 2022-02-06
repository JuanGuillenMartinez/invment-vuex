<template>
    <div @click="goToCategory()" class="card card-body">
        <span>{{ category.name }}</span>
        <!-- <p class="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            quidem sed? Reprehenderit iste quasi dolor ratione magnam aperiam
            assumenda odio voluptatum recusandae autem nobis repudiandae
            excepturi numquam, perspiciatis consectetur aliquam.
        </p> -->
    </div>
</template>

<script>
export default {
    props: {
        category: Object
    },
    methods: {
        goToCategory() {
            this.$router.push( { name: 'category', params: { id: 10 } } )
        }
    }
};
</script>

<style scoped>
.card-text {
    margin-top: 12px;
}
div {
    cursor: pointer;
    margin-bottom: 10px;
}
.card-body {
    border-radius: 12px;
}
span {
    font-size: 16px;
}
</style>
