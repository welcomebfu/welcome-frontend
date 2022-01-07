<template>
  <div>
    <Header
      :page="$nuxt.$route.path"
    />
    <Nuxt class="content" />
    <Footer />
  </div>
</template>

<script>
export default {
}
</script>

<style>
.content {
  width: 100%;
  padding-top: 60px;
}
</style>
