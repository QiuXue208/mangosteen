import { defineComponent, PropType } from "vue"
import s from './index.module.scss'

export const Center = defineComponent({
  props: {
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal'
    }
  },
  setup(props, { slots }){
    return () => (<div class={[s.wrapper, props.direction === 'horizontal' ? 'horizontal' : 'vertical']}>
      {slots?.default?.()}
    </div>)
  }
})