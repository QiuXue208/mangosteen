import { Component, defineComponent, PropType, ref } from "vue"
import { Category } from "../../views/tag/components/Category"
import { Button } from "../Button"
import { DatePicker } from "../DatePicker"
import s from './index.module.scss'
import dayjs from 'dayjs'

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
      type: String as PropType<string | Component>
    },
    type: {
      type: String as PropType<'text' | 'category' | 'email' | 'validationCode' | 'date'>
    },
    placeholder: String,
    error: String,
    border: {
      type: Boolean,
      default: false
    },
    modelValue: String,
    dateTitle: String,
    onClick: Function as PropType<() => void>
  },
  setup(props, { slots, emit }){
    const refDateVisible = ref(false)

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
        case 'validationCode':
          return <div class={[s.content, s.validationCode]}>
            <input
              class={s.input}
              onInput={(e: any) => emit("update:modelValue", e.target?.value)}
              value={props.modelValue}
              placeholder={props.placeholder}
            />
            <Button class={s.button} color='primary' onClick={props.onClick}>发送验证码</Button>
          </div>
        case 'date':
          return <>
            <input
              readonly={true}
              value={props.modelValue && dayjs(parseInt(props.modelValue)).format('YYYY-MM-DD')}
              placeholder={props.placeholder}
              onClick={() => { refDateVisible.value = true }}
              class={[s.content, s.input]} />
            <DatePicker
              visible={refDateVisible.value}
              title={props.dateTitle}
              onConfirm={(date: Date) => {
                emit('update:modelValue', dayjs(date).valueOf().toString())
                refDateVisible.value = false
              }}
              onCancel={() => refDateVisible.value = false}
            />
          </>
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