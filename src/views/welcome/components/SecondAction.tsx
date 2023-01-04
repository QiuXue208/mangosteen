import s from './index.module.scss'
import { RouterLink } from "vue-router"
import { Skip } from './Skip'
export const SecondAction = {
  render: () => {
    return <>
      <Skip class={s.fake} />
      <RouterLink to='/welcome/third'>下一页</RouterLink>
      <Skip />
    </>
  }
}