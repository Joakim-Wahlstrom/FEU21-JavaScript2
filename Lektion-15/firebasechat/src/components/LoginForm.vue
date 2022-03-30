<template>
  <form>
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password" >
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

    return { email, password }
  }
}
</script>

<style>

</style>