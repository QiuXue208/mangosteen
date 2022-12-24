import { defineComponent, PropType } from "vue"
import { Category } from "../../views/tag/components/Category"
import s from './index.module.scss'

export const Form = defineComponent({
  props: {
    onSubmit: {
      type: Function as PropType<(e: Event) => void>
    }
  },
  setup(props, { slots }) {
    return () => (
      <form class={s.form} onSubmit={props.onSubmit}>
        {slots.default?.()}
      </form>)
  }
})

export const FormItem = defineComponent({
  props: {
    label: String,
    type: {
      type: String as PropType<'text' | 'category' | 'email' | 'code'>
    },
    placeholder: String,
    error: String,
    border: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }){
    const renderContent = () => {
      switch(props.type) {
        case 'text':
          return <input
            class={[s.content, s.input]}
            placeholder={props.placeholder}
            type='text'
          />
        case 'category':
          return <Category class={[s.content, s.categoryList]} />
        default:
          return slots.default?.()
      }
    }

    return () => (<div class={s.formItem}>
      {props.label && <label class={s.label}>{props.label}</label>}
      <div class={[s.content_wrapper, props.border ? s.border : '', props.error ? s.error : '']}>
        {renderContent()}
      </div>
      {props.error && <div class={s.errorHint}>{props.error}</div>}
    </div>)
  }
})