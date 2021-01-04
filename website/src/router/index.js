import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/login&register',
    name: 'LoginRegister',
    component: () => import('../views/LoginRegister')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/Setting')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/History')
  },
  {
    path: '/lovelist',
    name: 'Lovelist',
    component: () => import('../views/LoveList')
  },
  {
    path: '/comments',
    name: 'Comments',
    component: () => import('../views/Comments')
  },
  {
    path: '/mycomments',
    name: 'MyComments',
    component: () => import('../views/MyComments')
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import('../views/Manage')
  }
]


const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
