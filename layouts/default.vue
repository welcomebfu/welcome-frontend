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
  padding-top: 44px;
  min-height: 100vh;
}
@media (max-width: 632px) {
  .content {
    padding-top: 88px;
  }
}
</style>
