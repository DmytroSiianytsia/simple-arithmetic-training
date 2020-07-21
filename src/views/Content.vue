<template>
  <div class="content">
    <FormMinMaxValues />
    <transition name="flip" appear mode="out-in">
      <QuestionCard
        v-if="!isClick"
        key="question-card"
        @btnIndex="checkAnswer"
      />

      <CorrectCard
        v-else-if="isCorrectAnswer"
        key="correct-card"
        @next="nextQuestion"
      />

      <WrongCard
        v-else-if="isWrongAnswer"
        key="wrong-card"
        @next="nextQuestion"
      />
    </transition>
    <Answers />
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import QuestionCard from '@/components/cards/QuestionCard.vue'
import CorrectCard from '@/components/cards/CorrectCard.vue'
import WrongCard from '@/components/cards/WrongCard.vue'
import FormMinMaxValues from '@/components/FormMinMaxValues.vue'
import Answers from '@/components/Answers.vue'

export default {
  data: () => ({
    isCorrectAnswer: false,
    isWrongAnswer: false,
    isClick: false
  }),
  methods: {
    ...mapActions(['formExpression']),
    ...mapMutations(['updateCorrectAnswersCount', 'updateWrongAnswersCount']),
    checkAnswer(index) {
      this.isClick = true
      if (index === this.$store.state.expression.indexRightAnswer) {
        this.isCorrectAnswer = true
        this.updateCorrectAnswersCount()
      } else {
        this.isWrongAnswer = true
        this.updateWrongAnswersCount()
      }
    },
    nextQuestion() {
      this.isClick = false
      this.isCorrectAnswer = false
      this.isWrongAnswer = false
      this.formExpression()
    }
  },
  mounted() {
    this.formExpression()
  },
  components: {
    QuestionCard,
    CorrectCard,
    WrongCard,
    FormMinMaxValues,
    Answers
  }
}
</script>

<style lang="scss">
.content {
  height: calc(100vh - 10em);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.flip-enter-active {
  animation: flip-in 0.2s ease-out;
}

.flip-leave-active {
  animation: flip-out 0.2s ease-out;
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

@media (orientation: landscape) {
  .content {
    width: calc(100vw - 15%);
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
