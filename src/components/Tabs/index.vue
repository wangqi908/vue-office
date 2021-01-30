<template>
  <div class="tab-comp">
    <router-link to="/home" exact>Home</router-link>
    <router-link to="/excel-read" exact>excel-read</router-link>
    <router-link to="/excel-export" exact>excel-export</router-link>
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
  width: 100px;
  flex-shrink: 0;

  .router-link-exact-active {
    background: skyblue;
    color: yellow;
  }
}
</style>
