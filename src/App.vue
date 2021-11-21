<template>
  <h2>请选择食物</h2>
  <Suspense>
    <!-- 如果加载加载成功会显示default模板内容 -->
    <template #default>
      <AsyncShowVue></AsyncShowVue>
    </template>
    <!-- 会先显示fallback模板, -->
    <template #fallback>
      <h1>Loading...</h1>
    </template>
  </Suspense>
</template>

<script lang="ts">
import AsyncShowVue from "./components/AsyncShow.vue";
//axios
export default {
  name: "App",
  components: { AsyncShowVue },
  setup() {
    return {}
  }

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
