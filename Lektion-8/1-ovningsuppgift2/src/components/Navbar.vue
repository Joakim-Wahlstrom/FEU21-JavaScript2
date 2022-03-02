<template>
  <nav class="navbar flex">
    <h1 class="logo">LOGO</h1>
    <div v-if="user" class="flex w-20">
      <p>userName</p>
      <button class="btn btn-secondary">Logga ut</button>
    </div>
    <p v-else>Vänligen logga in</p>
  </nav>
</template>

<script>
export default {
  name: 'appNavbar',
  props: ['user']
}
</script>

<style scoped>
  .navbar {
    background: darkslategray;
    color: #fff;
    padding: 1rem 3rem;
  }
  .w-20 {
    width: 35%;
  }
</style>