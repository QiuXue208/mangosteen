import { defineComponent } from "vue"
import { TimeTabsLayout } from "../../components/Layout/TimeTabsLayout"
import { BarChart } from "./components/BarChart"
import { LineChart } from "./components/LineChart"
import { PieChart } from "./components/PieChart"
import s from './index.module.scss'

export const Statistic = defineComponent({
  props: {
    title: String,
    iconName: String,
  },
  setup(props){

    return () => (<TimeTabsLayout title='统计图表' iconName="arrow-left">
      {{
        default: () => (<>
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
          </section>
        </>)
      }}
    </TimeTabsLayout>)
  }
})