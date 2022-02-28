<template>
  <nav>
    <h1 @click="change">{{ title }}</h1>
  </nav>
</template>

<script>
export default {
  name: 'appNavbar',
  props: ['title'],
  methods: {
    change() {
      this.title = 'Hej' //eslint-disable-line
    }
  }
}
</script>

<style scoped>
  nav {
    background: lightseagreen;
    padding: 2rem;
  }

</style>