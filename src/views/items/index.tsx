import { defineComponent } from "vue"
import s from './index.module.scss'

export const Home = defineComponent({
  setup(){
    return () => (<div>首页</div>)
  }
})