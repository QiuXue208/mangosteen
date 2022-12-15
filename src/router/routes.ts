
import type { RouteRecordRaw } from 'vue-router'
import { Home } from '../views/home/index'
import { Login } from '../views/login/index'
import { Welcome } from '../views/welcome'
import { First } from '../views/welcome/components/First'
import { Fourth } from '../views/welcome/components/Fourth'
import { Second } from '../views/welcome/components/Second'
import { Third } from '../views/welcome/components/Third'

const appPage: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/welcome',
    component: Welcome,
    children: [
      {
        path: 'first',
        component: First
      },
      {
        path: 'second',
        component: Second
      },
      {
        path: 'third',
        component: Third
      },
      {
        path: 'fourth',
        component: Fourth
      }
    ]
  }
]

const routes: RouteRecordRaw[] = appPage

export default routes
