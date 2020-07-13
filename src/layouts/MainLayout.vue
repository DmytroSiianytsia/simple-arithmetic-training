<template>
  <div class="main-layout">
    <div class="main-layout__header">
      <Header />
    </div>
    <div class="main-layout__side-bar">
      <SideBar />
    </div>
    <div class="main-layout__content">
      <component :is="component">
        <router-view></router-view>
      </component>
    </div>
    <div class="main-layout__footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'
import Footer from '@/components/Footer.vue'
import Card from '@/components/Card'

export default {
  data: () => ({
    component: 'card'
  }),
  components: {
    Header,
    SideBar,
    Footer,
    Card
  }
}
</script>

<style lang="scss">
.main-layout {
  display: grid;
  align-items: center;
  grid-template-areas:
    'hd hd hd hd hd hd'
    'sb cn cn cn cn cn'
    'sb cn cn cn cn cn'
    'sb cn cn cn cn cn'
    'ft ft ft ft ft ft';

  &__header {
    grid-area: hd;
  }
  &__side-bar {
    grid-area: sb;
  }
  &__content {
    grid-area: cn;
    justify-self: center;
  }
  &__footer {
    grid-area: ft;
  }
}
</style>
