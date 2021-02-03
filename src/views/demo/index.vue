<template>
  <div>
    <button @click="test">test</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  setup () {
    function test () {
      axios.post('aaa', {}).then(res => {
        console.log(res)
      })
    }
    return { test }
  }
}
</script>

<style lang="scss" scoped></style>
