import { useNotify } from './useNotify'
import { NOTIFICATION_POSITIONS, notifyInjectionKey } from './constants'
import {
  notifyPlugin,
} from './plugin'

export type {
  INotificationItem,
  INotificationController,
  INotificationOptions,
  NotifyInjectionKey,
} from './type'

export {
  useNotify,
  notifyInjectionKey,
  notifyPlugin,
  NOTIFICATION_POSITIONS,
}

export {
  default as NotifyRoot,
} from './components/NotifyRoot.vue'
