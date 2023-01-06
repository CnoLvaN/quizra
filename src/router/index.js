import { createRouter, createWebHistory } from 'vue-router'
import { NhostClient } from '@nhost/vue'
import Home from '../views/Home.vue'

const nhost = new NhostClient({
  subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN,
  region: import.meta.env.VITE_NHOST_REGION
})

console.log('nhost', nhost)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rooms/:id/quiz',
    name: 'Quiz',
    component: () => import(/* webpackChunkName: "quiz" */ '../views/Quiz.vue')
  },
  {
    path: '/rooms/:id/finish',
    name: 'Finish',
    component: () => import(/* webpackChunkName: "finish" */ '../views/Finish.vue')
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import(/* webpackChunkName: "join" */ '../views/Join.vue')
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: () => import(/* webpackChunkName: "rooms" */ '../views/Rooms.vue')
  },
  {
    path: '/rooms/:id',
    name: 'Room',
    component: () => import(/* webpackChunkName: "room" */ '../views/Room.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  if (to.path === '/profile' && !(await nhost.auth.isAuthenticatedAsync())) {
    return '/sign-in'
  }
  return true
})

export default router
