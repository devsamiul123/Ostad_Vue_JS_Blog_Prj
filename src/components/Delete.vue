<script setup>
import {useBlogs} from '../data.js'
import {storeToRefs} from 'pinia'

const blogStore = useBlogs()
const {filteredBlogs} = storeToRefs(blogStore)
const deleteItem = blogStore.deleteItem;

</script>

<template>
    <h1>Delete</h1>
    <el-row :gutter="20">
        <el-col :span="8" v-for="i in filteredBlogs" :key="i.id">
            <el-card style="max-width: 480px">
                <h2>{{ i.title }}</h2>
                <el-button @click="deleteItem(i.id)" type="danger">Delete</el-button>
            </el-card>
        </el-col>
    </el-row>
    
</template>

<style scoped>

</style>