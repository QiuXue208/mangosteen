import { defineComponent, ref } from "vue"
import { DatePicker } from "../../../components/DatePicker"
import { Icon } from "../../../components/Icon"
import dayjs from 'dayjs'
import s from './Keyboard.module.scss'

const defaultFormatter = 'YYYY-MM-DD'

export const Keyboard = defineComponent({
  setup(){
    const dateVisible = ref<boolean>(false)
    const handleSelectDate = () => {
      dateVisible.value = true
    }
    const date = ref<Date>(new Date())

    const handleCancel = () => {
      dateVisible.value = false
    }

    const handleConfirm = (val: Date) => {
      date.value = val
      handleCancel()
    }

    const fetchFormatTime = (time: Date, formatter = defaultFormatter) =>{
      if (!time) return
      return dayjs(time).format(formatter)
    }

    return () => (<div class={s.keyboard}>
      <div class={s.keyboard_top}>
        <span class={s.date_wrapper}>
          <div class={s.icon_wrapper}>
            <Icon name='note' class={s.icon} />
            <span class={s.text}>备注：</span>
          </div>
          <input class={s.input} placeholder="点击写备注..." />
        </span>
        <span class={s.amount}>999.99</span>
      </div>
      <div class={s.keyboard_bottom}>
        <div class={s.left}>
          <div class={s.left_top}>
          {Array.from({ length: 9 }, (_, index) => index + 1).map(item => (
            <button key={item}>{item}</button>
          ))}
          </div>
          <div class={s.left_bottom}>
            <button>.</button>
            <button>0</button>
            <button><Icon name='delete' /></button>
          </div>
        </div>
        <div class={s.right}>
          <button onClick={handleSelectDate}>
            {
              fetchFormatTime(date.value) === fetchFormatTime(new Date()) ? <>
                <Icon name='date' />
                <span>今天</span>
              </> : <span>{fetchFormatTime(date.value)}</span>
            }
            
          </button>
          <button>清空</button>
          <button>完成</button>
        </div>
      </div>
      <DatePicker
        visible={dateVisible.value}
        value={date.value}
        onCancel={handleCancel}
        title='选择日期'
        onConfirm={handleConfirm}
      />
    </div>)
  }
})