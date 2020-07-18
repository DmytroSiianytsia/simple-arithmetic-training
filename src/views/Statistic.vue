<template>
  <div>
    <h2 class="loading" v-if="!statistic">Loading...</h2>
    <div v-else>
      <div class="statistic">
        <h2 class="statistic__title">Статистика</h2>
        <Chart
          :correct="getPercentCorrectAnswers"
          :wrong="100 - getPercentCorrectAnswers"
        />
        <div>
          <p>
            Правильних відповідей:
            <span class="statistic__correct-result">
              {{ statistic.correctAnswers }} - {{ getPercentCorrectAnswers }}%
            </span>
          </p>
          <p>
            Неправильних відповідей:
            <span class="statistic__wrong-result">
              {{ statistic.wrongAnswers }} -
              {{ 100 - getPercentCorrectAnswers }}%
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from '../components/Chart.vue'

export default {
  name: 'statistic',
  data: () => ({
    statistic: ''
  }),
  computed: {
    getPercentCorrectAnswers() {
      let { correctAnswers, wrongAnswers } = this.statistic
      if (correctAnswers + wrongAnswers === 0) return 0
      return Math.round(
        (100 / (correctAnswers + wrongAnswers)) * correctAnswers
      )
    }
  },
  async mounted() {
    await this.$store.dispatch('updateStatistic')
    this.statistic = await this.$store.dispatch('getStatistic')
    this.$store.commit('clearStatistic')
  },
  components: {
    Chart
  }
}
</script>

<style lang="scss">
.loading {
  width: 17em;
  text-align: center;
}

.statistic {
  width: 25.5em;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__correct-result,
  &__wrong-result {
    margin: 0 0.5em;
    font-size: 1.3em;
    font-weight: 400;
  }

  &__correct-result {
    color: rgb(75, 192, 192);
  }

  &__wrong-result {
    color: rgb(255, 99, 132);
  }
}
</style>
