<script setup lang="ts">
import { useProgress } from '../utils/useProgress'

const props = defineProps<{
  duration: number
  pauseOnHover: boolean
}>()

const emit = defineEmits<{
  (event: 'close'): void
}>()

const {
  progress,
  pause,
  resume,
  onProgressEnd,
} = useProgress(props.duration)

onProgressEnd(() => {
  emit('close')
})

const onMouseenter = () => {
  if (props.pauseOnHover)
    pause()
}

const onMouseleave = () => {
  if (props.pauseOnHover)
    resume()
}

</script>

<template>
  <div
    class="v-notify-item"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
  >
    <slot
      :progress="duration && progress"
    />
  </div>
</template>
