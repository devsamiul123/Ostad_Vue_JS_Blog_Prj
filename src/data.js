import {defineStore} from 'pinia'

export const useBlogs = defineStore('blogs', {
    state : () => ({
        blogs : [
            {
                id : 1,
                title : 'My First Blog',
                description : 'hello how are you. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quaerat corporis corrupti dolor laudantium, placeat deleniti! Ipsam perferendis aspernatur ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur nihil autem iusto totam commodi aperiam temporibus nemo accusantium enim, sed dolorum magni, amet excepturi animi illo, voluptatem quos eligendi iste rerum quam? Eaque minima provident delectus totam vel dolores sequi! Id asperiores maiores magni sequi alias fuga, quam non.'
            },
            {
                id : 2,
                title : 'Second Super Duper Blog',
                description : 'Thanks for viewing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempora debitis aliquam pariatur aperiam voluptas? Maiores consequatur cumque rem excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur nihil autem iusto totam commodi aperiam temporibus nemo accusantium enim, sed dolorum magni, amet excepturi animi illo, voluptatem quos eligendi iste rerum quam? Eaque minima provident delectus totam vel dolores sequi! Id asperiores maiores magni sequi alias fuga, quam non.'
            },
            {
                id : 3,
                title : 'Third Blog Starting',
                description : 'Welcome to my Blog. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illum itaque explicabo asperiores illo aut autem, dolore facilis alias aliquam tempore repudiandae nobis in ipsam expedita. Repellendus voluptate a aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur nihil autem iusto totam commodi aperiam temporibus nemo accusantium enim, sed dolorum magni, amet excepturi animi illo, voluptatem quos eligendi iste rerum quam? Eaque minima provident delectus totam vel dolores sequi! Id asperiores maiores magni sequi alias fuga, quam non.'
            },
            {
                id : 4,
                title : 'Fourth Blog For You',
                description : 'Lets See. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, dolorum doloribus. Mollitia, deleniti quisquam vel eligendi numquam cumque facilis quis minima dolorem debitis excepturi harum commodi, sapiente reiciendis atque molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur nihil autem iusto totam commodi aperiam temporibus nemo accusantium enim, sed dolorum magni, amet excepturi animi illo, voluptatem quos eligendi iste rerum quam? Eaque minima provident delectus totam vel dolores sequi! Id asperiores maiores magni sequi alias fuga, quam non.'
            },
            {
                id : 5,
                title : 'Fifth Blog The Last blog',
                description : 'Ending Blog. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente adipisci fugiat labore dolorum quisquam consequatur qui molestiae beatae neque et, provident sit velit eveniet quaerat numquam temporibus. Hic, esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur nihil autem iusto totam commodi aperiam temporibus nemo accusantium enim, sed dolorum magni, amet excepturi animi illo, voluptatem quos eligendi iste rerum quam? Eaque minima provident delectus totam vel dolores sequi! Id asperiores maiores magni sequi alias fuga, quam non.'
            },
        ],
        filters : 'all',
        nextId : 6
    }),
    getters : {
        filteredBlogs(){
            return this.blogs
        }
    },
    actions : {
        addBlogs(blog){
            this.blogs.push({id : this.nextId++, title : blog.title, description : blog.description})
        },
        deleteItem(id) {
            console.log('Item Deleting. Id no: ' + id)
        }
    }
});