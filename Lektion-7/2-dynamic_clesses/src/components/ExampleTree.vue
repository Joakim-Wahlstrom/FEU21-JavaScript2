<template>
  <div>
    <label for="name">Name: </label>
    <!-- <input type="text" :class="{ success: !hasErrors, error: hasErrors }"> -->
    <input type="text" :class="hasErrors ? {error: true} : {success: true}">
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasErrors: true
    }
  }
}
</script>

<style scoped>
  input {
    padding: .5rem;
  }
  .error {
    border: 3px solid red;
    outline: red;
  }
  .success {
    border: 3px solid green;
    outline: green;
  }
</style>