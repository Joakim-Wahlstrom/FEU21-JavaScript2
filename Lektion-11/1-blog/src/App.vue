<template>
  <Navbar />
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #e5e8f8;
  }
  .container {
    width: 80%;
    margin: 0 auto;
  }
  .btn {
    padding: .6em 1.2em;
    border-radius: .5em;
    border: 0;
    font-weight: 700;
    cursor: pointer;
    background: transparent;
  }
  .btn-primary {
    background: #cca217;
    color: #000;
  }
  .btn-large {
    font-size: 1rem;
  }
  .form-control {
    font-size: 1rem;
    padding: .5em;
    border: 1px solid #cecece;
    border-radius: .5em;
  }
  .form-control:focus {
    outline: 1px solid #6d6d6d;
  }
</style>