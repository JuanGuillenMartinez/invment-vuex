<template>
    <div class="container-info-category">
        <div class="card card-body">
            <div class="info-category">
                <h2 class="card-title">Nombre de la categoría</h2>
                <div>
                    <label class="form-label">ID de categoría</label>
                    <input
                        v-model="currentCategory.id"
                        type="number"
                        class="form-control"
                        readonly
                    />
                </div>
                <div>
                    <label class="form-label">Nombre</label>
                    <input
                        v-model="currentCategory.name"
                        type="text"
                        class="form-control"
                        placeholder="Nombre de la categoría"
                    />
                </div>
                <button type="button" class="btn btn-danger btn-delete" @click="destroy">
                    Eliminar
                </button>
            </div>
        </div>
    </div>
    <FloatButton @on:click="update" icon="fa-floppy-disk" />
</template>

<script>
import FloatButton from '../components/FloatButton.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        FloatButton,
    },
    data() {
        return {
            currentCategory: null,
        };
    },
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapGetters('category', ['categoryById']),
    },
    methods: {
        ...mapActions('category', ['updateCategory', 'deleteCategory']),
        getCurrentCategory() {
            return this.categoryById(this.id);
        },
        showCurrentCategory() {
            const category = this.getCurrentCategory();
            this.currentCategory = category;
        },
        update() {
            const data = {
                id: this.currentCategory.id,
                name: this.currentCategory.name,
            };
            this.updateCategory(data);
        },
        destroy() {
            this.deleteCategory(this.currentCategory.id);
        }
        
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
.btn-delete {
    float: left;
}
</style>
