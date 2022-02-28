<template>
  <div>
    <Navbar title="Hello World" />
    <div class="container output">
      <h2>{{ message }}</h2>

      

    </div>
    <Footer msg="message" />
    <Footer v-bind:msg="message" />
    <Footer :msg="message" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
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

</style>