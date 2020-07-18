<template>
  <div class="side-bar">
    <ul class="side-bar__list">
      <router-link
        v-for="link in links"
        :key="link.name"
        class="side-bar__item"
        active-class="active"
        tag="li"
        :to="link.url"
        :exact="link.exact"
        :class="{ disable: link.disable }"
      >
        {{ link.name }}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'Тренування', url: '/content', disable: false },
      { name: 'Статистика', url: '/statistic', disable: false },
      { name: 'Вхід', url: '/login', disable: false },
      { name: 'Реєстрація', url: '/', disable: false, exact: true },
      { name: 'Вихід', url: '/login' }
    ]
  }),
  computed: {
    checkAuth() {
      const name = this.$store.state.auth.name
      let mapLinks = []
      if (name === 'Гість') {
        mapLinks = this.links.map(link => ({
          ...link,
          disable:
            link.name === 'Статистика'
              ? (link.disable = true)
              : (link.disable = false)
        }))
      } else {
        mapLinks = this.links.map(link => ({
          ...link,
          disable:
            link.name === 'Вхід' || link.name === 'Реєстрація'
              ? (link.disable = true)
              : (link.disable = false)
        }))
      }
      return mapLinks
    }
  },
  mounted() {
    this.checkAuth
  }
}
</script>

<style lang="scss">
.side-bar {
  height: calc(100vh - 10em);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c4dfe6;

  &__list {
    margin-top: 2em;
    padding: 0;
    list-style: none;
  }

  &__item {
    padding: 0.3em 0.6em;
    margin: 0.5em 0;
    background-color: white;
    border-radius: 1em;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      color: white;
      background-color: #66a5ad;
    }
  }
}

.active {
  color: white;
  background-color: #66a5ad;
}

.disable {
  pointer-events: none;
  opacity: 0.6;
}
</style>
