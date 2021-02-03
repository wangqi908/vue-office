<template>
  <div>
    <router-link to="/pdf/export-by-element">导出指定区域</router-link>
    <router-link to="/pdf/export-by-url">导出指定URL</router-link>
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
  name: 'pdf'
}
</script>
