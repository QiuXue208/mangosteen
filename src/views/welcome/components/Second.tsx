import { defineComponent } from "vue"
import s from './index.module.scss'
import clock from '../../../assets/icons/clock.svg'
export const Second = defineComponent({
  setup() {
    return () => <div class={s.card}>
      <img class={s.icon} src={clock} alt="" />
      <h2>每日提醒<br />不遗漏每一笔账单</h2>
    </div>
  }
})