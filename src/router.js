import Vue from 'vue'
import Router from 'vue-router'

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
      component: import(/* webpackChunkName: 'home' */ './views/home.vue'),
    },
    {
      path: '*',
      component : () => import(/* webpackChunkName: '404' */ '@/views/404.vue'),
    },
    {
      path : '/projects',
      component : () => import(/* webpackChunkName: '404' */ '@/views/404.vue'),
    },
    {
      path :'/projects/:id',
      component : () => import(/* webpackChunkName: 'project' */ '@/views/project.vue'),
    },
    {
      path :'/projects/:id/edit',
      component : () => import(/* webpackChunkName: 'edit' */ '@/views/project-edit.vue')
    },
    {
      path :'/login',
      component : () => import(/* webpackChunkName: 'login' */ '@/views/login.vue')
    },
    {
      path :'/create/:cat',
      component : () => import(/* webpackChunkName: 'create-project' */ '@/views/project-create.vue')
    }
  ]
})
