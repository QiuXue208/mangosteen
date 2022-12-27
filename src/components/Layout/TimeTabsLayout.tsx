import { defineComponent, ref } from "vue"
import {
  firstDayOfCurMonth,
  lastDayOfCurMonth,
  firstDayOfYear,
  lastDayOfYear,
  firstDayOfPrevMonth,
  lastDayOfPrevMonth
} from "../../utils/time"
import { CustomDate } from "../CustomDate"
import { Icon } from "../Icon"
import { Tabs, Tab } from "../Tabs"
import { MainLayout } from "./MainLayout"
import s from './TimeTabsLayout.module.scss'

const TABS_ENUM = [
  { value: 'month', title: '本月', startDate: firstDayOfCurMonth(), endDate: lastDayOfCurMonth() },
  { value: 'lastMonth', title: '上个月', startDate: firstDayOfPrevMonth(), endDate: lastDayOfPrevMonth() },
  { value: 'year', title: '今年', startDate: firstDayOfYear(), endDate: lastDayOfYear() },
  { value: 'custom', title: '自定义起始时间', startDate: '', endDate: '' }
]

export const TimeTabsLayout = defineComponent({
  props: {
    title: String,
    iconName: String,
  },
  setup(props, { slots }){
    const activeKey = ref(TABS_ENUM[0].value)
    const customTimeVisible = ref(false)
    const customTime = ref({
      startTime: '',
      endTime: ''
    })

    const handleClickTab = (val: string) => {
      if (val === 'custom') {
        customTimeVisible.value = true
      }
    }

    return () => (<MainLayout class={s.layout}>
      {{
        title: () => props.title,
        icon: () => <Icon name={props.iconName}/>,
        default: () => (<>
          <Tabs
            v-model:activeKey={activeKey.value}
            tabClass={s.tab}
            onUpdate:activeKey={handleClickTab}
          >
            {TABS_ENUM.map(tab => <Tab key={tab.value} title={tab.title} />)}
          </Tabs>
          <CustomDate
            v-model={customTime.value}
            v-model:visible={customTimeVisible.value}
          />
          <main class={s.content}>
            {slots.default?.()}
          </main>
        </>)
      }}
    </MainLayout>)
  }
})