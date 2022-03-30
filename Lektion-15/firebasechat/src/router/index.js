import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ChatView from '../views/ChatView.vue'

import { auth } from '../firebase/config'

const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  console.log('current user in auth guard: ', user)

  if(!user) {
    next({ name: 'Landing' })
  } else {
    next()
  }
}

const requireNoAuth = (to, from, next) => {
  let user = auth.currentUser

  if(user) {
    next({ name: 'Chat' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chat',
    name: 'Chat',
    component: ChatView,
    beforeEnter: requireAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
