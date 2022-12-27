import { defineComponent, onMounted, ref } from "vue"
import * as echarts from 'echarts'
import s from './index.module.scss'

export const LineChart = defineComponent({
  setup(){
    const refDiv = ref<HTMLDivElement>()
    const option = ref({
      grid: [
        { top: 20, left: '10%', right: 0, bottom: '15%'}
      ],
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    })

    onMounted(() => {
      if (refDiv.value) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(refDiv.value)
        // 绘制图表
        myChart.setOption(option.value)
      }
    })
    
    return () => (<div ref={refDiv} class={s.lineChart} />)
  }
})