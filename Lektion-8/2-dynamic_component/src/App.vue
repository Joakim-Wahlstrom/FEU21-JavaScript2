<template>
  <div>
    <div class="container mt-5">
      <button class="btn btn-sm" :class="loginClasses" @click="change('Login')">Login</button>
      <button class="btn btn-sm" :class="registerClasses" @click="change('Register')">Register</button>
      <div class="border border-primary p-4">
        <keep-alive>
          <component :is="comp" />
        </keep-alive>
        <!-- <Login v-if="isLogin" />
        <Register v-if="!isLogin" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Login from './components/LoginForm.vue'
import Register from './components/SignupForm.vue'
export default {
  components: {
    Login,
    Register
  },
  data() {
    return {
      comp: 'Login',
      isLogin: true
    }
  },
  methods: {
    change(val) {
      this.comp = val
      if(val === 'Login'){
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    }
  },
  computed: {
    loginClasses() {
      return {
        'btn-primary': this.isLogin,
        'btn-outline-primary': !this.isLogin
      }
    },
    registerClasses(){
      return {
        'btn-primary': !this.isLogin,
        'btn-outline-primary': this.isLogin
      }
    }
  }
}
</script>

<style>

</style>