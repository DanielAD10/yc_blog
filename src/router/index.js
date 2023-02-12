import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailPost from '../views/DetailPost.vue'
import CreatePost from '../views/CreatePost.vue'
import TagPost from '../views/TagPost.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/post/:id',
    name: 'detail',
    component: DetailPost,
    props: true
  },
  {
    path: '/create',
    name: 'create',
    component: CreatePost
  },
  {
    path: '/tag/:tag',
    name: 'tag',
    component: TagPost,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
