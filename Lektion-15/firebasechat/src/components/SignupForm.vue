<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Name" class="form-control" v-model="displayName">
    <input type="email" required placeholder="Email" class="form-control" v-model="email">
    <div class="form-group">
      <input type="password" required placeholder="Password" class="form-control" v-model="password" >
      <input type="password" required placeholder="Repeat password" class="form-control" v-model="repeatPassword" >
    </div>
    <div class="error" v-if="error">{{error}}</div>
    <button class="btn btn-primary">Sign up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup'
export default {
  setup(props, { emit }) {
    const displayName = ref('')
    const email = ref('')
    const password = ref('')
    const repeatPassword = ref('')

    const { error, signup } = useSignup()

    const handleSubmit = async () => {
      if(password.value !== repeatPassword.value) return

      await signup(email.value, password.value, displayName.value)

      if(!error.value) {
        emit('signup')
      }

    }

    return { email, password, displayName, repeatPassword, handleSubmit, error }
  }
}
</script>

<style>

</style>