import type { InjectionKey } from 'vue'

export type INotificationPosition =
'top-right'
| 'top'
| 'top-left'
| 'bottom-right'
| 'bottom'
| 'bottom-left'

export type INotificationType = 'success' | 'info' | 'error' | 'warning'

export interface INotificationOptions {
  type: INotificationType
  position: INotificationPosition
  duration: number
  pauseOnHover: boolean
  onClose: () => void
  onClick: () => void
}

export interface INotificationItem extends INotificationOptions {
  message: string
  id: string
  leaving: boolean
}

export type NotificationId = string
export type AddFn = (message: string, options?: Partial<INotificationOptions>) => NotificationId
export type RemoveFn = (id: NotificationId) => void

export interface INotificationController {
  useTransition: boolean
  items: INotificationItem[]
  add: AddFn
  remove: RemoveFn
  success: AddFn
  info: AddFn
  error: AddFn
  warning: AddFn
}

export type NotifyInjectionKey = InjectionKey<INotificationController>
