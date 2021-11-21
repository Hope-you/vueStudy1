<template>
    <div id="center">
        <el-button type="success" size="medium" @click="open1">提示</el-button>
    </div>
</template>

<!-- scrept 标签添加了setup 就不要return了,很方便 -->
<script setup lang="ts">
import { ElMessage } from "element-plus"
import { defineProps } from "vue";

//可以理解为给子组件添加属性,父组件可以通过这个属性来传递参数
const props = defineProps({
    id: {
        type: Number
    }
});
//element-plus提供的方法
const open1 = () => {
    ElMessage("您选择的是" + props.id)
}
</script>

<style>
</style>