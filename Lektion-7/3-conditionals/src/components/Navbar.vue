<template>
  <nav>
    <div class="container">
      <h1>LOGO</h1>
      <ul>
        <li><a href="#">Login</a></li>
        <li><a href="#">Register</a></li>
      </ul>
      <!-- <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'appNavbar'
}
</script>

<style scoped>
  nav {
    background: darkslategray;
    color: #fff;
  }
  nav .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    display: flex;
    list-style: none;
    /* justify-content: space-between; */
    /* width: 25%; */
  }
  a {
    text-decoration: none;
    color: #fff;
    padding: 1rem;
    display: inline-block;
  }
  a:hover {
    background: #00000067;
  }
</style>