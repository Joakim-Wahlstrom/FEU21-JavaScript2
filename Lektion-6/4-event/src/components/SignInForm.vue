<template>
  <!-- Default form login -->
<form class="card text-center border border-light p-5" @submit.prevent="handleSubmit" action="#!">

    <p class="h4 mb-4">Sign in</p>

    <!-- Email -->
    <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" ref="email" @keyup="handleChange" placeholder="E-mail">

    <!-- Password -->
    <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" v-model="password" placeholder="Password">

    <div class="d-flex justify-content-around">
        <div>
            <!-- Remember me -->
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
        <div>
            <!-- Forgot password -->
            <a href="">Forgot password?</a>
        </div>
    </div>

    <!-- Sign in button -->
    <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>

    {{ email }}
    {{ password }}


</form>
<!-- Default form login -->
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleChange() {
      this.email = this.$refs.email.value
    },
    handleSubmit() {
      // e.preventDefault()
      console.log(this.email, this.password)
      // this.email = ''
      this.$refs.email.value = ''
      this.password = ''
      this.$refs.email.focus()
    }
  }
}
</script>

<style>

</style>