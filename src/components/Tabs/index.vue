<template>
  <div class="tab-comp">
    <router-link to="/home" exact>Home</router-link>
    <router-link to="/docx">docx</router-link>
    <router-link to="/excel">excel</router-link>
    <router-link to="/pdf">pdf</router-link>
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
}
</style>
