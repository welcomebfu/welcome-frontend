<template>
  <div class="container">
    <h1 class="page-title">
      Маршруты по Калининграду
    </h1>
    <div v-if="!showLoading" class="list">
      <Card
        v-for="guide in guides"
        :id="guide.id"
        :key="guide.id"
        :guide="guide.attributes"
      />
    </div>
    <Loading v-if="showLoading" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      guides: []
    }
  },
  async fetch () {
    const res = await this.$strapi.$guides.find({ populate: '*' })
    this.guides = res.data
  },
  computed: {
    getGuides () {
      return this.guides.data
    },
    showLoading () {
      return this.$fetchState.pending
    }
  },
  methods: {
    randomGuide () {
      const randId = Math.round(Math.random() * this.guides.data.length)
      this.$router.push('/kaliningrad/' + randId)
    }
  }
}
</script>

<style scoped>
.title {
  padding: 60px 0;
}
.list {
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 40px 20px;
}

@media (max-width: 1000px) {
  .list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 700px) {
  .list {
    width: 100%;
    grid-template-columns: 1fr;
  }
}
</style>
