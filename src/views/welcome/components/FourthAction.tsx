import s from './index.module.scss'
import { RouterLink } from "vue-router"
import { Skip } from './Skip'
export const FourthAction = {
  render: () => {
    const handleClick = () => {
      localStorage.setItem('skipFeatures', 'yes')
    }
    return <>
      <Skip class={s.fake} />
      <RouterLink to='/start'>
        <span onClick={handleClick}>开启应用</span>
      </RouterLink>
      <Skip class={s.fake} />
    </>
  }
}