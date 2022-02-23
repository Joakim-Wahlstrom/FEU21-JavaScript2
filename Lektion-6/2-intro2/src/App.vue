<template>
  <Navbar />
  <Carousel />
  <Tesimonials />
  <Footer />

</template>

<script>
import Navbar from './components/navigation/Navbar.vue'
import Footer from './components/navigation/Footer.vue'
import Carousel from './components/Carousel.vue'
import Tesimonials from './components/Testimonials/Tesimonials.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    // appFooter: Footer
    Footer,
    Carousel,
    Tesimonials
  }
}
</script>

<style>

</style>
