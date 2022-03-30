<template>
  <nav class="navbar">
    <div>
      <p>{{user.displayName}}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button class="btn btn-primary" @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import getUser from '../composables/getUser'
import useLogout from '../composables/useLogout'
export default {
  setup() {
    const { user } = getUser()
    const { logout } = useLogout()

    const handleClick = async () => {
      await logout()
    }

    return { user, handleClick }
  }
}
</script>

<style>
  .navbar {
    padding: 2rem;
    border-bottom: 1px solid var(--clr-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navbar p {
    color: #444;
  }
  .navbar p.email {
    color: #999;
    font-size: .9rem;
    display: none;
  }
  @media (min-width: 500px) {
    .navbar p.email {
      display: inline-block;
    }
  }
</style>