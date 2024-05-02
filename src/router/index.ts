import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../App.vue'
//import Ads from '../app-ads.txt'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
   //  name: 'home',
   //  component: HomeView
//   },
   
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
