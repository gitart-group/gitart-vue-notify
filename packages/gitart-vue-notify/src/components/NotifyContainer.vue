<script setup lang="ts">
import type { INotificationItem, INotificationPosition } from '../type'

defineProps<{
  position: INotificationPosition
  items: INotificationItem[]
}>()
</script>

<template>
  <div
    class="v-notify-container"
    :class="[
      `v-notify-container--${position}`,
    ]"
  >
    <slot
      v-for="item in items"
      :key="item.id"
      name="item"
      :item="item"
    />
  </div>
</template>

<style lang="scss">
.v-notify-container {
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  pointer-events: none;

  > * {
    pointer-events: all;
  }

  &--top {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column-reverse;
  }

  &--top-left {
    top: 0;
    left: 0;
    flex-direction: column-reverse;
  }

  &--top-right {
    top: 0;
    right: 0;
    flex-direction: column-reverse;
  }

  &--bottom-left {
    bottom: 0;
    left: 0;
  }

  &--bottom-right {
    bottom: 0;
    right: 0;
  }
}
</style>
