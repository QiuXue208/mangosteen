import s from './Layout.module.scss'
import chart from '../../../assets/icons/chart.svg'
import { RouterLink } from "vue-router"
import { Layout } from './Layout'
export const Fourth = () => <Layout>
  {{
    icon: () =>  <img class={s.icon} src={chart} alt="" />,
    title: () => <h2>每日提醒<br />不遗漏每一笔账单</h2>,
    buttons: () => <>
      <RouterLink class={s.fake} to='/start'>跳过</RouterLink>
      <RouterLink to='/start'>完成</RouterLink>
      <RouterLink class={s.fake} to='/start'>跳过</RouterLink>
    </>
  }}
</Layout>

Fourth.displayName = 'Fourth'