import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from './index.module.scss'

export const Welcome = defineComponent({
  setup() {
    return () => <div class={s.wrapper}>
        <header>header</header>
        <main><RouterView /></main>
        <footer>footer</footer>
      </div>
  }
})