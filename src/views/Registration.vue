<template>
  <Form />
</template>

<script>
import Form from '@/components/Form.vue'

export default {
  data: () => ({
    name: '',
    password: ''
  }),
  components: {
    Form
  }
}
</script>
