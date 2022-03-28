<template>
  <div>
    <h1>Home</h1>
    <h3>Refs</h3>
    <p>Hej mitt namn är {{ userOne.name }}</p>
    <button @click="handleClick">Byt namn</button>
    <h3>Reactive</h3>
    <p>Min chef heter {{ userTwo.name }}</p>
    <button @click="changeName">Byt Fru</button>

    <p>{{ name }}</p>
    <button @click="changeBoss">byt chef</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  name: 'HomeView',
  setup() {

    // let name = 'Joakim'
    const userOne = ref({ name: 'Joakim', age: 35 })

    const handleClick = () => {
      userOne.value.name = 'Hans'
      // console.log(p.value)
    }

    const userTwo = reactive({ name: 'Jeanette', age: 35 })
    const name = reactive({value: 'Hans'})

    const changeName = () => {
      userTwo.name = 'Kira'
    }

    const changeBoss = () => {
      name.value = reactive('Nisse')
    }


    return { userOne, handleClick, userTwo, changeName, name }
  },
  data() {
    return {

    }
  }

}
</script>
