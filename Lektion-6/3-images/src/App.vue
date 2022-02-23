<template>
  <Header />
  <Carousel />
  <div class="container">
    <div class="hej">Hej i App</div>

    <CardDeck class="mt-5" />
  </div>
</template>

<script>
import CardDeck from './components/cards/CardDeck.vue'
import Carousel from './components/Carousel.vue'
import Header from './components/Header.vue'
export default {
  components: { Header, Carousel, CardDeck },

}
</script>

<style>
  .hej {
    color: blue;
  }
</style>
