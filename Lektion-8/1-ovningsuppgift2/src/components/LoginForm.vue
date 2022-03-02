<template>
  <form class="login-form">
    <h1 class="title">LOGIN</h1>
    <div class="input-group">
      <label for="name">Namn: </label>
      <input type="text" id="name" class="form-control" v-model="name">
    </div>
    <div class="input-group">
      <label for="password">Lösenord: </label>
      <input type="text" id="password" class="form-control" v-model="password">
    </div>
    <p class="error">{{ error }}</p>
    <div class="input-group">
      <button class="btn btn-primary btn-block">Logga in</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      password: '',
      error: ''
    }
  }
}
</script>

<style scoped>
  .login-form {
    width: 500px;
    margin: 3rem auto;
    box-shadow: 3px 3px 7px #0000007c;
    border-radius: 1rem;
  }
  .title {
    text-align: center;
    padding: 1rem;
    border-bottom: 1px solid #bbb;
    margin-bottom: 1rem;
  }
  .input-group {
    padding: 0 1rem 1rem 1rem;
  }
  .form-control {
    width: 100%;
    display: block;
    padding: .7em;
    border: 1px solid #bbbbbb;
    border-radius: .7em;
    margin-top: .5rem;
  }
  .error {
    text-align: center;
    margin-bottom: 1rem;
    color: red;
  }
</style>