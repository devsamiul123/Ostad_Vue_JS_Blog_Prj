<script setup>
import { ref } from 'vue'
import {useRoute} from 'vue-router'
import {useBlogs} from '../data.js'
import {storeToRefs} from 'pinia'

const router = useRoute()
const id = ref(router.params.id)

const blogStore = useBlogs()
const {filteredBlogs} = storeToRefs(blogStore)

const title = ref('');
const description = ref('');
const blog = ref({});

function updateData() {
    blog.value = {
        title: title.value,
        description: description.value
    }
    //blogStore.addBlogs(blog.value)
}
</script>

<template>
    <h1>Update</h1>
    <label for="title">Title: </label><br/>
    <el-input v-model="title" style="width: 440px" placeholder="Title" :value="filteredBlogs[id-1].title" /><br/>
    <label for="description">Description: </label><br/>
    <el-input v-model="description" style="width: 440px" :rows="5" type="textarea" placeholder="Description" :value="filteredBlogs[id-1].title"/><br/>
    <el-button @click="updateData" type="success">Update</el-button>
</template>

<style scoped>
*{
    margin: 5px 0;
}
</style>