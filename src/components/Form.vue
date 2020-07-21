<template>
  <form
    class="form"
    :class="{ shortForm: !isRegister }"
    @submit.prevent="onSubmit"
  >
    <div class="form__header">
      <h1 class="form__title">{{ title }}</h1>
    </div>
    <div class="form__inputs">
      <div class="form__mail" v-if="isRegister">
        <label class="form__label" for="name">ім'я</label>
        <input
          class="form__input"
          type="text"
          id="name"
          v-model.trim="name"
          required
        />
      </div>
      <div class="form__mail">
        <label class="form__label" for="email">пошта</label>
        <input
          class="form__input"
          type="email"
          id="email"
          v-model.lazy="email"
          @change="checkEmail"
          required
        />
        <small class="form__error" v-if="showErrorEmail">
          Введіть коректний email
        </small>
      </div>
      <div class="form__password">
        <label class="form__label" for="password">пароль</label>
        <input
          class="form__input"
          type="password"
          v-model.trim.lazy="password"
          @change="checkPassword"
          required
        />
        <small class="form__error" v-if="showErrorPassword">
          Довжина пароля мінімум {{ minLength }} символів
        </small>
      </div>
    </div>

    <button class="form__button" type="submit">{{ btnText }}</button>
    <div class="form__links">
      <router-link class="form__link" to="/login" v-if="isRegister">
        Вхід
      </router-link>
      <router-link class="form__link" to="/" v-else>Реєстрація</router-link>
      <router-link class="form__link" to="/content">Зайти як гість</router-link>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      default: 'Відправити'
    },
    title: {
      type: String,
      required: true
    },
    isRegister: {
      type: String
    }
  },
  data: () => ({
    name: '',
    email: '',
    password: '',
    minLength: 6,
    showErrorEmail: false,
    showErrorPassword: false
  }),
  methods: {
    checkEmail() {
      if (this.email.match(/.+@.{2,6}\..{2,4}/)) {
        this.showErrorEmail = false
      } else {
        this.showErrorEmail = true
      }
    },
    checkPassword() {
      if (this.password.length < this.minLength) {
        this.showErrorPassword = true
      } else {
        this.showErrorPassword = false
      }
    },
    async onSubmit() {
      if (this.showErrorEmail || this.showErrorPassword) return
      if (this.isRegister) {
        const user = {
          name: this.name,
          email: this.email,
          password: this.password
        }

        try {
          await this.$store.dispatch('register', user)
          this.$router.push('/content')
        } catch (e) {}
      } else {
        const user = {
          email: this.email,
          password: this.password
        }

        try {
          await this.$store.dispatch('login', user)
          this.$router.push('/content')
        } catch (e) {}
      }
    }
  },
  async mounted() {
    this.$store.commit('clearStatistic')
    await this.$store.dispatch('logOut')
  }
}
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 22em;
  height: 30em;
  background-color: white;
  box-shadow: 0 0 0.8em white;
  border-radius: 0.5em;

  &__header {
    width: 100%;
    background-color: #66a5ad;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
  }

  &__title {
    text-align: center;
    color: white;
  }

  &__mail,
  &__password {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
  }

  &__label {
    font-size: 1em;
    color: #cccccc;
  }

  &__input {
    width: 12em;
    height: 1.3em;
    margin-top: 0.5em;
    padding: 0 0.7em;
    font-size: 1.2em;
    outline: none;
    border: none;
    color: #575555;
    border-bottom: 1px solid #cccccc;
  }

  &__button {
    width: 10em;
    padding: 0.3em;
    font-size: 1.1em;
    font-family: 'Baloo Da 2', 'sans-serif', cursive;
    border: none;
    outline: none;
    border-radius: 0.4em;
    color: #575555;
    background-color: #c4dfe6;
    box-shadow: 0 0 0.3em #07575b;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      color: white;
      background-color: #66a5ad;
    }

    &:focus {
      box-shadow: 0 0 0.1em #07575b;
    }
  }

  &__links {
    width: 12.5em;
    display: flex;
    justify-content: space-between;
  }

  &__link {
    margin-bottom: 1em;
    color: #07575b;
    text-decoration: none;
    transition: 0.4s;

    &:hover {
      color: #66a5ad;
    }
  }

  &__error {
    position: absolute;
    bottom: -1.8em;
    color: red;
  }
}

.shortForm {
  width: 20em;
  height: 25em;
}
</style>
