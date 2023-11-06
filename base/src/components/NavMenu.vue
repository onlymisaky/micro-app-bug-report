<template>
  <nav>
    <template v-for="(menu, index) in menus">
      <router-link :key="menu.path"
        :to="menu.path">
        {{ menu.label }}
      </router-link>
      <template v-if="index < menus.length - 1">&nbsp;|&nbsp;</template>
    </template>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    menus: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
