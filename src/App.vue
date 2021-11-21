<template>
  <div>{{ nowTime }}</div>
  <el-button type="success" size="medium" @click="getNowTime">显示</el-button>
</template>

<script lang="ts">

//引入hooks中自定义的模块
import { nowTime, getNowTime } from './hooks/useNowTime';
export default {
  name: 'App',
  setup() {
    return {
      nowTime, getNowTime
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
