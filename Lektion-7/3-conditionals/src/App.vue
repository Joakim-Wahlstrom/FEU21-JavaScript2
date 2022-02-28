<template>
  <Navbar />
  <div class="container">
    <h1 v-if="name === 'Joakim'">Hej {{ name }} välkommen tillbaka</h1>
    <h1 v-else>Trevlig att träffas {{ name }}</h1>

    <Form />
    <Todos :todos="todos" />
  </div>
</template>

<script>
import Form from './components/Form.vue'
import Navbar from './components/Navbar.vue'
import Todos from './components/Todos.vue'
export default {
  components: { 
    Navbar,
    Form,
    Todos 
  },
  data() {
    return {
      name: 'Nisse',
      todos: [
        {id: 1, title: 'Todo item 1'},
        {id: 2, title: 'Todo item 2'},
        {id: 3, title: 'Todo item 3'},
      ]
    }
  }

}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .container {
    width: 80%;
    margin: 0 auto;
  }
</style>