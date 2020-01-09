<template>
  <div id="app">
    <b-container>
      <app-header></app-header>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
export default {
  name: 'App',
  components: {
    AppHeader,
  }
}
</script>

<style scoped>

</style>
