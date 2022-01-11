<template>
  <ul class="accordion">
    <slot />
  </ul>
</template>

<script>
export default {
  provide () {
    return { Accordion: this.Accordion }
  },
  props: {},
  data () {
    return {
      Accordion: {
        count: 0,
        active: null
      }
    }
  }
}
</script>

<style scoped>
.accordion {
  background-color: #00B4D8;
  border-radius: 8px;
  overflow: hidden;
  color: #fff;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  margin: 0 auto;
}
.accordion__item:last-child {
  border-bottom: none;
}
</style>
