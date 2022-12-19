import { defineComponent, ref, Transition, VNode, watch } from "vue";
import { RouterView, useRoute, useRouter } from "vue-router";
import s from './index.module.scss'
import logo from '../../assets/icons/mangosteen.svg'
import { useSwipe } from "../../hooks/useSwipe"

const routeMap: Record<string, string> = {
  first: '/welcome/second',
  second: '/welcome/third',
  third: '/welcome/fourth',
  fourth: '/start'
}

export const Welcome = defineComponent({
  setup() {
    const mainRef = ref<HTMLElement | null>(null)
    const { direction, swiping } = useSwipe(mainRef, {
      beforeStart: e => e.preventDefault()
    })
    const route = useRoute()
    const router = useRouter()

    watch([direction, swiping], (newVale) => {
      if (!swiping.value && direction.value === 'left') {
        const name = (route.name || 'first').toString()
        router.replace(routeMap[name])
      }
    })
    return () => <div class={s.wrapper}>
        <header>
          <img src={logo} />
          <h1>山竹记账</h1>
        </header>
        <main class={s.main} ref={mainRef}>
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