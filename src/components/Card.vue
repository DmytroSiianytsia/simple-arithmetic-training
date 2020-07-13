<template>
  <div>
    <transition name="flip" appear mode="out-in">
      <div class="card" v-if="!isClick" key="card">
        <h2 class="card__title">{{ arg1 }} + {{ arg2 }} = ?</h2>
        <section class="card__content">
          <button
            class="card__button"
            v-for="(a, index) in answers"
            :key="index"
            @click="checkAnswer(index)"
          >
            {{ a }}
          </button>
        </section>
      </div>
      <div
        class="card card-correct"
        v-else-if="isCorrectAnswer"
        key="card-correct"
      >
        <p class="card__text">МОЛОДЕЦ !!! Правильный ответ.</p>
        <button class="card__button" @click="nextQuestion">
          следующий пример
        </button>
      </div>
      <div class="card card-wrong" v-else-if="isWrongAnswer" key="card-wrong">
        <p class="card__text">МИМО !!! Ответ не правильный</p>
        <button class="card__button" @click="nextQuestion">
          следующий пример
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    arg1: '',
    arg2: '',
    min: '',
    max: '',
    answers: [],
    indexRightAnswer: '',
    isCorrectAnswer: false,
    isWrongAnswer: false,
    isClick: false
  }),
  methods: {
    getRandomNumFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    formExpression() {
      this.arg1 = this.getRandomNumFromRange(-100, 100)
      this.arg2 = this.getRandomNumFromRange(-100, 100)
      this.fillAnswers()
    },
    getResult() {
      return this.arg1 + this.arg2
    },
    fillAnswers() {
      const result = this.getResult()
      for (let i = 0; i < 4; i++) {
        this.answers.push(this.getRandomNumFromRange(result - 10, result + 10))
      }
      this.indexRightAnswer = this.getRandomNumFromRange(0, 3)
      this.answers[this.indexRightAnswer] = result
    },
    checkAnswer(index) {
      this.isClick = true
      if (index === this.indexRightAnswer) {
        this.isCorrectAnswer = true
      } else {
        this.isWrongAnswer = true
      }
    },
    nextQuestion() {
      this.answers = []
      this.isClick = false
      this.isCorrectAnswer = false
      this.isWrongAnswer = false
      this.formExpression()
    }
  },
  mounted() {
    this.formExpression()
  }
}
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 200px;
  text-align: center;
  background: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 0 6px #000000;
  box-sizing: border-box;

  &__title {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    padding: 0.5em;
    margin: 0;
    color: white;
    background: #07575b;
  }

  &__content {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    border: none;
    flex-grow: 1;
  }

  &__button {
    width: 8em;
    margin: auto;
    padding: 0.3em 1em;
    font-family: 'Baloo Da 2', 'sans-serif', cursive;
    font-size: 1.1rem;
    background: #c4dfe6;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    box-shadow: 1px 1px 3px #07575b;

    &:hover {
      background: #66a5ad;
      cursor: pointer;
    }
    &:focus {
      box-shadow: 1px 1px 1px #07575b;
    }
  }
}

.card-correct,
.card-wrong {
  justify-content: center;
  align-items: center;
}
.card-correct {
  background: rgb(125, 241, 179);
}
.card-wrong {
  background: rgb(241, 131, 131);
}

.flip-enter-active {
  animation: flip-in 0.2s;
}

.flip-leave-active {
  animation: flip-out 0.2s;
}
@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}
@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
</style>
