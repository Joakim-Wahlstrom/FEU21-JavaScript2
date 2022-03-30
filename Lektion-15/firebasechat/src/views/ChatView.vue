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
import { useRouter } from 'vue-router'
import getUser from '../composables/getUser'
import { watch } from 'vue'
export default {
  components: { Navbar, ChatWindow, ChatForm },
  setup() {
    const router = useRouter()
    const { user } = getUser()

    watch(user, () => {
      if(!user.value) {
        router.push({ name: 'Landing' })
      }
    })
  }
}
</script>

<style>
  .chat-view {
    display: flex;
    flex-direction: column;
    height: 80vh;
  }

</style>