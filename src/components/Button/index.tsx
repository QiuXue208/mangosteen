import { computed, defineComponent, PropType, ref } from "vue"
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
    disabled: Boolean,
    selfDisabled: {
      type: Boolean,
      default: false
    },
  },
  setup(props, { slots }){
    const selfDisabled = ref<boolean>(false)

    const disabled = computed(() => {
      if (!props.selfDisabled) return props.disabled
      if (selfDisabled.value) return true
      return props.disabled
    })

    const handleClick = (e: MouseEvent) => {
      props.onClick?.(e)
      selfDisabled.value = true
      setTimeout(() => {
        selfDisabled.value = false
      }, 1000)
    }

    return () => (<div class={s.wrapper} onClick={handleClick}>
      <button
        disabled={disabled.value}
        type={props.type}
        class={[s.button, s[props.color]]}>
        {slots?.default?.()}
      </button>
    </div>)
  }
})