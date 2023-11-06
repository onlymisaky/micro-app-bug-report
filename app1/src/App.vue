<template>
  <div id="app">
    <NavMenu :menus="menus" />
    <router-view />
  </div>
</template>

<script>
import NavMenu from 'base/NavMenu'
export default {
  components: { NavMenu },
  data() {
    return {
      menus: [
        { path: '/', label: '子应用 1 Home' },
        { path: '/about', label: '子应用 1 About' },
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
