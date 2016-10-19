<template>
  <div id="app">
      <iptv></iptv>
  </div>
</template>

<script>
import Iptv from './components/Iptv'

export default {
  name: 'app',
  components: {
      Iptv
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
