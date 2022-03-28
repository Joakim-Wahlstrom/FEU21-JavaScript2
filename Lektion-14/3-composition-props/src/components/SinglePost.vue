<template>
  <div class="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
    props: ['post'],
    setup(props) {
        console.log(props.post)
        
    }
}
</script>

<style>

</style>