<template>
  <!-- <h2>请选择食物</h2> -->
  <Suspense>
    <!-- 如果加载加载成功会显示default模板内容 -->
    <template #default>
      <AsyncShowTruthVue></AsyncShowTruthVue>
    </template>
    <!-- 会先显示fallback模板, -->
    <template #fallback>
      <h1>正在加载...</h1>
    </template>
  </Suspense>
</template>

<script lang="ts">
import AsyncShowTruthVue from "./components/AsyncShowTruth.vue";
//axios
export default {
  name: "App",
  components: { AsyncShowTruthVue },
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
