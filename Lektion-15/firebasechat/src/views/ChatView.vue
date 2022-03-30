<template>
  <div class="container card chat-view">
    <Navbar />
    <ChatWindow />
    <ChatForm />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import ChatWindow from '../components/ChatWindow.vue'
import ChatForm from '../components/ChatForm.vue'
export default {
  components: { Navbar, ChatWindow, ChatForm }

}
</script>

<style>
  .chat-view {
    display: flex;
    flex-direction: column;
    height: 80vh;
  }

</style>