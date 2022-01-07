<template>
  <div>
    <div class="container">
      <template v-if="dataLoaded">
        <div class="description">
          <h1>Маршрут {{ guide.attributes.title }}</h1>
          <p>{{ guide.attributes.description }}</p>
        </div>
        <accordion>
          <accordion-item v-for="(point, index) in getPoints" :key="point.id">
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
            <template slot="accordion-trigger">
              <h3>{{ index + 1 }} {{ point.name }}</h3>
            </template>
            <!-- This slot will handle all the content that is passed to the accordion -->
            <template slot="accordion-content">
              <span v-html="convertText(point.text)"></span>
            </template>
          </accordion-item>
        </accordion>
      </template>
      <template v-else>
        <h1>Загрузка</h1>
      </template>
    </div>
    <div class="map" v-html="getEmbed"></div>

    <div class="container maps" v-if="dataLoaded">
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
    const id = this.$route.params.id
    const res = await this.$strapi.$guides.findOne(id, { populate: '*' })
    this.guide = res.data
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
.container {
  width: 1000px;
  margin: 0 auto;
  text-align: center;
}
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
  .container {
    width: 100%;
    grid-template-columns: 1fr
  }
  p {
    text-align: justify;
    padding: 0 10px;
  }
}
</style>
