<template>
  <div class="bg-white mt-1 p-2 d-flex justify-content-between align-items-center shadow rounded">
    <p class="m-0 h4" :class="{done: todo.completed}" >{{todo.title}}</p>
    <button class="btn btn-danger btn-sm ">X</button>
  </div>
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style scoped>

  .done {
    text-decoration: line-through;
    color: #cecece;
  }
  p {
    cursor: pointer;
    flex: 1;
  }

</style>