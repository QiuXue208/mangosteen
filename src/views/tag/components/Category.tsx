import { defineComponent, onMounted, PropType, ref } from "vue"
import { Icon } from "../../../components/Icon"
import { Tabs, Tab } from "../../../components/Tabs"
import { categoryMap, CategoryItem } from "../../../utils/constants"
import s from './Category.module.scss'

export const Category = defineComponent({
  props: {
    tagPrefix: String,
    category: String,
    onUpdateCategory: {
      type: Function as PropType<(category: string) => void>
    }
  },
  
  setup(props){
    const activeKey = ref<string>('entertainment')
    const selected = ref<string>('')

    onMounted(() => {
      const category = categoryMap.find((item: CategoryItem) => item.key === activeKey.value)?.tags[0]
      if (category) {
        handleSelectedCategory(category)
      }
    })

    const handleSelectedCategory = (category: string) => {
      props.onUpdateCategory?.(category)
      selected.value = category
    }
    
    return () => (<div class={s.categroy}>
      <Tabs
        v-model:activeKey={activeKey.value}
        tabClass={s.tab}
        tabActiveCalss={s.tab_active}
      >
        {categoryMap.map(category => <Tab
          key={category.key}
          title={category.title}
        >
          <div class={s.tags}>
            {category.tags?.map(tag => <div
              onClick={() => handleSelectedCategory(tag)}
              class={[s.tag, props.tagPrefix, tag === selected.value ? s.active : '']}
            >
              <Icon class={s.icon} name={tag} />
            </div>)}
          </div>
        </Tab>)}
      </Tabs>
    </div>)
  }
})