import { getRandomNumFromRange, getResult } from './helperFunctions'

export default {
  state: {
    min: 0,
    max: 10,
    arg1: '',
    arg2: '',
    indexRightAnswer: '',
    operations: ['+', '-'],
    randomOperation: '+',
    answers: [],
    notANumber: false
  },
  mutations: { 
    updateMinMax(state, payload) {
      if (isNaN(Number(payload.value))) {
        state.notANumber = true        
      } else {        
        state.notANumber = false
        state[payload.name] = payload.value
      }      
     },    
    getRandomOperation(state) {
      state.randomOperation = state.operations[
        getRandomNumFromRange(0, 1)
      ]
    },
    getArguments(state) {       
      state.arg1 = getRandomNumFromRange(+state.min, +state.max)
      state.arg2 = getRandomNumFromRange(+state.min, +state.max)       
    },
    fillAnswers(state) {
      const result = getResult(state.arg1, state.arg2, state.randomOperation)
      const set = new Set()
      while (!(set.size === 4)) {
        set.add(getRandomNumFromRange(result - 10, result + 10))
        set.delete(result)
      }
      state.answers = Array.from(set)
      state.indexRightAnswer = getRandomNumFromRange(0, 3)
      state.answers[state.indexRightAnswer] = result
    },    
  },
  actions: {
    formExpression({ commit }) {
      commit('getRandomOperation')
      commit('getArguments')
      commit('fillAnswers')
    }
  },
}
