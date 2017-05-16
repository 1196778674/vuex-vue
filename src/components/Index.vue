<template>
  <div>
    <v-header></v-header>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  components: {
    vHeader: require('./tpl/header.vue')
  }
}
</script>
