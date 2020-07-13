<template>
  <div class="header">
    <div class="header__container">
      <div class="header__data">{{ new Date() }}</div>
      <h1 class="header__title">
        Тренування усної арифметики
      </h1>
      <div>Привіт, {{ (user.name = 'Гість') }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      name: '',
      id: ''
    }
  }),
  computed: {
    getDate() {
      const date = setInterval(() => {}, 1000)
    }
  }
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 5em;
  background-color: #66a5ad;
  color: white;

  &__container {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
}
</style>
