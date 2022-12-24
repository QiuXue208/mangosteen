import { defineComponent, ref } from "vue"
import { Icon } from "../../../components/Icon"
import { Tabs, Tab } from "../../../components/Tabs"
import { categoryMap } from "../constants"
import s from './Category.module.scss'

export const Category = defineComponent({
  props: {
    tagPrefix: String
  },
  
  setup(props){
    const activeKey = ref('entertainment')
    
    return () => (<div class={s.categroy}>
      <Tabs v-model:activeKey={activeKey.value} tabClass={s.tab} tabActiveCalss={s.tab_active}>
        {categoryMap.map(category => <Tab key={category.key} title={category.title}>
          <div class={s.tags}>
          {category.tags?.map(tag => <div class={[s.tag, props.tagPrefix]}>
              <Icon class={s.icon} name={tag} />
            </div>)}
          </div>
        </Tab>)}
      </Tabs>
    </div>)
  }
})