import { computed, onMounted, onUnmounted, ref, Ref } from "vue"

type Point = { x: number; y: number }

export const useSwipe = (element: Ref<HTMLElement | null>, options?: {
  beforeStart?: (e: TouchEvent) => void
}) => {
  const start = ref<Point | null>(null)
  const end = ref<Point | null>(null)
  const swiping = ref(false)

  const distance = computed(() => {
    if (swiping.value) return
    if (!start.value || !end.value) return
    return {
      x: end.value.x - start.value.x,
      y: end.value.y - start.value.y
    }
  })

  const direction = computed(() => {
    if (!distance.value) return
    const x = distance.value.x
    const y = distance.value.y
    if (Math.abs(x) > Math.abs(y)) {
      return x > 0 ? 'right' : 'left'
    } else {
      return y > 0 ? 'down' : 'up'
    }
  })
  
  const onStart = (e: TouchEvent) => {
    options?.beforeStart?.(e)
    swiping.value = true
    start.value = {
      x: e.touches[0]?.clientX,
      y: e.touches[0]?.clientY
    }
  }

  const onMove = (e: TouchEvent) => {
    end.value = {
      x: e.touches[0]?.clientX,
      y: e.touches[0]?.clientY
    }
  }

  const onEnd = (e: TouchEvent) => {
    swiping.value = false
  }

  onMounted(() => {
    if (!element.value) return
    element.value.addEventListener('touchstart', onStart)
    element.value.addEventListener('touchmove', onMove)
    element.value.addEventListener('touchend', onEnd)
  })

  onUnmounted(() => {
    if (!element.value) return
    element.value.removeEventListener('touchstart', onStart)
    element.value.removeEventListener('touchmove', onMove)
    element.value.removeEventListener('touchend', onEnd)
  })

  return {
    start,
    end,
    swiping,
    distance,
    direction
  }
}