<template>
  <div id="app">
    <component :is="getLayout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout.vue'
import MainLayout from './layouts/MainLayout.vue'

export default {
  computed: {
    getLayout() {
      console.log(this.$route.meta)
      return this.$route.meta.layout + '-layout'
    }
  },
  components: {
    MainLayout,
    EmptyLayout
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: 'Baloo Da 2', 'sans-serif', cursive;
}
</style>
