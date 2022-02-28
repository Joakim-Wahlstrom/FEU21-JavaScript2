<template>
  <div>
    <Navbar :title="title" @changeTitle="change($event)" />
    <div class="container">
      <User :user="user" />
      <UserTwo :user="user" />
    </div>
    <Footer :title="title" />

  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import User from './components/User.vue'
import UserTwo from './components/UserTwo.vue'
export default {
  components: { 
    Navbar,
    Footer,
    User,
    UserTwo,
  },
  data() {
    return {
      title: 'FRONTEND 2022',
      user: {
        id: 1,
        name: 'Joakim',
        age: 35,
        email: 'joakim@mail.com'
      }
    }
  },
  methods: {
    change(newTitle) {
      this.title = newTitle
    }
  }

}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  width: 80%;
  margin: 0 auto;
}
</style>