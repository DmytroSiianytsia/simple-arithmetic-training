<template>
  <div class="answers">
    <p class="answers__item">
      Правильних відповідей
      <span class="answers__correct">{{ correctAnswersCount }}</span>
    </p>
    <p class="answers__item">
      Неправильних відповідей
      <span class="answers__wrong">{{ wrongAnswersCount }}</span>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    correctAnswersCount() {
      return this.$store.state.statistic.correctAnswersCount
    },
    wrongAnswersCount() {
      return this.$store.state.statistic.wrongAnswersCount
    }
  }
}
</script>

<style lang="scss">
.answers {
  &__item {
    margin: 0;
  }

  &__correct,
  &__wrong {
    margin: 0 0.5em;
    font-size: 1.3em;
    font-weight: 400;
  }

  &__correct {
    color: rgb(75, 192, 192);
  }
  &__wrong {
    color: rgb(255, 99, 132);
  }
}
</style>
