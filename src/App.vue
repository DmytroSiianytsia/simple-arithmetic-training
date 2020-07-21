<template>
  <div id="app">
    <transition name="show" mode="out-in">
      <component :is="getLayout">
        <router-view />
      </component>
    </transition>
  </div>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout.vue'
import MainLayout from './layouts/MainLayout.vue'

export default {
  computed: {
    getLayout() {
      if (this.$route.meta.layout) {
        return this.$route.meta.layout + '-layout'
      }
    }
  },
  components: {
    MainLayout,
    EmptyLayout
  }
}
</script>

<style lang="scss">
@import url('./animation-show.scss');

body {
  margin: 0;
  padding: 0;
  font-family: 'Baloo Da 2', 'sans-serif', cursive;
}

@media (max-width: 1024px) {
  body {
    font-size: 12px;
  }
}
</style>
