<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="Email" class="form-control" v-model="email">
    <input type="password" required placeholder="Password" class="form-control" v-model="password" >
    <div class="error" v-if="error">{{error}}</div>
    <button class="btn btn-primary">Log in</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin'
export default {
  setup(props, { emit }) {
    const email = ref('')
    const password = ref('')

    const { error, login } = useLogin()

    const handleSubmit = async () => {
      await login(email.value, password.value)

      if(!error.value) {
        emit('login')
      }
    }

    return { email, password, handleSubmit, error }
  }
}
</script>

<style>

</style>