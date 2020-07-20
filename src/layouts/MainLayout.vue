<template>
  <div class="main-layout">
    <div class="main-layout__header">
      <Header />
    </div>
    <img
      class="main-layout__menu-burger"
      src="../img/menu-burger.svg"
      alt="menu"
      @click="isShow = !isShow"
    />
    <div class="main-layout__side-bar" :class="{ show: isShow }">
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
  data: () => ({
    isShow: false
  }),
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

  &__menu-burger {
    display: none;
    z-index: 2;
    position: absolute;
    width: 1.8em;
    opacity: 0.6;
    top: 5.5em;
    left: 1em;
    cursor: pointer;
  }

  &__footer {
    grid-area: ft;
  }
}

@media (max-width: 520px) {
  .main-layout {
    grid-template-areas:
      'hd'
      'cn'
      'cn'
      'cn'
      'ft';

    &__side-bar {
      position: absolute;
      width: 10em;
      z-index: 1;
      top: 5em;
      left: -400px;
      transition: 0.5s;
    }

    &__menu-burger {
      display: block;
    }
  }
  .show {
    left: 0;
  }
}
</style>
