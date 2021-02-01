<template>
  <div>
    <router-link to="/pdf/pdf1" exact>pdf1</router-link>
    <router-link to="/pdf/pdf2" exact>pdf2</router-link>
    <hr />
    <router-view v-slot="slotProps">
      <transition name="fade" mode="out-in">
        <component :is="slotProps.Component" class="content-router"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  background: skyblue;
  color: yellow;
}
.router-link-active {
  background: skyblue;
  color: yellow;
}
</style>
