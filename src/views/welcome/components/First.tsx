import { defineComponent } from "vue"
import s from './Layout.module.scss'
import pig from '../../../assets/icons/pig.svg'
import { RouterLink } from "vue-router"
import { Layout } from './Layout'
export const First = defineComponent({
  setup() {
    const slots = {
      icon: () =>  <img class={s.icon} src={pig} alt="" />,
      title: () => <h2>会挣钱<br/>还要会省钱</h2>,
      buttons: () => <>
        <RouterLink class={s.fake} to='/start'>跳过</RouterLink>
        <RouterLink to='/welcome/second'>下一页</RouterLink>
        <RouterLink to='/start'>跳过</RouterLink>
      </>
    }
    return () => <Layout v-slots={slots} />
  }
})

