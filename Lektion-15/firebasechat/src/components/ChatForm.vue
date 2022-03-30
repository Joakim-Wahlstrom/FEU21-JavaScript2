<template>
  <form class="chat-form" @submit.prevent="handleSubmit">
    <!-- <textarea 
    rows="1"
    placeholder="Type a new message"
    v-model="message"
    ref="text"
    @keyup="handleChange"
    ></textarea> -->
    <input type="text" ref="text" v-model="message" class="form-control">
    <button class="btn btn-primary">Send</button>
    <div class="error" v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'

export default {
  setup() {

    const { user } = getUser()
    const { addMessage, error } = useCollection('messages')

    const text = ref(null)
    const message = ref('')

    const handleSubmit = async () => {
      if(message.value.trim() === '') return

      const chat = {
        name: user.value.displayName,
        message: message.value,
        uid: user.value.uid
      }

      await addMessage(chat)

      message.value = ''
      text.value.focus()

    }

    return { text, message, handleSubmit, error }
  }
}
</script>

<style>
  .chat-form {
    padding: 1rem;
    border-top: 1px solid var(--clr-border);
  }
  .chat-form button {
    display: block;
    width: 100%;
    margin-block: 1rem;
  }
</style>