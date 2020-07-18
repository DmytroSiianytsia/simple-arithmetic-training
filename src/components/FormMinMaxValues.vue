<template>
  <form class="min-max-form" @submit.prevent>
    <h3 class="min-max-form__title">Введіть діапазон значень для прикладів</h3>
    <div class="min-max-form__content">
      <div class="min-max-form__min">
        <label class="min-max-form__label" for="min">Min</label>
        <input
          class="min-max-form__input"
          placeholder="0"
          id="min"
          name="min"
          :value="min"
          @keydown.enter="changeValue($event.target)"
          @change="changeValue($event.target)"
          @focus="clearInput($event.target.name)"
        />
      </div>
      <div class="min-max-form__max">
        <label class="min-max-form__label" for="max">Max</label>
        <input
          class="min-max-form__input"
          placeholder="0"
          id="max"
          name="max"
          :value="max"
          @keydown.enter="changeValue($event.target)"
          @change="changeValue($event.target)"
          @focus="clearInput($event.target.name)"
        />
      </div>
      <p class="min-max-form__error" v-if="isNumber">Введіть число</p>
    </div>
  </form>
</template>

<script>
export default {
  computed: {
    min() {
      return this.$store.state.expression.min
    },
    max() {
      return this.$store.state.expression.max
    },
    isNumber() {
      return this.$store.state.expression.notANumber
    }
  },
  methods: {
    changeValue(e) {
      console.log(e.value)
      this.$store.commit('updateMinMax', e)
      this.$store.dispatch('formExpression')
    },
    clearInput(e) {
      this.$store.commit('updateMinMax', { name: e, value: '' })
    }
  }
}
</script>

<style lang="scss">
.min-max-form,
.min-max-form__min,
.min-max-form__max {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &__title {
    margin: 0.5em 0;
  }

  &__content {
    position: relative;
    width: 75%;
    margin: auto;
    display: flex;
  }

  &__input,
  &__label {
    width: 70%;
    padding: 3px 10px;
    text-align: center;
    outline: none;
    border: none;
    cursor: pointer;
  }

  &__input {
    font-family: 'Baloo Da 2', 'sans-serif', cursive;
    font-size: 1em;
    background-color: #c4dfe6;
    border-radius: 1em;
    transition: 0.3s;

    &:hover,
    &:focus {
      background-color: #a4d8e6;
    }
  }

  &__error {
    position: absolute;
    top: 4em;
    left: 6.5em;
    color: red;
  }
}
</style>
