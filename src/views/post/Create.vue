<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH DATA</h4>
                        <hr />
                        <form @submit.prevent="store">
                            <div class="form-group">
                                <label for="title" class="font-weight-bold mb-2">TITLE</label>
                                <input type="text" class="form-control" v-model="post.title" placeholder="Masukan Judul Post" />

                                <!-- validation -->
                                <div v-if="validation.title" class="mt-2 alert alert-danger">
                                    {{ validation.title[0] }}
                                </div>
                            </div>

                            <div class="form-group mt-3">
                                <label for="content" class="font-weight-bold mb-2">CONTENT</label>
                                <textarea class="form-control" rows="4" v-model="post.content" placeholder="Masukan Konten Post" />

                                <!-- validation -->
                                <div v-if="validation.content" class="mt-2 alert alert-danger">
                                    {{ validation.content[0] }}
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary mt-4">TAMBAHKAN DATA</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
    setup() {
        // state post
        const post = reactive({
            title: '',
            content: '',
        });

        // state validation
        const validation = ref([]);

        // vue router
        const router = useRouter();

        // method
        function store() {
            let title = post.title;
            let content = post.content;
            axios
                .post('http://127.0.0.1:8000/api/post', {
                    title: title,
                    content: content,
                })
                .then(() => {
                    // redirect ke post index
                    router.push({
                        name: 'post.index',
                    });
                })
                .catch((error) => {
                    // assign state validation with error
                    validation.value = error.response.data;
                });
        }

        // return
        return {
            post,
            validation,
            router,
            store,
        };
    },
};
</script>
