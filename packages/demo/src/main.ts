import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { notifyPlugin } from 'gitart-vue-notify/dev'

import App from './App.vue'

import '@mdi/font/css/materialdesignicons.css'
import 'virtual:windi.css'
import './scss/main.scss'

const app = createApp(App)

app.use(createVuetify({
  defaults: {
    VBtn: {
      variant: 'flat',
    },
  },
}))

app.use(notifyPlugin, {
  defaults: {
    type: 'info',
    position: 'top',
  },
  notCloseTypes: ['error'],
})

app.mount('#app')
