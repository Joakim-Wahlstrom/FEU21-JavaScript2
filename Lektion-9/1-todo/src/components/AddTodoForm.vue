<template>
  <form class="border-bottom bg-white py-5" @submit.prevent="addTodo">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="input-group">
            <input type="text" placeholder="Add todo..." ref="titleInput" class="form-control" v-model="title">
            <button class="btn btn-dark">ADD</button>
          </div>
        </div>
        <div class="col-4">
          <select class="form-select" v-model="select" @change="$emit('sort', select)">
            <option value="">Show all</option>
            <option value="false">Show Uncompleted</option>
            <option value="true">Show Completed</option>
          </select>
        </div>
      </div>
      <small class="text-danger">{{ error }}</small>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      select: '',
      error: ''
    }
  },
  methods: {
    addTodo() {
      if(this.title.trim() === '') {
        this.error = 'You need to enter what todo'
        this.$refs.titleInput.focus()
        return
      }


      this.error = ''
      this.$emit('add-todo', this.title)
      this.title = ''
      this.$refs.titleInput.focus()

    }
  }
}
</script>

<style>

</style>