<template>
  <div id="app">
    <v-header v-if="$store.state.show_header"></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    vHeader: require('./components/tpl/header.vue')
  }
}
</script>
