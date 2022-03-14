<template>
  <div>
    <BlogPost v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import axios from 'axios'
import BlogPost from '../components/BlogPost.vue'
export default {
  components: {
    BlogPost
  },
  data() {
    return {
      posts: [],
      prevQuery: ''
    }
  },
  methods: {
    async getPosts() {
      if(this.prevQuery !== this.$route.query.searchQuery) {
        const res = await axios.get(`http://localhost:3000/posts?q=${this.$route.query.searchQuery}`)
        if(res.status === 200) {
          this.posts = res.data
          this.prevQuery = this.$route.query.searchQuery
        }
      }
    }
  },
  created() {
    this.getPosts()
  },
  // updated(){
  //   console.log('updated')
  //   this.getPosts()
  // }
  watch: {
    '$route.query.searchQuery'() {
      console.log('ny query')
      this.getPosts()
    }
  }
}
</script>

<style>

</style>