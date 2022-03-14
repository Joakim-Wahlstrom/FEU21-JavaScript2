<template>
  <div class="post">
    <div class="img-container">
      <img :src="post.imgUrl" alt="">
    </div>
    <div class="content">
      <h2 class="content_title">{{ post.title }}</h2>
      <div class="content_info">
        <ul class="content_list">
          <li v-for="(cat, index) in post.categories" :key="index">{{ cat }}</li>
        </ul>
        <p>Author: {{ post.author }}</p>
      </div>
      <p class="content_body">{{ post.body.slice(0,100) }}...</p>
      <router-link :to="'/details/' + post.id"><button class="btn btn-primary bottom-right">Read more</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style scoped>
  .post {
    display: flex;
    background: #fff;
    border-bottom: 1px solid #dbdbdb;
  }
  .post:nth-child(even) {
    flex-direction: row-reverse;
  }
  .img-container {
    height: 300px;
    width: 45%;
  }
  .img-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .content {
    flex: 1;
    padding: 1rem 2rem;
    position: relative;
  }
  .content_title {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  .content_info,
  .content_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .8rem;
  }
  .content_info {
    margin-bottom: 2rem;
  }
  .content_list li {
    list-style: none;
    margin-right: 1rem;
    background: #333;
    color: #fff;
    padding: .2em 1em;
    border-radius: 100vh;
  }
  .bottom-right {
    position: absolute;
    bottom: 1.5rem;
    right: 2rem;
  }
</style>