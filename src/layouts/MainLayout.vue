<template>
  <div class="main-layout">
    <div class="main-layout__header">
      <Header />
    </div>
    <div class="main-layout__side-bar">
      <transition name="show" mode="out-in">
        <SideBar />
      </transition>
    </div>
    <div class="main-layout__content">
      <transition name="show" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <div class="main-layout__footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import SideBar from '../components/SideBar.vue'
import Footer from '../components/Footer.vue'
import Content from '../views/Content.vue'

export default {
  components: {
    Header,
    SideBar,
    Footer,
    Content
  }
}
</script>

<style lang="scss">
@import url('../animation-show.scss');
.main-layout {
  display: grid;
  align-items: center;
  grid-template-areas:
    'hd hd hd hd hd hd hd'
    'sb cn cn cn cn cn cn'
    'sb cn cn cn cn cn cn'
    'sb cn cn cn cn cn cn'
    'ft ft ft ft ft ft ft';

  &__header {
    grid-area: hd;
  }
  &__side-bar {
    grid-area: sb;
  }
  &__content {
    grid-area: cn;
    justify-self: center;
    align-items: center;
  }
  &__footer {
    grid-area: ft;
  }
}
</style>
