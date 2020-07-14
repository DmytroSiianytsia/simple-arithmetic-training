<template>
  <div class="header">
    <div class="header__container">
      <div class="header__data-container">
        <div class="header__data">{{ date | dateFormat }}</div>
      </div>
      <h1 class="header__title">
        Тренування арифметики
      </h1>
      <div class="header__user">Привіт, {{ (user.name = 'Гість') }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      name: '',
      id: ''
    },
    date: new Date(),
    interval: null
  }),
  computed: {},
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>

<style lang="scss">
.header {
  position: relative;
  width: 100%;
  height: 5em;
  background-color: #66a5ad;
  color: white;

  &__container {
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__data-container {
    display: flex;
    width: 220px;
    align-items: center;
  }

  &__data,
  &__user {
    font-size: 1.2em;
    line-height: 1.2em;
  }

  &__title {
    font-size: 2.5em;
  }
}
</style>
