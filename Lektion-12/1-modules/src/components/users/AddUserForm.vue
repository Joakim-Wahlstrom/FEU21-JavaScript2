<template>
  <form class="row my-5" @submit.prevent="onSubmit">
    <div class="col-8">
      <div class="">
        <input type="text" class="form-control" placeholder="Customer name" v-model="userName">
      </div>
    </div>
    <div class="col-4 text-end">
      <button class="btn btn-dark">Add User</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      userName: ''
    }
  },
  methods: {
    ...mapActions(['addUser']),
    onSubmit() {
      this.addUser(this.userName)
      this.userName = ''
    }
  }
}
</script>

<style>

</style>