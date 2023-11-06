<template>
  <div id="app">
    <NavMenu :menus="menus" />
    <router-view />
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
export default {
  components: { NavMenu },
  data() {
    return {
      menus: [
        { path: '/', label: 'Home' },
        { path: '/child-app1', label: '子应用 1' },
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
