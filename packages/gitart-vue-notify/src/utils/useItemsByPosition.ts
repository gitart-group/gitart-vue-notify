import { computed } from 'vue'
import { NOTIFICATION_POSITIONS } from '../constants'
import type { INotificationController, INotificationItem, INotificationPosition } from '../type'

export const useItemsByPosition = ($notify: INotificationController) => {
  const itemsByPosition = computed(() => {
    const items = $notify.items
    const positions = Object.values(NOTIFICATION_POSITIONS) as INotificationPosition[]

    const itemsByPosition = positions.reduce((acc, position) => {
      acc[position] = []
      return acc
    }, {} as Record<INotificationPosition, INotificationItem[]>)

    items.forEach((item: INotificationItem) => {
      itemsByPosition[item.position].push(item)
    })

    positions.forEach((position: INotificationPosition) => {
      if (itemsByPosition[position].length === 0)
        delete itemsByPosition[position]
    })

    return itemsByPosition
  })

  return {
    itemsByPosition,
  }
}
