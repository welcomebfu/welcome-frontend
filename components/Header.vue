<template>
  <vs-navbar
    class="header"
    color="#00b4d8"
    text-white
    square
    center-collapsed
    fixed
  >
    <template #left>
      <nuxt-link to="/" class="nav-link">
        <span>Welcome</span>
      </nuxt-link>
    </template>
    <vs-navbar-item id="kaliningrad" to="/kaliningrad" :active="page.includes('/kaliningrad')">
      По Калининграду
    </vs-navbar-item>
    <vs-navbar-item id="oblast" to="/oblast" :active="page === '/oblast'">
      По области
    </vs-navbar-item>
    <template #right>
      <vs-button color="#fff" border>
        Случайный маршрут!
      </vs-button>
    </template>
  </vs-navbar>
</template>

<script>
export default {
  props: ['page']
}
</script>

<style>
.nav-link {
  color: white;
  text-decoration: none;
}
</style>
