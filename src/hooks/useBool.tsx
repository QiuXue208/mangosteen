import { ref } from "vue"

export const useBool = (init: boolean) => {
  const bool = ref(init)

  return {
    toggle: () => bool.value = !bool.value,
    on: () => bool.value = true,
    off: () => bool.value = false,
    value: bool.value
  }
}