<template>
  <Navbar />
  <router-view/>
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
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .btn {
    margin: 1rem 0 0 1rem;
    padding: .5em 1em;
    border-radius: .8em;
    border: 0;
    background: #201d1d;
    color: #fff;
    cursor: pointer;
  }
</style>
