import s from './index.module.scss'
import { RouterLink } from "vue-router"
export const FourthAction = {
  render: () => {
    return <>
      <RouterLink class={s.fake} to='/start'>跳过</RouterLink>
      <RouterLink to='/start'>开启应用</RouterLink>
      <RouterLink class={s.fake} to='/start'>跳过</RouterLink>
    </>
  }
}