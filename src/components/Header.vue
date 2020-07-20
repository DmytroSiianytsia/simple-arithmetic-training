<template>
  <div class="header">
    <div class="header__container">
      <div class="header__data-container">
        <div class="header__data">{{ date | dateFormat }}</div>
      </div>
      <h1 class="header__title">
        Тренування арифметики
      </h1>
      <div class="header__user">Привіт, {{ name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
    interval: null
  }),
  computed: {
    name() {
      return this.$store.state.auth.name
    }
  },
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
    width: 12em;
    align-items: center;
  }

  &__data,
  &__user {
    font-size: 1.2em;
    line-height: 1.2em;
  }

  &__title {
    text-align: center;
    font-size: 2.5em;
  }

  @media (max-width: 760px) {
    &__container {
      width: 90%;
    }

    &__data-container {
      width: 9em;
    }

    &__title {
      font-size: 1.5em;
    }

    &__data,
    &__user {
      font-size: 1em;
      line-height: 1em;
    }
  }
  @media (max-width: 600px) {
    &__container {
      width: 96%;
    }
  }

  @media (max-width: 520px) {
    &__data-container {
      width: 9em;
    }

    &__title {
      font-size: 1.2em;
    }
  }
}
</style>
