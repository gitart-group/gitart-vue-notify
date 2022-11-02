import { inject } from 'vue'
import { notifyInjectionKey } from './constants'
import type { INotificationController } from './type'

export const useNotify = (): INotificationController => {
  const $notify = inject(notifyInjectionKey)!
  return $notify
}
