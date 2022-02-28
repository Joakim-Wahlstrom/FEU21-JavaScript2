<template>
  <nav class="navbar">
    <div class="container">
      <h1>{{ title }}</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'appNavbar',
  props: ['title']
}
</script>

<style scoped>
  .navbar {
    background: aqua;
    /* padding: 1rem 0; */
  }
  .navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    display: flex;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #000;
    padding: 1rem;
    display: inline-block;
  }
  a:hover {
    background: #0000005b;
  }
</style>