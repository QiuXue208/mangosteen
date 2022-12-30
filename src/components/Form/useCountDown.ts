import { computed, ref } from 'vue'

export function useCountDown({
  countFrom = 60
}: {
  countFrom?: number
}) {
  const timer = ref<number>()
  const count = ref<number>(countFrom)
  const isCounting = computed(() => !!timer.value)
  
  const startCountDown = () => {
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
    startCountDown
  }
}