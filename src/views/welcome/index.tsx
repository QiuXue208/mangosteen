import { defineComponent, Transition, VNode } from "vue";
import { RouterView } from "vue-router";
import s from './index.module.scss'
import logo from '../../assets/icons/mangosteen.svg'

export const Welcome = defineComponent({
  setup() {
    return () => <div class={s.wrapper}>
        <header>
          <img src={logo} />
          <h1>山竹记账</h1>
        </header>
        <main class={s.main}>
          <RouterView name='main'>
            {
              ({ Component: Content }: { Component: VNode}) => (
              <Transition
                name="slide-fade"
                enter-from-class={s.slide_fade_enter_from}
                enter-active-class={s.slide_fade_enter_active}
                leave-active-class={s.slide_fade_leave_active}
                leave-to-class={s.slide_fade_leave_to}
              >
                {Content}
              </Transition>)
            }
          </RouterView>
        </main>
        <footer><RouterView name='footer' /></footer>
      </div>
  }
})