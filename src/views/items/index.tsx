import { defineComponent, ref } from "vue"
import { Tab, Tabs } from "../../components/Tabs"
import s from './index.module.scss'

export const Home = defineComponent({

  setup(){
    const activeKey = ref<string>('income')

    return () => (<div>
      <Tabs v-model:activeKey={activeKey.value}>
        <Tab key='expend' title='支出'>123</Tab>
        <Tab key='income' title='收入'>456</Tab>
      </Tabs>
    </div>)
  }
})