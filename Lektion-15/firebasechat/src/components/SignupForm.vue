<template>
  <form>
    <input type="text" required placeholder="Name" v-model="displayName">
    <input type="email" required placeholder="Email" v-model="email">
    <div class="form-group">
      <input type="password" required placeholder="Password" v-model="password" >
      <input type="password" required placeholder="Repeat password" v-model="repeatPassword" >
    </div>
    <!-- <div class="error">error</div> -->
    <button class="btn btn-primary">Log in</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const repeatPassword = ref('')
    const displayName = ref('')

    return { email, password, displayName,repeatPassword }
  }
}
</script>

<style>

</style>