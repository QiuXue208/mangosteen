import { Component, defineComponent, PropType, ref } from "vue"
import { Category } from "../../views/tag/components/Category"
import s from './index.module.scss'

export const Form = defineComponent({
  props: {
    onSubmit: {
      type: Function as PropType<(e: Event) => void>
    }
  },
  setup(props, { slots }) {
    const onSubmit = (e: Event) => {
      e.preventDefault()
      props.onSubmit?.(e)
    }
    return () => (
      <form class={s.form} onSubmit={onSubmit}>
        {slots.default?.()}
      </form>)
  }
})

export const FormItem = defineComponent({
  props: {
    label: {
      type: Object as PropType<string | Component>
    },
    type: {
      type: String as PropType<'text' | 'category' | 'email' | 'code'>
    },
    placeholder: String,
    error: String,
    border: {
      type: Boolean,
      default: false
    },
    modelValue: String
  },
  setup(props, { slots, emit }){
    const renderContent = () => {
      switch(props.type) {
        case 'text':
          return <input
            class={[s.content, s.input]}
            value={props.modelValue}
            onInput={(e: any) => emit("update:modelValue", e.target?.value)}
            placeholder={props.placeholder}
            type='text'
          />
        case 'category':
          return <Category
            category={props.modelValue}
            onUpdateCategory={(val) => emit('update:modelValue', val)}
            class={[s.content, s.categoryList]}
          />
        default:
          return slots.default?.()
      }
    }

    return () => (<div class={s.formItem}>
      {props.label && typeof props.label === 'string' ? <label class={s.label}>{props.label}</label> : props.label }
      <div class={[s.content_wrapper, props.border ? s.border : '', props.error ? s.error : '']}>
        {renderContent()}
      </div>
      {props.error && <div class={s.errorHint}>{props.error}</div>}
    </div>)
  }
})