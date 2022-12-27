import { defineComponent, handleError, reactive, ref, watch } from "vue"
import { CustomDate } from "../../components/CustomDate"
import { Icon } from "../../components/Icon"
import { MainLayout } from "../../components/Layout/MainLayout"
import { Tab, Tabs } from "../../components/Tabs"
import {
  firstDayOfCurMonth,
  lastDayOfCurMonth,
  firstDayOfYear,
  lastDayOfYear,
  firstDayOfPrevMonth,
  lastDayOfPrevMonth
} from "../../utils/time"
import { BarChart } from "./components/BarChart"
import { LineChart } from "./components/LineChart"
import { PieChart } from "./components/PieChart"
import s from './index.module.scss'

const TABS_ENUM = [
  { value: 'month', title: '本月', startDate: firstDayOfCurMonth(), endDate: lastDayOfCurMonth() },
  { value: 'lastMonth', title: '上个月', startDate: firstDayOfPrevMonth(), endDate: lastDayOfPrevMonth() },
  { value: 'year', title: '今年', startDate: firstDayOfYear(), endDate: lastDayOfYear() },
  { value: 'custom', title: '自定义起始时间', startDate: '', endDate: '' }
]

export const Statistic = defineComponent({
  setup(){
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
        title: () => '统计图表',
        icon: () => <Icon name='arrow-left'/>,
        default: () => (<>
          <Tabs
            v-model:activeKey={activeKey.value}
            tabClass={s.tab}
            onUpdate:activeKey={handleClickTab}
          >
            {TABS_ENUM.map(tab => <Tab key={tab.value} title={tab.title} />)}
          </Tabs>
          <main class={s.content}>
            <section class={s.type}>
              <span>类型</span>
              <select class={s.select}>
                <option>收入</option>
                <option>支出</option>
              </select>
            </section>
            <section class={s.chart_wrapper}>
              <LineChart />
              <PieChart />
              <BarChart />
              <CustomDate
                v-model={customTime.value}
                v-model:visible={customTimeVisible.value}
              />
            </section>
          </main>
        </>)
      }}
    </MainLayout>)
  }
})