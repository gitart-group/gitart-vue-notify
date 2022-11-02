
import type { Ref } from 'vue'
import { ref } from 'vue'
import { animate, easingTypes } from 'gitart-animate-number'

/**
 * Make pusable and smooth progress for number
 * @param duration
 * @param to
 */
export const useProgress = (duration: number, to = 100): {
  progress: Ref<number>
  pause: () => void
  resume: () => void
  onProgressEnd: (callback: () => void) => void
} => {
  const progress = ref(0)

  if (duration === 0) {
    return {
      progress,
      pause: () => {},
      resume: () => {},
      onProgressEnd: () => {},
    }
  }

  type ProgressCallback = () => void
  let onProgressEndCallback: ProgressCallback = () => {}
  const onProgressEnd = (callback: ProgressCallback) => {
    onProgressEndCallback = callback
  }

  let stopFn: any
  stopFn = animate({
    from: 0,
    to,
    duration,
    bezier: easingTypes.linear,
    on: (value) => {
      progress.value = value
    },
    completed: () => {
      onProgressEndCallback()
    },
  })

  const pause = () => {
    stopFn()
  }

  let timeLeft = duration
  const resume = () => {
    timeLeft = duration - (duration * (progress.value / 100))
    stopFn = animate({
      from: progress.value,
      to: 100,
      duration: timeLeft,
      bezier: easingTypes.linear,
      on: (value) => {
        progress.value = value
      },
      completed: () => {
        onProgressEndCallback()
      },
    })
  }

  return {
    progress,
    pause,
    resume,
    onProgressEnd,
  }
}
