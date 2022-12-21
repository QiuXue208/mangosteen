import { defineComponent, PropType, watch } from "vue"
import s from './index.module.scss'

export const Tabs = defineComponent({
  props: {
    activeKey: {
      type: String as PropType<string | null>,
    },
    tabClass: {
      type: String
    },
    contentClass: {
      type: String
    }
  },
  setup(props, { slots, emit, attrs }){
    return () => {
      const tabs = slots.default?.()
      if (!tabs) return null
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].type !== Tab) {
          throw new Error('<Tabs> only accept <Tab> as children')
        }
      }
      return (<div class={s.tabs_wrapper}>
        <ol class={[s.tabs, props.tabClass]}>
          {tabs.map(item => (<li
            class={[s.tab, props.activeKey === item.props?.key ? s.active : '']}
            onClick={() => emit('update:activeKey', item.props?.key)}>
            {item.props?.title}
          </li>))}
        </ol>
        <div class={[s.content, props.contentClass]}>
          {tabs.find(tab => tab.props?.key === props.activeKey)?.children?.default?.()}
        </div>
      </div>)
    }
  }
})


export const Tab = defineComponent({
  props: {
    key: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  setup(props, { slots }) {
    return <div>
      {slots.default?.()}
    </div>
  }
})