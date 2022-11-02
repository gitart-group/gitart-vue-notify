import { defu } from 'defu'
import type { Plugin } from 'vue'
import { reactive } from 'vue'
import { notifyInjectionKey } from './constants'

import type {
  AddFn, INotificationController,
  INotificationItem, INotificationOptions, RemoveFn,
} from './type'
import { uuid } from './utils/uuid'

interface INotifyPluginOptions {
  defaults: Partial<INotificationOptions>
  useTransition?: boolean

  /**
   * Notification types that will not be closed automatically
   * even if the duration is set
   */
  notCloseTypes?: INotificationOptions['type'][]
}

export const notifyPlugin: Plugin = {
  install: (app, pluginOptions?: INotifyPluginOptions) => {
    const items = reactive<INotificationItem[]>([])

    const defaults = {
      type: 'default',
      position: 'bottom-right',
      duration: 3000,
      pauseOnHover: true,
      onClose: () => {},
      onClick: () => {},
      ...pluginOptions?.defaults,
    }

    const add: AddFn = (message, options) => {
      const withDefaults = defu(options, defaults) as INotificationOptions

      let duration = withDefaults.duration
      if (pluginOptions?.notCloseTypes?.includes(withDefaults.type)) {
        duration = 0
      }

      const id = uuid()
      items.push({
        ...withDefaults,
        duration,
        message,
        id,
        leaving: false,
      })

      return id
    }

    const createTypeFunction = (type: INotificationOptions['type']): AddFn => (message, options) => {
      return add(message, {
        ...options,
        type,
      })
    }

    const remove: RemoveFn = (id: string) => {
      const item = items.find(item => item.id === id)
      if (item) {
        item.leaving = true
        setTimeout(() => {
          items.splice(items.indexOf(item), 1)
        }, 300)
      }
    }

    const $notify: INotificationController = {
      useTransition: pluginOptions?.useTransition || true,
      items,
      add,
      remove,
      success: createTypeFunction('success'),
      info: createTypeFunction('info'),
      error: createTypeFunction('error'),
      warning: createTypeFunction('warning'),
    }

    app.provide(notifyInjectionKey, $notify)
    app.config.globalProperties.$notify = $notify
  },
}
