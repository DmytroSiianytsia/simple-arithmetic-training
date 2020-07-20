<template>
  <div class="chart">
    <canvas ref="canvas" width="300" height="300"></canvas>
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'

export default {
  props: ['correct', 'wrong'],
  extends: Pie,
  mounted() {
    this.renderChart({
      labels: ['Правильні відповіді', 'Неправильні відповіді'],
      datasets: [
        {
          label: 'Статистика',
          data: [this.correct, this.wrong],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
          borderWidth: 1
        }
      ]
    })
  }
}
</script>

<style lang="scss">
.chart {
  width: 25em;
  height: 25em;

  @media (min-width: 520px) {
    .chart {
      width: 18em;
      height: 18em;
    }
  }
}
</style>
