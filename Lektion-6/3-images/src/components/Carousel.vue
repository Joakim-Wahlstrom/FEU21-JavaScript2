<template>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/img/bild1.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/bild2.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/bild2.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
  </div>


  <div class="hej">Hej</div>
</template>

<script>
export default {
  name: 'carouselComponent'
}
</script>

<style scoped>
  .carousel-inner {
    max-height: 400px;
  }
  .hej {
    font-size: 2rem;
    color: red;
  }
</style>