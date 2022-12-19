import { defineComponent } from "vue"
import s from './index.module.scss' 

interface Props {
  onClick?: (e: MouseEvent) => void
}
export const Button = defineComponent<Props>({
 setup(_, { slots }){
   return () => (<div class={s.wrapper}>
    <button class={s.button}>{slots?.default?.()}</button>
   </div>)
 }
})