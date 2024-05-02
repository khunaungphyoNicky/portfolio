import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../App.vue'
import Ads from '../app-ads.txt'

const routes: Array<RouteRecordRaw> = [
   {
     path: '/',
     name: 'home',
     component: HomeView
   },
   {
     path: '/app-ads.txt',
     name: 'ads',
     component: Ads
   },
   
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
