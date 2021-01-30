<template>
  <div class="tab-comp">
    <router-link to="/home" exact>Home</router-link>
    <router-link to="/about" exact>About</router-link>
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
.tab-comp {
  border-right: 1px solid #ccc;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  .router-link-exact-active {
    background: skyblue;
    color: yellow;
  }
}
</style>
