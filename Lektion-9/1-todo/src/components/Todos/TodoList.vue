<template>
  <div class="py-3">
    <TodoListItem v-for="todo in todos" :key="todo._id" :todo="todo" />
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
export default {
  components: { TodoListItem },
  props: ['todos']
}
</script>

<style>

</style>