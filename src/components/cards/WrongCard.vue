<template>
  <div class="card card-wrong">
    <p class="card__text">Не поспішай! Відповідь неправильна.</p>
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
