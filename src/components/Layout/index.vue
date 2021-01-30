<template>
  <div class="layout">
    <Tabs />
    <!--
      解决vue3页面切换离开不显示动效
      这种写法虽然看起来奇怪,transition组件不起作用的时候写就可以了
      参考
      https://www.reddit.com/r/vuejs/comments/j3tnws/vue3_router_transitions/
      https://www.youtube.com/watch?t=1190&v=A5cVyjrKx_Q
    -->

    <router-view v-slot="slotProps">
      <transition name="fade" mode="out-in">
        <div class="content-router">
          <component :is="slotProps.Component"></component>
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Tabs from '../tabs'
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
