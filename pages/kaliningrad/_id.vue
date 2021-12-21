<template>
  <div>
    <template v-if="guide.length !== 0">
      <h1>Маршрут {{ guide.data.attributes.title }}</h1>
      <p>{{ guide.data.attributes.description }}</p>
      <accordion>
        <accordion-item v-for="(point, index) in getPoints" :key="point.id">
          <!-- This slot will handle the title/header of the accordion and is the part you click on -->
          <template slot="accordion-trigger">
            <h3>{{ index + 1 }} {{ point.Title }}</h3>
          </template>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <template slot="accordion-content">
            <span v-html="convertText(point.Text)"></span>
          </template>
        </accordion-item>
      </accordion>
    </template>
    <template v-else>
      <h1>Загрузка</h1>
    </template>
  </div>
</template>

<script>
import { marked } from 'marked'
import guideQuery from '~/apollo/queries/guides/guide.gql'

marked.setOptions({
  baseUrl: 'http://localhost:1337/'
})

export default {
  data () {
    return {
      guide: [],
      loading: {}
    }
  },
  computed: {
    getPoints () {
      return this.guide.data.attributes.point
    }
  },
  methods: {
    convertText (mark) {
      return marked.parse(mark)
    }
  },
  apollo: {
    guide: {
      prefetch: true,
      query: guideQuery,
      variables () {
        return {
          id: this.$route.params.id
        }
      }
    }
  }
}
</script>

<style scoped>
p {
  text-align: center;
  margin-bottom: 60px;
}
img {
  width: 100%;
}
</style>
