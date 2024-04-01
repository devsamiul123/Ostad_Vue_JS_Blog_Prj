<script setup>
import { ref } from 'vue'
import {useBlogs} from '../data.js'

const blogStore = useBlogs()

const title = ref('');
const description = ref('');
const blog = ref({});

function saveData() {
    blog.value = {
        title: title.value,
        description: description.value
    }
    blogStore.addBlogs(blog.value)
}
</script>

<template>
    <h1>Add</h1>
    <label for="title">Title: </label><br/>
    <el-input v-model="title" style="width: 440px" placeholder="Title" /><br/>
    <label for="description">Description: </label><br/>
    <el-input v-model="description" style="width: 440px" :rows="5" type="textarea" placeholder="Description"/><br/>
    <el-button @click="saveData" type="primary">Submit</el-button>
</template>

<style scoped>
*{
    margin: 5px 0;
}
</style>