<template>
    <div class="col">
      <div class="card h-100">
        <img :src='imgURL' class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text">{{ body }}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    title: {
      type: String,
      required: false,
      default: 'En standard rubrik'
    },
    body: {
      type: String,
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, consequuntur.'
    },
    imgURL: {
      type: String,
      required: false,
      default: ''
    }  
  },
}
</script>

<style>

</style>