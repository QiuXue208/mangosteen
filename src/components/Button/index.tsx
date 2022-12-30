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
    },
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button'
    },
    disabled: Boolean
  },
  setup(props, { slots }){
    return () => (<div class={s.wrapper} onClick={props.onClick}>
      <button
        disabled={props.disabled}
        type={props.type}
        class={[s.button, s[props.color]]}>
        {slots?.default?.()}
      </button>
    </div>)
  }
})