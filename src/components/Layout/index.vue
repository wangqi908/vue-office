<template>
  <div class="layout">
    <Tabs />
    <router-view class="content-router" />
  </div>
</template>

<script>
import Tabs from '../Tabs'
export default {
  components: { Tabs },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.layout {
  border: 1px solid #000;
  display: flex;
  height: 100%;
  .content-router {
    flex: 1;
    overflow: auto;
  }
}
</style>
