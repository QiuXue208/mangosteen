import s from './index.module.scss'
import chart from '../../../assets/icons/chart.svg'
export const Fourth = () => <div class={s.card}>
  <img class={s.icon} src={chart} alt="" />
  <h2>云备份<br />再也不怕数据丢失</h2>
</div>

Fourth.displayName = 'Fourth'