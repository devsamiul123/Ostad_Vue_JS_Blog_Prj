<script setup>
import {useBlogs} from '../data.js'
import {storeToRefs} from 'pinia'

const blogStore = useBlogs()
const {filteredBlogs} = storeToRefs(blogStore)

</script>

<template>
    <h1>Edit</h1>
    <el-row :gutter="20">
        <el-col :span="8" v-for="i in filteredBlogs" :key="i.id">
            <el-card style="max-width: 480px">
                <h2>{{ i.title }}</h2>
                <router-link :to="{name: 'EditForm', params: { id: i.id }}"><el-button type="success">Edit</el-button></router-link>
            </el-card>
        </el-col>
    </el-row>
    
</template>

<style scoped>

</style>