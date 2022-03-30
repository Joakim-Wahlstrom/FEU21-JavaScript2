<template>
  <div class="single" :class="user.uid === doc.uid ? 'own' : ''">
    <span class="created-at">{{ doc.createdAt }}</span>
    <div class="single-message">
      <span class="name">{{ doc.name }}</span>
      <span class="message">{{ doc.message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user', 'doc']
}
</script>

<style>

</style>