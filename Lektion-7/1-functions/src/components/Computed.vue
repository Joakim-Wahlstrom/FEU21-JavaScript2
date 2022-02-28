<template>
  <div>
    <!-- <button @click="addToA()">Lägg till på A</button>
    <button @click="addToB()">Lägg till på B</button> -->
    <button @click="a++">Lägg till på A</button>
    <button @click="b++">Lägg till på B</button>
    <p>Nummret är {{ number }}</p>
    <br>
    <p>A = {{ a }}</p>
    <p>B = {{ b }}</p>
    <br>
    <br>
    <p>Nummer + A = {{ addToA }}</p>
    <p>Nummer + B = {{ addToB }}</p>
    <br><br><br>
    priset på varan är: {{ price }}
    <p>pris inkl. moms: {{ priceIncVat }}</p>
  </div>
</template>

<script>

export default {
  name: 'computedComponent',
  data() {
    return {
      number: 30,
      a: 0,
      b: 0,
      price: 200
      // nrPlusA: 0,
      // nrPlusB: 0
    }
  },
  methods: {
    // addToA: function() {
    //   console.log('ökade a')
    //   return this.a + this.number
    //   // this.a++
    // },
    // addToB() {
    //   console.log('ökade b')
    //   return this.b + this.number
    //   // this.b++
    //   // this.nrPlusB = this.b + this.number
    // }
  },
  computed: {
    addToA: function() {
      console.log('ökade a')
      return this.a + this.number
    },
    addToB() {
      console.log('ökade b')
      return this.b + this.number
    },
    priceIncVat() {
      return this.price * 1.25
    }
  }
}
</script>

<style>

</style>