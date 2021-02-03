<template>
  <div class="layout">
    <Tabs />
    <router-view v-slot="slotProps">
      <transition name="fade" mode="out-in">
        <component :is="slotProps.Component" class="content-router"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Tabs from '../tabs'
export default {
  name: 'layout',
  components: { Tabs }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100%;
  .content-router {
    flex: 1;
    overflow: auto;
  }
}
</style>
