<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" aria-current="page" to="/users">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" aria-current="page" to="/blog">Blog</router-link>
          </li>
        </ul>
        <form class="d-flex input-group w-auto">
          <input
            type="search"
            class="form-control"
            placeholder="Type query"
            aria-label="Search"
          />
          <button
            class="btn"
            type="button"
            data-mdb-ripple-color="dark"
          >
            <i class="fa-solid fa-magnifying-glass text-light"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PrimaryNavigation'
}
</script>

<style>

</style>