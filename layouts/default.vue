<template>
  <div>
    <Header
      :page="$nuxt.$route.path"
    />
    <div class="content">
      <Nuxt />
    </div>
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
  min-height: 100vh;
}
</style>
