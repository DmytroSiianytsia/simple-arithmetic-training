import firebase from 'firebase/app'

export default {
  state: {
    name: 'Гість'
  },
  actions: {
    async login({ dispatch }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        await dispatch('updateName')
      } catch (e) {
        if (e.code === 'auth/user-not-found') {
          alert('Такого користувача не знайдено')
        } else if (e.code === 'auth/wrong-password') {
          alert('Неправильний пароль')
        } else {
          alert('Щось пішло не так')
        }
        throw e
      }
    },
    async register({ dispatch }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const userId = await dispatch('getUserId')
        await firebase.database().ref(`/users/${userId}`).set({
          name,
          statistic: {
            correctAnswers: 0,
            wrongAnswers: 0
          }
        })
        await dispatch('updateName')
      } catch (e) {
        if (e.code === 'auth/email-already-in-use') {
          alert('Користувач з таким email вже існує')
        }
        throw e
      }
    },
    async getUserId() {
      const user = await firebase.auth().currentUser
      return user ? user.uid : null
    },
    async updateName({ dispatch, commit }) {
      const userId = await dispatch('getUserId')
      const name = (await firebase.database().ref(`/users/${userId}/name`).once('value')).val()
      commit('userName', name)
    },
    async logOut({ commit, dispatch }) {  
      const userId = await dispatch('getUserId')      
      if (!userId) return
      await dispatch('updateStatistic')
      await firebase.auth().signOut()      
      commit('userName', 'Гість')      
    }
  },
  mutations: {
    userName(state, name) {
      state.name = name
    }
  }
}
