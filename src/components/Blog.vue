<script setup>
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import {useBlogs} from '../data.js'
import {storeToRefs} from 'pinia'

const router = useRoute()
const id = ref(router.params.id)

const blogStore = useBlogs()
const {filteredBlogs} = storeToRefs(blogStore)
</script>

<template>

    <h1>Blog</h1>
    <el-card style="max-width: 880px">
        <h2>{{ filteredBlogs[id-1].title }}</h2>
        <p class="text item">{{ filteredBlogs[id-1].description }}</p>
        <h4>Blog Id: {{ filteredBlogs[id-1].id }}</h4>
    </el-card>
</template>

<style scoped>

</style>