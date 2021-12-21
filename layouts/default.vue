<template>
  <div>
    <Header
      :page="$nuxt.$route.path"
    />
    <Nuxt class="content" />
  </div>
</template>

<script>
export default {
}
</script>

<style>
.content {
  padding-top: 60px;
}
</style>
