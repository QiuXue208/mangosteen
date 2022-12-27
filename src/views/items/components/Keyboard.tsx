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
    const amount = ref<string>('0')

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

    const handleNumber = (val: string | number) => {
      switch(val) {
        case 'clear':
          amount.value = '0'
          break
        case 'delete':
          if (amount.value.length === 1) amount.value = '0'
          else amount.value = amount.value.slice(0, amount.value.length - 1)
          break
        case '.':
          if (amount.value.indexOf('.') !== -1) return
          amount.value += val
          break
        case 0:
          if (amount.value === '0') return
          // 0.0之后不允许再输入0
          if (amount.value === '0.0') return
          // 保留小数点后两位
          if (amount.value.split('.')?.[1].length >= 2) return
          amount.value += val
          break
        default:
          const splitAmount = amount.value.split('.')
          const interger = splitAmount[0]
          const decimals = splitAmount[1]
          if (decimals?.length >= 2) return
          if (interger?.length >= 8 && amount.value.indexOf('.') === -1) return
          if (amount.value === '0') {
            amount.value = val.toString()
          } else {
            amount.value += val
          }
          break
      }
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
        <span class={s.amount}>{amount.value}</span>
      </div>
      <div class={s.keyboard_bottom}>
        <div class={s.left}>
          <div class={s.left_top}>
          {Array.from({ length: 9 }, (_, index) => index + 1).map(item => (
            <button onClick={() => handleNumber(item)}>{item}</button>
          ))}
          </div>
          <div class={s.left_bottom}>
            <button onClick={() => handleNumber('.')}>.</button>
            <button onClick={() => handleNumber(0)}>0</button>
            <button onClick={() => handleNumber('delete')}>
              <Icon name='delete' />
            </button>
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
          <button onClick={() => handleNumber('clear')}>清空</button>
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