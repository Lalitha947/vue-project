import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeaveManagementView from '@/views/LeaveManagementView.vue'
import PerformanceReviewView from '@/views/PerformanceReviewView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
   {
    path: '/leaveManagement',
    name: 'leaveManagement',
    component: LeaveManagementView
  },
  {
    path: '/performanceReview',
    name: 'performanceReview',
    component: PerformanceReviewView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
