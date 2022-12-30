import { computed, ref } from 'vue'

export function useCountDown({
  onClick,
  countFrom = 60
}: {
  onClick?: () => void
  countFrom?: number
}) {
  const timer = ref<number>()
  const count = ref<number>(countFrom)
  const isCounting = computed(() => !!timer.value)
  
  const handler = () => {
    onClick?.()
    timer.value = setInterval(() => {
      count.value -= 1
      if (count.value === 0) {
        clearInterval(timer.value)
        timer.value = undefined
        count.value = countFrom
      }
    }, 1000)
  }

  return {
    timer,
    count,
    isCounting,
    handler
  }
}