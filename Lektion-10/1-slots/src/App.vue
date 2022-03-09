<template>
  <div>
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <button @click="showModal2 = true">Show modal2</button>
    <button @click="showModal3 = true">Show modal3</button>

    <!-- <Modal v-if="showModal" @close="showModal = false" /> -->
    <Modal v-if="showModal">
      <h2>By this product now!</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, quasi.</p>
      <button @click="showModal = false">Close</button>
    </Modal>
    <Modal v-if="showModal2">
      <template v-slot:links>
        <a href="#">My website</a>
        <a href="#">Yahoo</a>
        <a href="#">Nån helt annanstans</a>
      </template>
      <form>
        <div class="input-group">
          <label>
            <span>Email: </span>
            <input type="email">
          </label>
        </div>
        <div class="input-group">
          <label>
            <span>Password: </span>
            <input type="password">
          </label>
        </div>
      </form>
      <button @click="showModal2 = false">Close</button>
    </Modal>
    <Modal v-if="showModal3" @close="showModal3 = false" />
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
    }
  }
}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  background: orangered;
  color: #fff;
  padding: .6em 1.2em;
  border: 0;
  border-radius: .5em;
  cursor: pointer;
  margin: 1rem;
}
</style>
