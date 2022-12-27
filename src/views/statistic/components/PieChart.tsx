import { defineComponent, onMounted, ref } from "vue"
import * as echarts from 'echarts'
import s from './index.module.scss'

export const PieChart = defineComponent({
  setup(){
    const refDiv = ref<HTMLDivElement>()
    const option = ref({
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
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
    
    return () => (<div ref={refDiv} class={s.pieChart} />)
  }
})