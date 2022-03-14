<template>
  <button class="btn" @click="addToPrice">ADD</button>
  <button class="btn" @click="subAsync(5)">SUB</button>
  <div class="grid">
    <ProductCard v-for="product in taxedProducts" :key="product.id" :product="product" class="card" />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { ProductCard },
  computed: {
    ...mapGetters(['taxedProducts'])
  },
  methods: {
    ...mapActions(['addToPrice', 'subAsync'])
  }
}
</script>

<style scoped>
  .grid {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
  .card {
    background: #00635a;
    color: #fff;
  }
</style>