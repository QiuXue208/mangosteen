import { defineComponent, PropType, ref } from "vue"
import { Popup, DatetimePicker } from "vant"
import 'vant/es/popup/style'
import 'vant/es/datetime-picker/style'

export const DatePicker = defineComponent({
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    value: Date,
    closeable: Boolean,
    type: {
      type: String as PropType<'date' | 'time' | 'year-month' | 'month-day' | 'datehour'>,
      default: 'date'
    },
    title: String,
    onConfirm: {
      type: Function as PropType<(value: Date) => void>
    },
    onCancel: Function
  },
  setup(props){
    const currentDate = ref(new Date());
    return () => (<Popup
      show={props.visible}
      closeable={props.closeable}
      position='bottom'
    >
      <DatetimePicker
        type={props.type}
        v-model={currentDate.value}
        title={props.title}
        onConfirm={props.onConfirm}
        onCancel={props.onCancel}
      />
    </Popup>)
  }
})