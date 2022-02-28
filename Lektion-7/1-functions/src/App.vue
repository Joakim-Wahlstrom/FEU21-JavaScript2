<template>
  <div>
    <Navbar title="Hello World" />
    <div class="container output">
      <h2>{{ message }}</h2>

      <Functions class="mt-5" />

      <TextInput class="mt-5" />

      <Computed class="mt-5" />

    </div>
    <Footer msg="message" />
    <Footer v-bind:msg="message" />
    <Footer :msg="message" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Functions from './components/Functions.vue'
import TextInput from './components/TextInput.vue'
import Computed from './components/Computed.vue'

export default {
  components: {
    Navbar,
    Footer,
    Functions,
    TextInput,
    Computed
  },
  data() {
    return {
      message: 'Ett meddelande från våran data'
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 80%;
  margin: 0 auto;
}
.output {
  min-height: 500px;
}
.mt-5 {
  margin-top: 3rem;
}

</style>