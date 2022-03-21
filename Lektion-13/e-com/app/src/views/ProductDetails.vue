<template>
  <div class="row">
    <div class="col-lg-6">
      <img :src="product.image" class="img-fluid">
    </div>
    <div class="col-lg-6 text-center text-lg-start">
      <h2>{{product.name}}</h2>
      <p class="h3 text-danger">{{product.price}} SEK</p>
      <div class="mt-5">
        <p>{{product.desc}}</p>
      </div>
    </div>
    <div class="text-end mt-5">
      <button class="btn btn-info"><i class="fa-solid fa-cart-plus"></i> Add to cart</button>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['id'],
  methods: {
    ...mapActions(['getProductById'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProductById(this.id)
  }
}
</script>

<style>

</style>