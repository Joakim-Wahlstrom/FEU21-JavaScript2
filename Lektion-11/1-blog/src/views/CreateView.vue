<template>
  <div class="create">
    <form>

      <h2 class="title">Create a new post</h2>

      <div class="form-group">
        <label for="title" class="form-label">Title: </label>
        <input type="text" class="form-control" v-model="blog.title">
        <p class="error">Please enter a title</p>
      </div>

      <div class="form-group">
        <label for="imgUrl" class="form-label">Image URL: </label>
        <input type="text" class="form-control" v-model="blog.imgUrl">
        <p class="error">Please enter an image url</p>
      </div>

      <div class="form-group">
        <label for="content" class="form-label">Content: </label>
        <textarea class="form-control" v-model="blog.body"></textarea>
        <p class="error">Please enter some content</p>
      </div>

      <p class="form-label">Categories: </p>

    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        body: '',
        imgUrl: '',
        categories: [],
        author: ''
      }
    }
  }
}
</script>

<style scoped>
  .title {
    text-align: center;
    font-size: 1.8rem;
  }

  .form-group {
    margin-bottom: 2rem;
  }

  .form-label {
    margin-bottom: .5rem;
    display: block;
  }
  .form-control {
    width: 100%;
    display: block;
  }
  .error {
    font-size: .9rem;
    color: red;
    margin-top: .4rem;
  }

  textarea {
    resize: none;
    height: 200px;
    overflow: auto;
  }

</style>