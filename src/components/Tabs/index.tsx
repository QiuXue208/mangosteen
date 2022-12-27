import { defineComponent, isVNode, PropType, RendererElement, RendererNode, VNode, VNodeTypes } from "vue"
import s from './index.module.scss'

type Tabs = VNode<RendererNode, RendererElement, { [key: string]: any; }>[]

export const Tabs = defineComponent({
  props: {
    activeKey: {
      type: String as PropType<string | null>,
    },
    tabClass: String,
    tabActiveCalss: String,
    contentClass: String
  },
  emits: ['update:activeKey'],
  setup(props, { slots, emit, attrs }){

    const handleTabs = (tabs: Tabs) => {
      if (!tabs) return []
      let handledTabs: Tabs  = []
      const isTab = (compType: VNodeTypes) => {
        if (compType !== Tab) throw new Error('<Tabs> only accept <Tab> as children')
      }
      for (let i = 0; i < tabs.length; i++) {
        const childTabs = tabs[i].children as Tabs || []
        if (childTabs?.length) {
          childTabs?.forEach(tab => isTab(tab.type))
          handledTabs = handledTabs.concat(childTabs)
        } else {
          isTab(tabs[i].type)
          handledTabs.push(tabs[i])
        }
      }
      return handledTabs
    }

    return () => {
      const tabs = slots.default?.()
      if (!tabs) return null
      const handledTabs = handleTabs(tabs)

      return (<div class={s.tabs_wrapper}>
        <ol class={s.tabs}>
          {handledTabs.map(item => (<li
            class={[s.tab, props.activeKey === item.props?.key ? [s.active, props.tabActiveCalss] : '', props.tabClass]}
            onClick={(e) => {
              e.stopPropagation()
              emit('update:activeKey', item.props?.key)
            }}>
            {item.props?.title}
          </li>))}
        </ol>
        <div class={[s.content, props.contentClass]}>
          {handledTabs.find(tab => tab.props?.key === props.activeKey)?.children?.default?.()}
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