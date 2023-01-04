import s from './index.module.scss'
import { RouterLink } from "vue-router"
import { Skip } from './Skip'
export const ThirdAction = {
  render: () => {
    return <>
      <Skip class={s.fake} />
      <RouterLink to='/welcome/fourth'>下一页</RouterLink>
      <Skip />
    </>
  }
}