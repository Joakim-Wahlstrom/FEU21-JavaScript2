<template>
  <div>
    <AddTodoForm @add-todo="add" @sort="sortTodos" />
    <div class="container">
      <TodoList :value="sort" :todos="todos" @delete-todo="deleteTodo" @toggle-complete="toggleComplete" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

import AddTodoForm from './components/AddTodoForm.vue'
import TodoList from './components/Todos/TodoList.vue'
export default {
  components: { 
    AddTodoForm,
    TodoList 
  },
  data() {
    return {
      // todos: [
      //   { _id: '1', title: 'Todo Item One', completed: false },
      //   { _id: '2', title: 'Todo Item Two', completed: true },
      //   { _id: '3', title: 'Todo Item Three', completed: false },
      //   { _id: '4', title: 'Todo Item Four', completed: true },
      //   { _id: '5', title: 'Todo Item Five', completed: false },
      // ],
      todos: [],
      sort: '',
      apiURL: 'http://localhost:8080/api/todos'
    }
  },
  methods: {
    sortTodos(val) {
      switch(val) {
        case 'false':
          this.sort = false
          break

        case 'true':
          this.sort = true
          break

        default:
          this.sort = ''
      }
    },
    async fetchTodos() {
      const res = await axios.get(this.apiURL)
      this.todos = res.data
    },
    add(title) {
      const todo = {
        _id: uuidv4(),
        title,
        completed: false
      }
      this.todos.push(todo)
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo._id !== id)
    },
    toggleComplete(todo) {
      todo.completed = !todo.completed
    }
  },
  created() {
    this.fetchTodos()
  }
}
</script>

<style>

</style>
