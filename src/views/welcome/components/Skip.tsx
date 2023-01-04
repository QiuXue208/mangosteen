import { defineComponent } from "vue"
import { RouterLink } from "vue-router"

export const Skip = defineComponent({
  setup(){
    const handleClick = () => {
      localStorage.setItem('skipFeatures', 'yes')
    }
  
    return () => (<RouterLink to='/start'>
      <span onClick={handleClick}>跳过</span>
    </RouterLink>)
  }
})