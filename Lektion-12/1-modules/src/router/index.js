import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import UsersView from '../views/UsersView.vue'
import PostDetails from '../views/PostDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog/post/:id',
    name: 'postDetails',
    component: PostDetails,
    props: true
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
