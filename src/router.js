import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
    
  },
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '*',
      component : () => import('@/views/404.vue'),
    },
    {
      path : '/projects',
      component : () => import('@/views/404.vue'),
    },
    {
      path :'/projects/:id',
      component : () => import('@/views/project.vue'),
    },
    {
      path :'/projects/:id/edit',
      component : () => import( '@/views/project-edit.vue')
    },
    {
      path :'/login',
      component : () => import( '@/views/login.vue')
    },
    {
      path :'/create/:cat',
      component : () => import( '@/views/project-create.vue')
    }
  ]
})
