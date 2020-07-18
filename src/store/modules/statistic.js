import firebase from 'firebase/app'

export default {
  state: {
    correctAnswersCount: 0,
    wrongAnswersCount: 0
  },
  mutations: {
    updateCorrectAnswersCount(state) {
      state.correctAnswersCount++
    },
    updateWrongAnswersCount(state) {
      state.wrongAnswersCount++
    },
    clearStatistic(state) {
      state.correctAnswersCount = 0
      state.wrongAnswersCount = 0        
    }    
  },
  actions: {
    async updateStatistic({ dispatch, state }) { 
      const userId = await dispatch('getUserId')
      const oldStatistic = await dispatch('getStatistic')
      const correct = oldStatistic.correctAnswers
      const wrong = oldStatistic.wrongAnswers      

      await firebase.database().ref(`/users/${userId}/statistic`).update({
        correctAnswers: state.correctAnswersCount + correct,
        wrongAnswers: state.wrongAnswersCount + wrong,
      })      
    },
    async getStatistic({dispatch}) {
      const userId = await dispatch('getUserId')
      const statistic = (await firebase.database().ref(`/users/${userId}/statistic`).once('value')).val()
      return statistic
    }
  },
}
