import { defineComponent, PropType } from "vue"
import s from './index.module.scss' 

interface Props {
  onClick?: (e: MouseEvent) => void
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
}
export const Button = defineComponent({
  props: {
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>
    },
    color: {
      type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger'>,
      default: 'primary'
    }
  },
  setup(props, { slots }){
    return () => (<div class={s.wrapper}>
      <button class={[s.button, s[props.color]]}>{slots?.default?.()}</button>
    </div>)
  }
})