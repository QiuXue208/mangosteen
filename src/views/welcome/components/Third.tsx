import s from './index.module.scss'
import chart from '../../../assets/icons/chart.svg'
export const Third = {
  render: () => {
    return <div class={s.card}>
      <img class={s.icon} src={chart} alt="" />
      <h2>数据可视化<br />一目了然收支</h2>
    </div>
  }
}