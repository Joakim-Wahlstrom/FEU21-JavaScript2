<template>
  <div>
    <AddTodoForm />
    <div class="container">
      <TodoList :todos="todos" />
    </div>
  </div>
</template>

<script>
import AddTodoForm from './components/AddTodoForm.vue'
import TodoList from './components/Todos/TodoList.vue'
export default {
  components: { 
    AddTodoForm,
    TodoList 
  },
  data() {
    return {
      todos: [
        { _id: '1', title: 'Todo Item One', completed: false },
        { _id: '2', title: 'Todo Item Two', completed: true },
        { _id: '3', title: 'Todo Item Three', completed: false },
        { _id: '4', title: 'Todo Item Four', completed: true },
        { _id: '5', title: 'Todo Item Five', completed: false },
      ]
    }
  }
}
</script>

<style>

</style>
