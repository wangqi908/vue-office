<template>
  <div class="tab-comp">
    <router-link to="/home">Home</router-link>
    <router-link to="/excel">EXCEL</router-link>
    <router-link to="/docx">DOCX</router-link>
    <router-link to="/pdf">PDF</router-link>
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
  .router-link-active {
    background: skyblue;
    color: yellow;
  }
}
</style>
