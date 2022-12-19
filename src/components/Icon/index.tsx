import { defineComponent, PropType } from "vue"
import s from './index.module.scss'
interface Props {
  name: string
}

export const Icon = defineComponent({
 props: {
  name: {
    type: String,
    default: 'add',
    required: false
  }
 },
 setup(props){
   return () => (<svg class={s.icon}>
    <use xlinkHref={`#${props.name}`} />
   </svg>)
 }
})