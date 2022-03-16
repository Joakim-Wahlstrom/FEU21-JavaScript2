<template>
  <div v-if="post" class="container mt-5">
    <div class="border rounded p-5 text-center">
      <h1>{{ post.title }}</h1>
      <hr>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['id'],
  methods: {
    ...mapActions(['getPost'])
  },
  created() {
    this.getPost(this.id)
  },
  computed: {
    ...mapGetters(['post'])
  }
}
</script>

<style>

</style>