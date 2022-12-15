import s from './Layout.module.scss'
import chart from '../../../assets/icons/chart.svg'
import { RouterLink } from "vue-router"
import { Layout } from './Layout'
export const Third = {
  render: () => {
    return <Layout>
      {{
        icon: () =>  <img class={s.icon} src={chart} alt="" />,
        title: () => <h2>每日提醒<br />不遗漏每一笔账单</h2>,
        buttons: () => <>
          <RouterLink class={s.fake} to='/start'>跳过</RouterLink>
          <RouterLink to='/welcome/fourth'>下一页</RouterLink>
          <RouterLink to='/start'>跳过</RouterLink>
        </>
      }}
    </Layout>
  }
}