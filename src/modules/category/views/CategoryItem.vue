<template>
    <div class="container-info-category">
        <div class="card card-body">
            <div class="info-category">
                <h2 class="card-title">Nombre de la categoría</h2>
                <div>
                    <label class="form-label">ID de categoría</label>
                    <input
                        :value="currentCategory.id"
                        type="number"
                        class="form-control"
                        readonly
                    />
                </div>
                <div>
                    <label class="form-label">Nombre</label>
                    <input
                        :value="currentCategory.name"
                        type="text"
                        class="form-control"
                        placeholder="Nombre de la categoría"
                    />
                </div>
                <div>
                    <label class="form-label">Creado el</label>
                    <input
                        :value="currentCategory.created_at"
                        type="datetime-local"
                        class="form-control"
                        id="created_at"
                        name="created_at"
                    />
                </div>
                <div>
                    <label class="form-label">Actualizado el</label>
                    <input
                        :value="currentCategory.updated_at"
                        type="datetime-local"
                        class="form-control"
                        id="updated_at"
                        name="updated_at"
                    />
                </div>
            </div>
        </div>
    </div>
    <FloatButton icon="fa-floppy-disk" />
</template>

<script>
import FloatButton from "../components/FloatButton.vue";
import { mapGetters } from "vuex";
export default {
    components: {
        FloatButton,
    },
    data() {
        return {
            currentCategory: null,
            currentDate: null,
        };
    },
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapGetters("category", ["categoryById"]),
        created_at() {
            const utcDate = new Date(this.currentCategory.created_at);
            // const localDate = utcDate.toLocaleString();
            // console.log(localDate);
            return utcDate;
        },
        // updated_at() {

        // }
    },
    methods: {
        getCurrentCategory() {
            return this.categoryById(this.id);
        },
        showCurrentCategory() {
            const category = this.getCurrentCategory();
            this.currentCategory = category;
        },
    },
    watch: {
        id() {
            this.showCurrentCategory();
        },
    },
    created() {
        this.showCurrentCategory();
    },
};
</script>
<style scoped>
.info-category {
    margin: 24px;
}
.container-info-category {
    margin: 16px;
}
.card-title {
    margin-bottom: 32px;
}
input {
    margin-bottom: 12px;
}
</style>
