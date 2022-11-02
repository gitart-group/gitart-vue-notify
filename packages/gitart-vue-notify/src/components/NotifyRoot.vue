<script setup lang="ts">
import { computed } from 'vue'
import type { INotificationItem } from '../type'
import { useNotify } from '../useNotify'
import { VExpandTransition } from '../transitions/VExpandTransition'
import { VNoTransition } from '../transitions/VNoTransition'
import { useItemsByPosition } from '../utils/useItemsByPosition'
import NotifyContainer from './NotifyContainer.vue'
import NotifyItem from './NotifyItem.vue'

const $notify = useNotify()
const {
  itemsByPosition,
} = useItemsByPosition($notify)

const transitionComponent = computed(() => {
  if ($notify.useTransition)
    return VExpandTransition

  return VNoTransition
})

const onClose = (notification: INotificationItem) => {
  $notify.remove(notification.id)
  notification.onClose()
}

const onClick = (notification: INotificationItem) => {
  notification.onClick()
}
</script>

<template>
  <NotifyContainer
    v-for="items, position in itemsByPosition"
    :key="position"
    :position="position"
    :items="items"
  >
    <template #item="{ item }">
      <Component :is="transitionComponent">
        <NotifyItem
          v-if="!item.leaving"
          :duration="item.duration"
          :pause-on-hover="item.pauseOnHover"
          @close="onClose(item)"
        >
          <template #default="{ progress }">
            <slot
              :id="item.id"
              :message="item.message"
              :progress="progress"
              :type="item.type"
              :position="item.position"
              :close="() => onClose(item)"
              :click="() => onClick(item)"
            />
          </template>
        </NotifyItem>
      </Component>
    </template>
  </NotifyContainer>
</template>
