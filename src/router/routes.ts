
import type { RouteRecordRaw } from 'vue-router'
import { ItemsList } from '../views/items'
import { Create } from '../views/items/create'
import { Login } from '../views/login/index'
import { Start } from '../views/start'
import { Statistic } from '../views/statistic'
import { CreateOrEdit } from '../views/tag/CreateOrEdit'
import { Welcome } from '../views/welcome'
import { First } from '../views/welcome/components/First'
import { FirstAction } from '../views/welcome/components/FirstAction'
import { Fourth } from '../views/welcome/components/Fourth'
import { FourthAction } from '../views/welcome/components/FourthAction'
import { Second } from '../views/welcome/components/Second'
import { SecondAction } from '../views/welcome/components/SecondAction'
import { Third } from '../views/welcome/components/Third'
import { ThirdAction } from '../views/welcome/components/ThirdAction'

const appPage: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/welcome/first'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/welcome',
    component: Welcome,
    beforeEnter: (to, from, next) => {
      localStorage.getItem('skipFeatures') === 'yes' ? next('/start') : next()
    },
    children: [
      {
        path: 'first',
        name: 'first',
        components: { main: First, footer: FirstAction}
      },
      {
        path: 'second',
        name: 'second',
        components: { footer: SecondAction, main: Second }
      },
      {
        path: 'third',
        name: 'third',
        components: { footer: ThirdAction, main: Third }
      },
      {
        path: 'fourth',
        name: 'fourth',
        components: { footer: FourthAction, main: Fourth }
      }
    ]
  },
  {
    path: '/start',
    component: Start
  },
  {
    path: '/item',
    children: [
      {
        path: '',
        component: ItemsList
      },
      {
        path: 'create',
        component: Create
      }
    ]
  },
  {
    path: '/tag',
    children: [
      {
        path: 'create',
        component: CreateOrEdit
      },
      {
        path: 'edit/:id',
        component: CreateOrEdit
      }
    ]
  },
  {
    path: '/statistic',
    component: Statistic
  }
]

const routes: RouteRecordRaw[] = appPage

export default routes
