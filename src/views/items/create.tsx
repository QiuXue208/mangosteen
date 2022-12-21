import { defineComponent, ref } from "vue"
import { Icon } from "../../components/Icon"
import { MainLayout } from "../../components/Layout/MainLayout"
import { Tabs, Tab } from "../../components/Tabs"
import { Keyboard } from "./components/Keyboard"

export const Create = defineComponent({
  setup(){
    const activeKey = ref<string>('expend')

    return () => (<MainLayout>
      {{
        title: () => '记一笔',
        icon: () => <Icon name='arrow-left' />,
        default: () => <>
          <Tabs v-model:activeKey={activeKey.value}>
            <Tab key='expend' title='支出'>
              <main>内容1</main>
            </Tab>
            <Tab key='income' title='收入'>
              <main>内容2</main>
            </Tab>
          </Tabs>
          
          <Keyboard></Keyboard>
        </>
      }}
    </MainLayout>)
  }
})