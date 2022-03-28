<template>
  <div class="post" @click="handleClick">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
    props: ['post'],
    setup(props, { emit }) {
        // console.log(props.post)
        // console.log(composition)

        const handleClick = () => {
            emit('removePost', props.post)
        }


        console.log('setup')
        onMounted(() => console.log('component mounted'))


        return { handleClick }
    }
}
</script>

<style>

</style>