import { defineComponent } from "vue"
import { FloatButton } from "../../components/FloatButton"
import { Icon } from "../../components/Icon"
import { TimeTabsLayout } from "../../components/Layout/TimeTabsLayout"
import s from './index.module.scss'

export const ItemsList = defineComponent({
  setup(){

    return () => (<TimeTabsLayout title='乐事记账' iconName="menu">
      {{
        default: () => (<>
          <ul class={s.total}>
            <li><span>收入</span><span>128</span></li>
            <li><span>支出</span><span>99</span></li>
            <li><span>净收入</span><span>39</span></li>
          </ul>
          <ol class={s.list}>
            <li>
              <div class={s.sign}>
                <Icon class={s.icon} name='badminton' />
              </div>
              <div class={s.text}>
                <div class={s.tagAndAmount}>
                  <span class={s.tag}>旅行</span>
                  <span class={s.amount}>￥1234</span>
                </div>
                <div class={s.noteAndTime}>
                  <span class={s.note}>去新疆玩</span>
                  <span class={s.time}>2000-01-01 12:39</span>
                </div>
              </div>
            </li>
            <li>
              <div class={s.sign}>
                <Icon class={s.icon} name='badminton' />
              </div>
              <div class={s.text}>
                <div class={s.tagAndAmount}>
                  <span class={s.tag}>旅行</span>
                  <span class={s.amount}>￥1234</span>
                </div>
                <div class={s.noteAndTime}>
                  <span class={s.note}>去新疆玩</span>
                  <span class={s.time}>2000-01-01 12:39</span>
                </div>
              </div>
            </li>
            <li>
              <div class={s.sign}>
                <Icon class={s.icon} name='badminton' />
              </div>
              <div class={s.text}>
                <div class={s.tagAndAmount}>
                  <span class={s.tag}>旅行</span>
                  <span class={s.amount}>￥1234</span>
                </div>
                <div class={s.noteAndTime}>
                  <span class={s.note}>去新疆玩</span>
                  <span class={s.time}>2000-01-01 12:39</span>
                </div>
              </div>
            </li>
            <li>
              <div class={s.sign}>
                <Icon class={s.icon} name='badminton' />
              </div>
              <div class={s.text}>
                <div class={s.tagAndAmount}>
                  <span class={s.tag}>旅行</span>
                  <span class={s.amount}>￥1234</span>
                </div>
                <div class={s.noteAndTime}>
                  <span class={s.note}>去新疆玩</span>
                  <span class={s.time}>2000-01-01 12:39</span>
                </div>
              </div>
            </li>
            <li>
              <div class={s.sign}>
                <Icon class={s.icon} name='badminton' />
              </div>
              <div class={s.text}>
                <div class={s.tagAndAmount}>
                  <span class={s.tag}>旅行</span>
                  <span class={s.amount}>￥1234</span>
                </div>
                <div class={s.noteAndTime}>
                  <span class={s.note}>去新疆玩</span>
                  <span class={s.time}>2000-01-01 12:39</span>
                </div>
              </div>
            </li>
            <li>
              <div class={s.sign}>
                <Icon class={s.icon} name='badminton' />
              </div>
              <div class={s.text}>
                <div class={s.tagAndAmount}>
                  <span class={s.tag}>旅行</span>
                  <span class={s.amount}>￥1234</span>
                </div>
                <div class={s.noteAndTime}>
                  <span class={s.note}>去新疆玩</span>
                  <span class={s.time}>2000-01-01 12:39</span>
                </div>
              </div>
            </li>
          </ol>
          <div class={s.more}>向下滑动加载更多</div>
          <FloatButton />
        </>)
      }}
    </TimeTabsLayout>)
  }
})