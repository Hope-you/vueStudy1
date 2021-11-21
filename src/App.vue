<template>
  <h2>请选择食物</h2>
  <div>随机选择食物</div>
  <div v-if="loading">正在加载...</div>
  <div v-if="result != null">
    <!-- 不知道为啥,ts提示可能为空,但是可以运行预览 -->
    <el-table :data="result.data" stripe style="width:80%">
      <el-table-column prop="searchWord" label="标题" width="180" />
      <el-table-column prop="content" label="内容" width="180" />
      <el-table-column prop="score" label="内容id" />
      <!-- #default="scope"这个好像是vue3的新特性,感觉挺方便的 -->
      <el-table-column label="123123" #default="scope">
        <!-- 直接通过v-bind来给id传递参数 -->
        <modal :id="scope.row.score"></modal>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import useUrlAxios from "./hooks/useUrlAxios";
import modal from "./components/Modal.vue";
//axios
export default {
  name: "App",
  //注册组件,其实可以用 <script setup lang="ts">,就不用再注册组件了,可以参考,Modal,vue
  components: { modal },
  setup() {
    const { result, loading, loaded } = useUrlAxios("http://true.al.52hz.cyou:3000/search/hot/detail");
    console.log(result);
    return {
      result,
      loading,
      loaded
    };
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
