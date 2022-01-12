<template>
  <div>
    <template v-if="!showLoading">
      <div v-if="!showLoading" class="container">
        <div class="description">
          <h1 class="page-title">
            Маршрут {{ guide.attributes.title }}
          </h1>
          <p>{{ guide.attributes.description }}</p>
        </div>
        <accordion>
          <accordion-item v-for="(point, index) in getPoints" :key="point.id">
            <template slot="accordion-trigger">
              <h3>{{ index + 1 }} {{ point.name }}</h3>
            </template>
            <template slot="accordion-content">
              <span v-html="convertText(point.text)" />
            </template>
          </accordion-item>
        </accordion>
      </div>
      <div class="map" v-html="getEmbed" />

      <div class="container maps">
        <h2>Посмотреть маршрут в других картах:</h2>
        <div class="maps-links">
          <vs-button
            class="maps-item"
            border
            blank
            :href="guide.attributes.yandex"
          >
            Яндекс.Карты
          </vs-button>
          <vs-button
            class="maps-item"
            border
            blank
            :href="guide.attributes.twogis"
          >
            2GIS
          </vs-button>
        </div>
      </div>
    </template>
    <Loading v-if="showLoading" />
  </div>
</template>

<script>
import { marked } from 'marked'

marked.setOptions({
  baseUrl: 'https://admin.welcomebfu.repl.co/'
})

export default {
  data () {
    return {
      guide: {},
      dataLoaded: false
    }
  },
  async fetch () {
    const id = parseInt(this.$route.params.id)
    if (!this.$store.getters['guides/isDataLoaded']) {
      await this.$store.dispatch('guides/fetch')
    }
    this.guide = this.$store.getters['guides/getById'](id)
    this.dataLoaded = true
  },
  computed: {
    getPoints () {
      return this.guide.attributes.point
    },
    getEmbed () {
      if (this.dataLoaded) {
        return this.guide.attributes.mapEmbed
      }
      return ''
    },
    showLoading () {
      return this.$fetchState.pending
    }
  },
  methods: {
    convertText (mark) {
      return marked.parse(mark)
    }
  }
}
</script>

<style scoped>
.description {
  padding: 10px;
}
p {
  text-align: center;
  margin-bottom: 60px;
}
img {
  width: 100%;
}
.map {
  margin-top: 80px;
  width: 100%;
}
.maps {
  padding: 60px 0;
}
.maps-links {
  display: flex;
  justify-content: center;
  align-items: center;
}
.maps-item {
  font-family: inherit;
  font-size: 22px;
  font-weight: 600;
}
@media (max-width: 500px) {
  p {
    text-align: justify;
    padding: 0 10px;
  }
}
</style>
