<template>
  <div class="user">
    <h3>{{ user.name }}</h3>
    <p>Age: {{ user.age }}</p>
    <p>Email: {{ user.email }}</p>
    <button @click="change">Change</button>
  </div>
</template>

<script>
export default {
  props: ['user'],
  methods: {
    change() {
      this.user.name = 'Hej' //eslint-disable-line
    }
  }
}
</script>

<style scoped>

  .user {
    margin-block: 2rem;
    border: 1px solid #000;
    background: rgb(14, 94, 90);
    color: #fff;
    padding: 1rem;
  }

</style>