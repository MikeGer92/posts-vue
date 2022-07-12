import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'users',
    meta: {layout: 'main'},
    component: () => import('./views/users/Users.vue')
  },
  {
    path: '/users/:id/posts',
    name: 'usersId',
    meta: {layout: 'main'},
    component: () => import('./views/users/_users_id.vue')
  },
  {
    path: '/posts/:id/comments',
    name: 'postId',
    meta: {layout: 'main'},
    component: () => import('./views/_posts_id.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router