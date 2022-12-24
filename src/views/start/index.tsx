import { defineComponent, ref, watch } from "vue"
import { RouterLink } from "vue-router"
import { Button } from "../../components/Button"
import { Center } from "../../components/Center"
import { FloatButton } from "../../components/FloatButton"
import { Icon } from "../../components/Icon"
import { MainLayout } from "../../components/Layout/MainLayout"
import { NavBar } from "../../components/Navbar"
import { Overlay } from "../../components/Overlay"
import s from './index.module.scss'

export const Start = defineComponent({
 setup(){
   const visible = ref<boolean>(false)

   return () => (<MainLayout class={s.wrapper}>
    {{
      icon: () => <Icon name='menu' onClick={() => visible.value = true } />,
      title: () => 'Pocket Account',
      default: () => (<>
        <Center class={s.center}>
          <Icon name='pig' class={s.pig} />
        </Center>
        <RouterLink to='/item/create'>
          <Button class={s.button}>开始记账</Button>
        </RouterLink>
        <RouterLink to='/item/create'>
          <FloatButton />
        </RouterLink>
        {visible.value && <Overlay onClose={() => visible.value = false} />}
      </>)
    }}
   </MainLayout>)
 }
})