<template>
    <button class="btn btn-primary">
        <i :class="getIcon()"></i>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'fa-plus'
        }
    },
    methods: {
        getIcon() {
            return `fa ${ this.icon }`
        }
    }
};
</script>

<style scoped>
button {
    border-radius: 100%;
    bottom: 3%;
    height: 60px;
    position: fixed;
    right: 3%;
    width: 60px;
}
button:hover {
    animation: 1ms alternate;
}
</style>
