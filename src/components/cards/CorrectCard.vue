<template>
  <div class="card card-correct">
    <p class="card__text">Молодець! Правильна відповідь.</p>
    <button class="card__button" @click="nextQuestion">
      наступний приклад
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    nextQuestion() {
      this.$emit('next')
    }
  }
}
</script>

<style lang="scss">
@import './cardStyle.scss';
</style>
