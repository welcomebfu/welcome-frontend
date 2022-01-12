<template>
  <div>
    <vs-navbar
      class="header"
      color="#00b4d8"
      text-white
      center-collapsed
      square
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
        <vs-button color="#fff" border @click="randomGuide">
          Случайный маршрут!
        </vs-button>
      </template>
    </vs-navbar>
    <vs-navbar
      class="header mobile"
      color="#00b4d8"
      text-white
      square
      fixed
    >
      <vs-navbar-item id="kaliningrad" to="/kaliningrad" :active="page.includes('/kaliningrad')">
        По Калининграду
      </vs-navbar-item>
      <vs-navbar-item id="oblast" to="/oblast" :active="page === '/oblast'">
        По области
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  props: ['page'],
  methods: {
    randomGuide () {
      const id = this.$store.getters['guides/randomGuideId']
      this.$router.push('/kaliningrad/' + id)
    }
  }
}
</script>

<style>
.header {
  width: 100%;
}
.nav-link {
  color: white;
  text-decoration: none;
}
.header.mobile{
  display: none;
  top:44px;
}
@media (max-width: 632px) {
  .header.mobile {
    display: block;
  }
}
</style>
