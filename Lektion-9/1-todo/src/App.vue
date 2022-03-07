<template>
  <AddTodoForm @add-todo="add" @sort="sortTodos" />
  <div class="container">
    <TodoList :value="sort" :todos="todos" @delete-todo="deleteTodo" @toggle-complete="toggleComplete" />
  </div>
  <ErrorModal v-if="showModal" @close-modal="showModal = false" />
</template>

<script>
import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid'

import AddTodoForm from './components/AddTodoForm.vue'
import TodoList from './components/Todos/TodoList.vue'
import ErrorModal from './components/ErrorModal.vue'
export default {
  components: { 
    AddTodoForm,
    TodoList,
    ErrorModal 
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
      apiURL: 'http://localhost:8080/api/todos/',
      showModal: false
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
    async add(title) {
      // const todo = {
      //   _id: uuidv4(),
      //   title,
      //   completed: false
      // }
      // this.todos.push(todo)
      try {
        const res = await axios.post(this.apiURL, { title })
        if(res.status === 201) {
          this.todos.push(res.data)
        }
      } 
      catch (err) {
        console.log(err)
      }
    },
    deleteTodo(_todo) {
      
      if(_todo.completed) {
        axios.delete(this.apiURL + _todo._id)
          .then(res => {
            if(res.status === 200) {
              this.todos = this.todos.filter(todo => todo._id !== res.data.id)
            }
          })
          .catch(err => console.log(err)) 
      }
      else {
        this.showModal = true
      }


      // this.todos = this.todos.filter(todo => todo._id !== id)
    },
    async toggleComplete(todo) {
      const res = await axios.patch(this.apiURL + todo._id, { completed: !todo.completed})
      // console.log(res)
      if(res.status === 200) {
        todo.completed = !todo.completed
      }
    }
  },
  created() {
    this.fetchTodos()
  }
}
</script>

<style>

</style>
