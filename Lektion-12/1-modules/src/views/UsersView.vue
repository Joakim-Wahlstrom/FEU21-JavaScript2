<template>
  <div class="container mt-5">
    <AddUserForm />
    <UserList />
  </div>
</template>

<script>
import AddUserForm from '../components/users/AddUserForm.vue'
import UserList from '../components/users/UserList.vue'
export default {
  components: { AddUserForm, UserList },

}
</script>

<style>

</style>