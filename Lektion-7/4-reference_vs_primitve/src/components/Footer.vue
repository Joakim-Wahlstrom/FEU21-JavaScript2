<template>
  <footer>
    <h3>copyright {{ title }}</h3>
  </footer>
</template>

<script>
export default {
  name: 'appFooter',
  props: ['title']
}
</script>

<style scoped>
  footer {
    background: lightseagreen;
    padding: 2rem;
  }

</style>