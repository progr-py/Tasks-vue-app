import { createRouter, createWebHistory } from 'vue-router'

import tasks from '../components/tasks.vue'
import menu from '../components/menu.vue'
import profile from '../components/profile.vue'
import createTask from '../components/createTask.vue'
import taskHistory from '../components/taskHistory.vue'
import news from '../components/news.vue'
const routes = [

  {
    path: '/',
    component: tasks

  },
  {
    path: '/menu',
    component: menu

  },
  {
    path: '/profile',
    component: profile

  }
  ,
  {
    path: '/task-history',
    component: taskHistory

  }
  ,
  {
    path: '/news',
    component: news

  }
  ,
  {
    path: '/create-task',
    component: createTask

  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
