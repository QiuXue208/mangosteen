
import type { RouteRecordRaw } from 'vue-router'
import { Home } from '../views/home/index'
import { Login } from '../views/login/index'

const appPage: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const routes: RouteRecordRaw[] = appPage

export default routes
