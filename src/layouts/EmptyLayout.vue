<template>
  <div class="empty-layout">
    <div class="empty-layout__container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
.empty-layout {
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);

  &__container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
