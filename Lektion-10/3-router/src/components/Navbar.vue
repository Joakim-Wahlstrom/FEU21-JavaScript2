<template>
  <nav class="navbar d-flex">
    <h1>LOGO</h1>
    <ul class="d-flex">
      <li><router-link to="/" class="link" exact>Home</router-link></li>
      <li><router-link to="/about" class="link" exact>About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style scoped>
  .navbar {
    justify-content: space-between;
    align-items: center;
    background: #214131;
    color: #fff;
    padding: 0 1rem;
  }
  ul {
    list-style: none;
  }
  .link {
    text-decoration: none;
    color: #fff;
    padding: 1rem;
    display: inline-block;
  }
  .link:hover {
    background: #00000059;
  }
  .router-link-active {
    text-decoration: underline;
  }
</style>