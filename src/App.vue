<template>
  <div id="app">
    <MainLayout />
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  name: 'App',
  components: {
    MainLayout
  },
  data() {
    return {
      showLoader: true
    }
  },
}

</script>

<style lang="scss">
#app {
  font-family: Inter;
  max-width: 1920px;
  margin: 0 auto;
}
</style>
