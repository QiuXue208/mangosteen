import { defineComponent } from "vue"
import { Button } from "../../components/Button"
import { Center } from "../../components/Center"
import { FloatButton } from "../../components/FloatButton"
import { Icon } from "../../components/Icon"
import { NavBar } from "../../components/Navbar"
import s from './index.module.scss'

export const Start = defineComponent({
 setup(){
   return () => (<div class={s.wrapper}>
    <NavBar v-slots={{
      icon: () => <Icon name='menu' />,
      default: () => 'Pocket Account'
    }} />
    <Center class={s.center}>
      <Icon name='pig' class={s.pig} />
    </Center>
    <Button>开始记账</Button>
    <FloatButton />
  </div>)
 }
})