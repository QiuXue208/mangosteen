import { defineComponent, reactive } from "vue"
import { Popup, Overlay } from "vant"
import { Form, FormItem } from "../Form"
import { Button } from "../Button"
import s from './index.module.scss'

export const CustomDate = defineComponent({
  props: {
    visible: Boolean,
    closeable: Boolean
  },
  setup(props, { emit }){
    const customTime = reactive({
      startTime: '',
      endTime: ''
    })

    const handleSubmit = () => {
      emit('update:modelValue', customTime)
      emit('update:visible', false)
    }

    return () => (<Overlay
      show={props.visible}
    >
      <div class={s.wrapper}>
        <div class={s.content}>
          <Form onSubmit={handleSubmit}>
            <FormItem
              label='开始时间'
              dateTitle='开始时间'
              type='date'
              border
              v-model={customTime.startTime}
              placeholder='请选择开始时间'
            />
            <FormItem
              label='结束时间'
              type='date'
              dateTitle='结束时间'
              border
              v-model={customTime.endTime}
              placeholder='请选择结束时间'
            />
            <FormItem>
              <Button>确认</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </Overlay>)
  }
})