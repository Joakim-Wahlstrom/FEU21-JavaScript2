<template>
  <div class="user">
    <h3>{{ user.name }}</h3>
    <p>Age: {{ user.age }}</p>
    <p>Email: {{ user.email }}</p>
  </div>
</template>

<script>
export default {
  name: 'appUser',
  props: ['user']
}
</script>

<style scoped>

  .user {
    margin-block: 2rem;
    border: 1px solid #000;
    padding: 1rem;
  }

</style>