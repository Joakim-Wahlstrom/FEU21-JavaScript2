<template>
  <form class="chat-form">
    <!-- <textarea 
    rows="1"
    placeholder="Type a new message"
    v-model="message"
    ref="text"
    @keyup="handleChange"
    ></textarea> -->
    <input type="text" ref="text" v-model="message" class="form-control">
    <button class="btn btn-primary">Send</button>
    <div class="error">Error message</div>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {

    const text = ref(null)
    const message = ref('')

    return { text, message }
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