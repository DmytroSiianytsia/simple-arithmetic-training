<template>
  <div class="chart">
    <canvas ref="canvas" width="360" height="360"></canvas>
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
