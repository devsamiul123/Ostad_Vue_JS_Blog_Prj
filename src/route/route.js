import {createRouter, createWebHistory} from 'vue-router'

import Home from '../components/Home.vue'
import Blog from '../components/Blog.vue'
import Add from '../components/Add.vue'
import Edit from '../components/Edit.vue'
import EditForm from '../components/EditForm.vue'
import Delete from '../components/Delete.vue'

const routes = [
    {
        path : '/',
        component : Home
    },
    {
        path : '/blog/:id',
        component : Blog,
        name : 'blog'
    },
    {
        path : '/add',
        component : Add
    },
    {
        path : '/edit',
        component : Edit
    },
    {
        path : '/edit-form/:id',
        component : EditForm,
        name : 'EditForm'
    },
    {
        path : '/delete',
        component : Delete
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes
})

export default router