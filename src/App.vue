<template>
  <h2>请选择食物</h2>
  <div>随机选择食物</div>
  <div v-if="loading">正在加载...</div>
  <div v-else>
    <!-- 不知道为啥,ts提示可能为空,但是可以运行预览 -->
    <el-table :data="result.data" stripe style="width:50%">
      <el-table-column prop="alg" label="状态" />
      <el-table-column prop="searchWord" label="标题" width="180" />
      <el-table-column prop="content" label="内容" width="180" />
      <el-table-column prop="score" label="内容id" />
    </el-table>
  </div>
</template>

<script lang="ts">
import useUrlAxios from "./hooks/useUrlAxios";
//axios
export default {
  name: 'App',
  setup() {
    const { result, loading, loaded } = useUrlAxios("http://true.al.52hz.cyou:3000/search/hot/detail");
    console.log(result)
    return {
      result, loading, loaded
    }
  },
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
