<template>
  <div class="posts-list">
      <div v-for="post in posts" :key="post.id">
          <SinglePost :post="post" @removePost="remove" />
      </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
export default {
    props: ['posts'],
    components: {
        SinglePost
    }, 
    setup() {

        const remove = (post) => {
            console.log('tar bort en post' , post.title)
        }

        return { remove }
    }
    
    

}
</script>

<style>

</style>