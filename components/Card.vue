<template>
  <vs-card class="card" @click="openGuide(id)">
    <template #title>
      <h3>{{ guide.title }}</h3>
    </template>
    <template #img>
      <img :src="getImage" alt="">
    </template>
    <template #text>
      <p>
        {{ guide.shortDescription }}
      </p>
    </template>
  </vs-card>
</template>

<script>
export default {
  props: ['guide', 'id'],
  computed: {
    getImage () {
      return this.guide.coverImage.data.attributes.url
    }
  },
  methods: {
    openGuide (id) {
      this.$router.push('/kaliningrad/' + id)
      console.log(this.guide)
    }
  }
}
</script>

<style scoped>
.card {
  width: 310px;
}
</style>
