<template>
  <div id="app">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <button class="btn btn-danger" @click="increment">+</button>
    <button class="btn btn-default" @click="decrement">-</button>
    <button class="btn btn-default" @click="incrementIfOdd">Increment if odd</button>
    <button class="btn btn-default" @click="incrementAsync">Increment async</button>
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
  ])
}
</script>
