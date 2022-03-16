<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">User Name</th>
        <th scope="col">Staus</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <UserRow v-for="(user, index) in users" :key="user.id" :user="user" :index="index" />
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
import UserRow from './UserRow.vue'
export default {
  components: { UserRow },
  computed: {
    ...mapGetters(['users'])
  }
}
</script>

<style>

</style>