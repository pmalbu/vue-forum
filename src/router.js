import Vue from 'vue'
import Router from 'vue-router'
import PageThreadShow from '@/pages/PageThreadShow'
import Home from './pages/PageHome'
import NotFound from './pages/PageNotFound'
import Forum from '@/pages/PageForum'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: Forum,
      props: true // in order to set route parameters (id) as component props, must set props = true
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: PageThreadShow,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
