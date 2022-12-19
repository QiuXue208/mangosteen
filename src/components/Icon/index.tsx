import { defineComponent, PropType } from "vue"
import s from './index.module.scss'
interface Props {
  name: string
}

export const Icon = defineComponent({
 props: {
  name: {
    type: String as PropType<string>,
    default: 'add',
    required: false
  },
  onClick: {
    type: Function as PropType<(e: Event) => void>
  }
 },
 setup(props){
   return () => (<svg class={s.icon} onClick={props.onClick}>
    <use xlinkHref={`#${props.name}`} />
   </svg>)
 }
})