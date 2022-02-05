<template>
    <div>
        <h1>Categoría no seleccionada</h1>
        <FloatButton />
    </div>
</template>

<script>
import FloatButton from '../components/FloatButton.vue';

export default {
    components: {
        FloatButton,
    }
};
</script>

<style scoped>
div {
    align-self: center;
}
h1 {
    text-align: center;
}
</style>
