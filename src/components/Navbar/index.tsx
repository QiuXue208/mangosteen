import { defineComponent } from "vue"
import s from './index.module.scss'
export const NavBar = defineComponent({
  setup(_, { slots }){
    return () => (<div class={s.navbar}>
      <span class={s.icon_wrapper}>{slots?.icon?.()}</span>
      <span class={s.title_wrapper}>{slots?.title?.()}</span>
    </div>)
  }
})