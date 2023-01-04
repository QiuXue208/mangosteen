import { createRouter, createWebHashHistory } from 'vue-router'
import { fetchMe, mePromise } from '../utils/mePromise'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes // 路由规则
})


fetchMe()
router.beforeEach((to, from) => {
  if (!(to.path.startsWith('/welcome') || to.path.startsWith('/login') || to.path.startsWith('/start'))) {
    return mePromise.then(
      () => true,
      () => '/login?redirectTo=' + to.path
    )
  }
  return true
})

export default router
