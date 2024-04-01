<script setup>
import {useBlogs} from '../data.js'
import {storeToRefs} from 'pinia'

const blogStore = useBlogs()
const {filteredBlogs} = storeToRefs(blogStore)

</script>

<template>
    <h1>Home</h1>
    <el-row :gutter="20">
        <el-col :span="8" v-for="i in filteredBlogs" :key="i.id">
            <router-link :to="{name: 'blog', params: { id: i.id }}">
                <el-card style="max-width: 480px">
                    <h2>{{ i.title }}</h2>
                    <p class="text item">{{ i.description.split('').splice(0, 150).join('') + '...' }}</p>
                    <router-link :to="{name: 'blog', params: { id: i.id }}"><el-button type="primary">See More</el-button></router-link>
                </el-card>
            </router-link>
        </el-col>
    </el-row>
    
</template>

<style scoped>

</style>