import { defineComponent, ref } from "vue"

export const Counter = defineComponent({
  setup() {
    const count = ref(0)
    const handleClick = () => {
      count.value += 1
    }
    return () => (
      <>
      <div>{count.value}</div>
      <button onClick={handleClick}>+1</button>
      </>
    )
  }
})