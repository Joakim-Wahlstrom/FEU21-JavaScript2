<template>
  <div v-if="users.length">
    <!-- <div class="card" v-for="user in users" :key="user.id">
      <h3>{{ user.name }}</h3>
      <p>{{ user.age }}</p>
    </div> -->
    <UserCard v-for="user in users" :key="user.id" :user="user" @deleteUser="$emit('deleteUser', user.id)"/>
  </div>
  <div v-else>
    <h3>No users</h3>
  </div>
</template>

<script>
import UserCard from './UserCard.vue'
export default {
  props: ['users'],
  components: {
    UserCard
  }
}
</script>

<style>
  .card {
    border: 1px solid #333;
    padding: 1rem;
    margin-bottom: 1rem;
  }
</style>