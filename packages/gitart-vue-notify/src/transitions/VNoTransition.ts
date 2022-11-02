import { defineComponent } from 'vue'

export const VNoTransition = defineComponent({
  render() {
    return this.$slots.default?.()
  },
})
