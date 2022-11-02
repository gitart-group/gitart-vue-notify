<script setup lang="ts">
import { VAlert } from 'vuetify/components'
import { NotifyRoot, useNotify } from 'gitart-vue-notify/dev'

const $notify = useNotify()

$notify.add('Goood')

$notify.add(`Goood ${Math.random()}`)
$notify.add('Goood', { type: 'error' })
$notify.add('good lorem ipsumgood lorem ipsum good lorem ipsumgood lorem ipsumgood lorem ipsum', { type: 'error' })
$notify.add('Goood')
$notify.add(`Goood ${Math.random()}`)
$notify.success(`Goood ${Math.random()}`)
</script>

<template>
  <VApp>
    <TheHeader />

    <VMain>
      <VContainer>
        Fine
      </VContainer>
    </VMain>

    <NotifyRoot>
      <template #default="{ progress, message, close, type }">
        <VAlert
          :icon="false"
          class="duration-1000 mb-4 w-full w-[350px]"
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
  </VApp>
</template>
