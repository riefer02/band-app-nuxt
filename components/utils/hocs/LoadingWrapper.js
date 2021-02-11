import Vue from 'vue'
import Loader from '@/components/utils/Loader.vue'

export const loadingWrapper = (component) => {
  return Vue.component('LoadingWrapper', {
    computed: {
      isLoading() {
        return this.$store.state.isLoading
      },
    },
    render(createElement) {
      if (this.isLoading) {
        return createElement(Loader)
      } else {
        return createElement(component)
      }
    },
  })
}
