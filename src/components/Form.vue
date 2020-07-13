<template>
  <div class="form-container">
    <form class="form" @submit.prevent>
      <label for="name">Ім'я</label>
      <input type="text" id="name" v-model="name" />
      <hr />
      <label for="password">Пароль</label>
      <input type="password" v-model="password" />
      <hr />
      <button type="submit">{{ btnText }}</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      default: 'Відправити'
    }
  }
}
</script>

<style lang="scss">
.form-container {
  position: relative;
}
.form {
  width: 30em;
  height: 40em;
  background-color: white;
}
</style>
