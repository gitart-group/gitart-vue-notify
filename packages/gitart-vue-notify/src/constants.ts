import type { NotifyInjectionKey } from 'src/type'

export const notifyInjectionKey: NotifyInjectionKey = Symbol('GDialog')

export const NOTIFICATION_POSITIONS = {
  TOP_RIGHT: 'top-right',
  TOP: 'top',
  TOP_LEFT: 'top-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM: 'bottom',
  BOTTOM_LEFT: 'bottom-left',
}
