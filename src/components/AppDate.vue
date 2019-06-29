<template>
  <span :title="timestamp | moment('MMMM Do YYYY, h:mm:ss a')">{{timestamp | moment("from")}}</span>
</template>

<script>
import Vue from 'vue'
Vue.use(require('vue-moment'))

export default {
  name: 'AppDate',
  props: {
    timestamp: {
      required: true,
      type: Number
    }
  }
}
</script>

<style scoped>

</style>
