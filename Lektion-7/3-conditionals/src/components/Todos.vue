<template>
  <div class="todos">
    <div v-if="todos.length">
      <p>{{todos[0].title}}</p>
    </div>
    <h2 v-else>Det finns inga todos, lägg till några vetja!</h2>
  </div>
</template>

<script>

export default {
  name: 'appTodos',
  props: ['todos']
}
</script>

<style scoped>
  .todos {
    margin-top: 2rem;
  }
</style>