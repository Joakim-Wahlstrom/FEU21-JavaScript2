<template>
  <nav class="navbar container">
    <h1 class="brand">Joakims Blog</h1>
    <input type="search" class="form-control" placeholder="Search" >
    <ul class="nav-links">
      <li><router-link to="/" class="link">Blogs</router-link></li>
      <li><router-link to="/create"><button class="btn btn-primary btn-large">Create new</button></router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "PrimaryNavigation"
}
</script>

<style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 2rem;
    margin-bottom: 3rem;
  }
  .brand {
    font-size: 2rem;
  }
  .nav-links {
    display: flex;
    list-style: none;
    align-items: center;
  }
  .link {
    color: #000;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 700;
    margin-right: 1rem;
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