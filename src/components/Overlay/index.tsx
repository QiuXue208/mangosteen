import { defineComponent, PropType } from "vue"
import { Icon } from "../Icon"
import s from './index.module.scss'

export const Overlay = defineComponent({
  props: {
    onClose: {
      type: Function as PropType<(e: Event) => void>,
      required: true
    }
  },
  setup(props){
    return () => (<div class={s.overlay}>
      <div class={s.sidebar}>
        <nav class={s.user}>
          <h2>未登录用户</h2>
          <span>点击这里登录</span>
        </nav>
        <ul class={s.action_list}>
          <li class={s.action}>
            <Icon name='charts' class={s.icon} />
            <span>统计图标</span>
          </li>
          <li class={s.action}>
            <Icon name='export' class={s.icon} />
            <span>导出数据</span>
          </li>
          <li class={s.action}>
            <Icon name='notify' class={s.icon} />
            <span>记账提醒</span>
          </li>
        </ul>
      </div>
      <div class={s.mask} onClick={props.onClose} />
    </div>)
  }
})