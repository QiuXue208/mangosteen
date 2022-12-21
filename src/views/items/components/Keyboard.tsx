import { defineComponent } from "vue"
import { Icon } from "../../../components/Icon"
import s from './Keyboard.module.scss'

export const Keyboard = defineComponent({
  setup(){
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
          <button>
            <Icon name='date' />
            <span>今天</span>
          </button>
          <button>清空</button>
          <button>完成</button>
        </div>
      </div>
    </div>)
  }
})