import { defineComponent, ref } from "vue"
import { Icon } from "../../components/Icon"
import { MainLayout } from "../../components/Layout/MainLayout"
import { Tabs, Tab } from "../../components/Tabs"
import { Keyboard } from "./components/Keyboard"
import s from './create.module.scss'

const TABS_ENUM = {
  INCOME : 'income',
  EXPENSE: 'expense'
}

export const Create = defineComponent({
  setup(){
    const activeKey = ref<string>(TABS_ENUM.EXPENSE)
    const activeTag = ref<number>()
    const incomeTags = ref([
      { id: 1, name: 'mahjiang', title: '工资' },
      { id: 2, name: 'pingpang', title: '彩票' },
      { id: 3, name: 'poker', title: '滴滴' },
      { id: 4, name: 'ski', title: '摆摊' },
      { id: 5, name: 'mahjiang', title: '工资' },
      { id: 6, name: 'swim', title: '学习' },
      { id: 7, name: 'mahjiang', title: '交通' },
      { id: 8, name: 'skating', title: '老师' },
    ])
    const expenseTags = ref([
      { id: 9, name: 'mahjiang', title: '娱乐' },
      { id: 10, name: 'pingpang', title: '娱乐' },
      { id: 11, name: 'poker', title: '娱乐' },
      { id: 12, name: 'ski', title: '饮食' },
      { id: 13, name: 'mahjiang', title: '医疗' },
      { id: 14, name: 'swim', title: '学习' },
      { id: 15, name: 'mahjiang', title: '交通' },
      { id: 16, name: 'skating', title: '运动' },
    ])

    const renderContent = () => {
      const tags = activeKey.value === TABS_ENUM.EXPENSE ? expenseTags.value : incomeTags.value
      return <div class={s.content}>
        <div class={s.tag}>
          <div class={s.icon_wrapper}>
            <Icon class={[s.icon, s.createIcon]} name='add' />
          </div>
          <span class={s.name}>新增</span>
        </div>
        {
          tags.map(tag => (<div
            class={[s.tag, activeTag.value === tag.id ? s.selected : '']}
            onClick={() => activeTag.value = tag.id}
          >
            <div class={s.icon_wrapper}>
              <Icon class={s.icon} name={tag.name} />
            </div>
            <span class={s.name}>{tag.title}</span>
          </div>))
        }
      </div>
    }

    return () => (<MainLayout>
      {{
        title: () => '记一笔',
        icon: () => <Icon name='arrow-left' />,
        default: () => <>
          <Tabs v-model:activeKey={activeKey.value} tabClass={s.tab}>
            <Tab key={TABS_ENUM.EXPENSE} title='支出' />
            <Tab key={TABS_ENUM.INCOME} title='收入' />
          </Tabs>
          {renderContent()}
          <Keyboard></Keyboard>
        </>
      }}
    </MainLayout>)
  }
})