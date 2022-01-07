<template>
  <div class="container">
    <h1>Маршруты по области пока в разработке)</h1>
    <nuxt-link to="/kaliningrad" class="link">
      Вернуться к маршрутам по Калининграду
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      guides: []
    }
  },
  computed: {
    getGuides () {
      return this.guides.data
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
}
.list {
  margin: 0 auto;
  width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 40px 20px;
}

.link {
  color: black;
  font-size: 18px;
}

@media (max-width: 1000px) {
  .list {
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 730px) {
  .list {
    width: 100%;
    grid-template-columns: 1fr;
  }
}
</style>
