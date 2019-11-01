import Vue from 'vue'
import VueRouter from 'vue-router'
/**
 * 异步引入
 */
const Home = () => import('../views/home/Home.vue')
const Login = () => import('../views/login/Login.vue')
const ProviderMenu = () => import('../views/menu/ProviderMenu.vue')
const CompanyMenu = () => import('../views/menu/CompanyMenu.vue')
const Action = () => import('../views/action/Action.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'providermenu',
        name: 'providerMenu',
        component: ProviderMenu
      },
      {
        path: 'companymenu',
        name: 'companyMenu',
        component: CompanyMenu
      },
      {
        path: 'action',
        name: 'action',
        component: Action
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
