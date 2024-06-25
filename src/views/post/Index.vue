<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>List Data</h4>
                        <hr />
                        <router-link :to="{ name: 'post.create' }" class="btn btn-md btn-success">TAMBAH DATA</router-link>
                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Content</th>
                                    <th scope="col-md">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(post, index) in posts" :key="index">
                                    <td>{{ post.title }}</td>
                                    <td>{{ post.content }}</td>
                                    <td class="text-center">
                                        <router-link :to="{ name: 'post.edit', params: { id: post.id } }" class="btn btn-sm btn-primary mx-2">EDIT</router-link>
                                        <button class="btn btn-sm btn-danger">DELETE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
    setup() {
        // reactive state (ref)
        let posts = ref([]);

        // mounted
        onMounted(() => {
            // get API from laravel response data
            axios
                .get('http://localhost:8000/api/post')
                .then((response) => {
                    // assign state post with response data
                    posts.value = response.data.data;
                })
                .catch((error) => {
                    console.log(error.response.data);
                });
        });
        //return
        return {
            posts,
        };
    },
};
</script>

<style>
body {
    background: lightgray;
}
</style>
