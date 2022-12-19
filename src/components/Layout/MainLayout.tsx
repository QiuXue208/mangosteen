import { defineComponent } from "vue"
import { NavBar } from "../Navbar"
import s from './MainLayout.module.scss'

export const MainLayout = defineComponent({
  setup(_, { slots }){

    return () => (<div class={s.wrapper}>
      <NavBar>
        {{
          title: slots?.title,
          icon: slots?.icon
        }}
      </NavBar>
      {slots?.default?.()}
    </div>)
  }
})