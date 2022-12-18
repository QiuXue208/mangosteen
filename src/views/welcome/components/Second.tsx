import { defineComponent } from "vue"
import s from './index.module.scss'
export const Second = defineComponent({
  setup() {
    return () => <div class={s.card}>
      <svg><use xlinkHref="#clock" /></svg>
      {/* <img class={s.icon} src={clock} alt="" /> */}
      <h2>每日提醒<br />不遗漏每一笔账单</h2>
    </div>
  }
})