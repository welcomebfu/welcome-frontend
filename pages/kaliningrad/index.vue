<template>
  <div>
    <h1>Маршруты по Калининграду</h1>
    <div class="container">
      <Card
        v-for="guide in getGuides"
        :key="guide.id"
        :guide="guide.attributes"
        :id="guide.id"
      />
    </div>
  </div>
</template>

<script>
import guidesQuery from '~/apollo/queries/guides/guides.gql'

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
  },
  methods: {
    randomGuide () {
      const randId = Math.round(Math.random() * this.guides.data.length)
      this.$router.push('/kaliningrad/' + randId)
    }
  },
  apollo: {
    guides: {
      prefetch: true,
      query: guidesQuery
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 40px 20px;
}
</style>
