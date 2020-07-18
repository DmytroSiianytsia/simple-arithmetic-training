<template>
  <div class="card">
    <h2 class="card__title">
      {{ data.arg1 }} {{ data.randomOperation }} {{ data.arg2 }} = ?
    </h2>
    <section class="card__content">
      <button
        class="card__button"
        v-for="(a, index) in data.answers"
        :key="index"
        @click="passIndex(index)"
      >
        {{ a }}
      </button>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    data() {
      return this.$store.state.expression
    }
  },
  methods: {
    passIndex(index) {
      this.$emit('btnIndex', index)
    }
  }
}
</script>

<style lang="scss">
@import './cardStyle.scss';
</style>
