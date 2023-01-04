import s from './index.module.scss'
import { RouterLink } from "vue-router"
import { Skip } from './Skip'
export const FirstAction = {
  render: () => {
    return <>
      <Skip class={s.fake} />
      <RouterLink to='/welcome/second'>下一页</RouterLink>
      <Skip />
    </>
  }
}

