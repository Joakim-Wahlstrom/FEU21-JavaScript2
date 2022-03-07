<template>
  <form class="border-bottom bg-white py-5">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="input-group">
            <input type="text" placeholder="Add todo..." class="form-control" v-model="title">
            <button class="btn btn-dark">ADD</button>
          </div>
        </div>
        <div class="col-4">
          <select class="form-select" v-model="select">
            <option value="">Show all</option>
            <option value="false">Show Uncompleted</option>
            <option value="true">Show Completed</option>
          </select>
        </div>

      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      select: ''
    }
  }
}
</script>

<style>

</style>