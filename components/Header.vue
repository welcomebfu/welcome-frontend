<template>
  <vs-navbar color="#00b4d8" text-white square center-collapsed fixed>
    <template #left>
      <span>Welcome</span>
    </template>
    <vs-navbar-item id="kaliningrad" :active="page === '/kaliningrad'">
      <nuxt-link to="/kaliningrad" class="nav-link">
        По Калининграду
      </nuxt-link>
    </vs-navbar-item>
    <vs-navbar-item id="oblast" :active="page === '/oblast'">
      <nuxt-link to="/oblast" class="nav-link">
        По области
      </nuxt-link>
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
