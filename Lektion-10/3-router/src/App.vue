<template>
  <Navbar />
  <router-view/>
  <div>
    <h1>FOOTER</h1>
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
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  width: 80%;
  margin: 0 auto;
}
.d-flex {
  display: flex;
}
</style>
