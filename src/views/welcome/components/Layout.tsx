import { defineComponent } from "vue"
import s from './Layout.module.scss'
import pig from '../../../assets/icons/pig.svg'
import { RouterLink } from "vue-router"

export const Layout = defineComponent({
  setup(_, { slots }) {
    return () => <div class={s.wrapper}>
      <div class={s.card}>
        {slots.icon?.()}
        {slots.title?.()}
      </div>
      <div class={s.actions}>
        {slots.buttons?.()}
      </div>
    </div>
  }
})