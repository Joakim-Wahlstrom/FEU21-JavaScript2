<template>
  <div class="home">
    <h1>Home</h1>
    <router-link to="/details/1" class="card" id="card1">
      <h3>hej</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </router-link>
    <router-link to="/details/2" class="card" id="card2">
      <h3>card2</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </router-link>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style>
  .card {
    text-decoration: none;
    color: #000;
    display: block;
    border: 1px solid #333;
    padding: 2rem;
    border-radius: 1rem;
    margin-block: 2rem;
  }
</style>