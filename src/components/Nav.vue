<script setup>

</script>

<template>

    <router-link to="/"><el-button type="primary" plain>Home</el-button></router-link>
    <router-link to="/add"><el-button type="info" plain>Add</el-button></router-link>
    <router-link to="/edit"><el-button type="success" plain>Edit</el-button></router-link>
    <router-link to="/delete"><el-button type="danger" plain>Delete</el-button></router-link>

</template>

<style scoped>
*{
    margin: 0 5px;
}
</style>