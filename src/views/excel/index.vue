<template>
  <div>
    <router-link to="/excel/export">导出</router-link>
    <router-link to="/excel/read">读取</router-link>
    <hr />
    <router-view v-slot="slotProps">
      <transition name="fade" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'excel'
}
</script>
