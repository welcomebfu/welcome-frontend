<template>
  <ul class="accordion">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      Accordion: {
        count: 0,
        active: null
      }
    }
  },
  provide () {
    return { Accordion: this.Accordion }
  }
}
</script>

<style scoped>
.accordion {
  background-color: #00B4D8;
  color: #fff;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 1000px;
  margin: 0 auto;
}
.accordion__item:last-child {
  border-bottom: none;
}
</style>
