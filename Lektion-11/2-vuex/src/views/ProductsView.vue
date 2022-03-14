<template>
  <div class="products">
    <aside>
      <div class="buttons">
        <button @click="changeComponent('Grid')"><i class="fa-solid fa-table-cells-large"></i></button>
        <button @click="changeComponent('List')"><i class="fa-solid fa-list"></i></button>
      </div>
      <form>
        <input type="search" placeholder="search">
      </form>
    </aside>

    <div class="main-content">
      <component :is="comp" />
    </div>
  </div>
</template>

<script>
import Grid from '../components/Products/GridView.vue'
import List from '../components/Products/ListView.vue'
export default {
  components: {
    Grid,
    List
  },
  data() {
    return {
      comp: 'List'
    }
  },
  methods: {
    changeComponent(val) {
      this.comp = val
    }
  }
}
</script>

<style scoped>
  .products {
    display: flex;
  }
  aside {
    flex: 2;
    background: #424242;
    padding: 2rem;
    min-height: calc(100vh - 69.14px);
  }
  .main-content {
    flex: 10;
  }
  .buttons button {
    padding: .2rem;
    margin-right: .5rem;
    cursor: pointer;
    background: transparent;
    color: #fff;
    border: 0;
    margin-bottom: 3rem;
  }
</style>