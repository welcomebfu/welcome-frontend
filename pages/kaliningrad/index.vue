<template>
  <div>
    <h1>Маршруты по Калининграду</h1>
    <div class="list">
      <div v-if="$fetchState.pending" class="loading">
        <DiamondLoading />
      </div>
      <Card
        v-for="guide in guides"
        :key="guide.id"
        :id="guide.id"
        :guide="guide.attributes"
        v-else
      />
    </div>
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
.list {
  margin: 0 auto;
  width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 40px 20px;
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
