import { defineComponent } from "vue"
import { Icon } from "../Icon"
import s from './index.module.scss'

export const FloatButton = defineComponent({
 setup(){
   return () => (<div class={s.wrapper}>
    <Icon name='add' class={s.icon} />
  </div>)
 }
})