<template>
  <form class="row" @submit.prevent="onSubmit">
    <div class="col-8">
      <div class="">
        <input type="text" class="form-control" placeholder="Customer name" v-model="customerName">
      </div>
    </div>
    <div class="col-4 text-end">
      <button class="btn btn-dark">Add Customer</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      customerName: ''
    }
  },
  onSubmit() {
    // add customer
  }
}
</script>

<style>

</style>