<template>
    <div class="vld-parent">
        <loading
            :active="isLoading"
        />
    </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
    props: {
        isLoading: {
            type: Boolean,
            required: true
        }
    },
    components: {
        Loading,
    },
};
</script>
<style scoped>
.vld-parent {
    height: 100%;
}
</style>
