<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1>Hello, world!</h1>
        <p>Contents ...</p>
        <p>
          <a class="btn btn-primary btn-lg">Learn more</a>
        </p>
      </div>
    </div>
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
