import { defineComponent } from "vue"
import s from './index.module.scss'
export const First = defineComponent({
  setup() {
    return () => <div class={s.card}>
      <svg><use xlinkHref="#pig" /></svg>
      {/* <img class={s.icon} src={pig} alt="" /> */}
      <h2>会挣钱<br/>还要会省钱</h2>
    </div>
  }
})

