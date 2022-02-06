<template>
    <div class="container-info-category">
        <div class="card card-body">
            <div class="info-category">
                <h2 class="card-title">Nombre de la categoría</h2>
                <div>
                    <label class="form-label">ID de categoría</label>
                    <input
                        value="1"
                        type="number"
                        class="form-control"
                        readonly
                    />
                </div>
                <div>
                    <label class="form-label">Nombre</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Nombre de la categoría"
                    />
                </div>
                <div>
                    <label class="form-label">Creado el</label>
                    <input
                        type="datetime-local"
                        class="form-control"
                        id="created-at"
                        name="created_at"
                        value="2022-02-04T19:30"
                    />
                </div>
                <div>
                    <label class="form-label">Creado el</label>
                    <input
                        type="datetime-local"
                        class="form-control"
                        id="updated_at"
                        name="updated_at"
                        value="2022-02-04T19:30"
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
            currentCategory: null
        }
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapGetters('category', ['categoryById']),
        // getCurrentCategory() {
        //     const id = this.$router.params.id;
        //     return this.categoryById( id )
        // },
    },
    created() {
        console.log(this.id);
        // this.currentCategory = this.getCurrentCategory();
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
