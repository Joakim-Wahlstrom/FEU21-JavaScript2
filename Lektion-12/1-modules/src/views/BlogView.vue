<template>
  <h1 class="text-center mt-5">My Blog</h1>
  <div class="container mt-5">
    <router-link v-for="post in posts" :key="post.id" to="/">
      <div class="border rounded hover-shadow p-3 text-dark mb-3">
        <h2>{{post.title}}</h2>
        <p>{{ post.body.slice(0,75) }}...</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['getPosts'])
  },
  created() {
    this.getPosts()
  },
  computed: {
    ...mapGetters(['posts'])
  }
}
</script>

<style>

</style>