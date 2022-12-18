import { defineComponent } from "vue"
import s from './index.module.scss'
import pig from '../../../assets/icons/pig.svg'
export const First = defineComponent({
  setup() {
    return () => <div class={s.card}>
      <img class={s.icon} src={pig} alt="" />
      <h2>会挣钱<br/>还要会省钱</h2>
    </div>
  }
})

