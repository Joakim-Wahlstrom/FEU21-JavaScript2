<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">

    <Card :imgURL='imgOne' title="HEJ" body="hej på dig du" />
    <Card imgURL='/img/bild2.jpg' title="Rubrik 2" body="kljasdhkj asfjkh asfkjhas fkjashf "/>
    <Card imgURL='https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />
    
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  components: { Card },
  data() {
    return {
      imgOne: require('@/assets/img/bild1.jpg')
    }
  }
}
</script>

<style>

</style>