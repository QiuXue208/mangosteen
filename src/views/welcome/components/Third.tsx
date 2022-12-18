import s from './index.module.scss'
export const Third = {
  render: () => {
    return <div class={s.card}>
      <svg><use xlinkHref="#chart" /></svg>
      {/* <img class={s.icon} src={chart} alt="" /> */}
      <h2>数据可视化<br />收支一目了然</h2>
    </div>
  }
}