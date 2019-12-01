import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Exercises from '../views/Exercises'
import RoutinesPage from '../views/RoutinesPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/exercises',
    name: 'exercises',
    component: Exercises
  },
  {
    path: '/routines',
    name: 'routines',
    component: RoutinesPage
  },
]

const router = new VueRouter({
  routes
})

export default router
