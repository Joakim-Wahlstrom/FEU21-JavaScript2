<template>
  <div class="py-3" v-if="todos.length">
    <TransitionGroup name="fade-slide">
      <div v-for="todo in todos" :key="todo._id">
        <TodoListItem v-if="value === ''" :todo="todo" @toggle-complete="$emit('toggle-complete', todo)" @delete-todo="$emit('delete-todo', todo)" />
        <TodoListItem v-else-if="todo.completed === value" :todo="todo" @toggle-complete="$emit('toggle-complete', todo)" @delete-todo="$emit('delete-todo', todo)" />
      </div>
    </TransitionGroup>
    <!-- <TodoListItem v-for="todo in todos" :key="todo._id" :todo="todo" @click="$emit('toggle-complete', todo)" @delete-todo="$emit('delete-todo', todo._id)" /> -->
  </div>
  <div v-else>
    <h2 class="py-3 text-center">No todos left</h2>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
export default {
  components: { TodoListItem },
  props: ['todos', 'value']
}
</script>

<style>
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 500ms ease-out;
  }

  .fade-slide-enter-from {
    opacity: 0;
    transform: translateX(-75px);
    /* transform: scale(0); */
  }
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateX(75px);
  }

</style>