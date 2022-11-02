# Gitart Toast Notify

Vue 3 Toast notification plugin.

```ts
import from 'gitart-vue-notify/dist'
import { notifyPlugin } from 'gitart-vue-notify/dev'

app.use(notifyPlugin, {
  defaults: {
    duration: 5000,
    position: 'top-right',
    // ...
  }
})
```

Put `NotifyRoot` component in your app root component.


```ts
// App.vue
import { NotifyRoot } from 'gitart-vue-notify'
```

```html
<template>
  <NotifyRoot>
    <template #default="{ progress, message, close, type }">
      <VAlert
        class="duration-1000 my-2"
        :type="type"
        @click="close"
      >
        {{ message }} {{ progress?.toFixed(2) }}

        <div
          v-if="progress"
          class="absolute bottom-0 left-0 right-0 h-1 bg-teal-500"
          :style="{
            width: `${progress}%`,
          }"
        />
      </VAlert>
    </template>
  </NotifyRoot>
</template>
```

## Usage

```ts
import { useNotify } from 'gitart-vue-notify'

const notify = useNotify()

notify.success('Hello world')
notify.add('Hello world', {
  type: 'success', duration: 3000,
  // ...
})

const id = notify.success('New Notification')
// remove current notify
notify.remove(id)
```

## API

### plugin

<!-- ```ts -->

- `defaults` - default options for all notifications (`INotificationOptions`)
- `notCloseTypes` - types of notifications that will not ba closed automatically (`INotificationType[]`)
- 

### useNotify()

```ts
const notify = useNotify()
```

### INotificationOptions

```ts
interface INotificationOptions {
  type: INotificationType
  position: INotificationPosition
  duration: number
  pauseOnHover: boolean
  onClose: () => void
  onClick: () => void
}

type INotificationType = 'success' | 'error' | 'warning' | 'info'
```

## NotifyRoot.vue

### Item slot

```ts
interface NotifyItem {
  id: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  duration: number
  close: () => void
  click: () => void

  /**
   * from 0 to 100
   * null if duration is 0
   */
  progress: number | null
}
```