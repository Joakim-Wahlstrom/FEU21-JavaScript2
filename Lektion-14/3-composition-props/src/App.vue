<template>
  <PostsList :posts="posts" />
</template>

<script>
import { ref } from 'vue'
import PostsList from './components/Postslist.vue'

export default {
  name: 'App',
  components: {
    PostsList
    
  },
  setup() {
    const posts = ref([
      { id: 1, title: 'Blog post nr 1', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt sed eligendi exercitationem quisquam cumque pariatur nemo quis est rerum asperiores.'},
      { id: 2, title: 'Blog post nr 2', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt sed eligendi exercitationem quisquam cumque pariatur nemo quis est rerum asperiores.'},
      { id: 3, title: 'Blog post nr 3', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt sed eligendi exercitationem quisquam cumque pariatur nemo quis est rerum asperiores.'},
    ])

    return { posts }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
