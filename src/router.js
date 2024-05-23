import HomePage from './pages/HomePage.vue'
import ContactPage from './pages/ContactPage.vue'
import TaskDetails from './pages/TaskDetails.vue'
import CounterPage from './pages/CounterPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/contact',
    component: ContactPage
  },
  {
    path: '/task/:id',
    component: TaskDetails
  },
  {
    path: '/counter',
    component: CounterPage
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
