<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h2>欢迎光临!</h2>
  <div>请选择菜品!</div>
  <div>
    <el-button
      type="primary"
      size="medium"
      v-for="(item,index)  in foods"
      :key="index"
      @click="selectFood(index)"
    >{{ index }}:{{ item }}</el-button>
  </div>
  <!-- 教程里面说要添加data.selectedFood 但是我好像直接不用写data,写data反而会报错 -->
  <div>您选择了{{ selectedFood }}</div>
</template>

<script lang="ts">

//reactive()
import { defineComponent, ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue';

//类型注解 使用typescript
interface dataProps {
  foods: string[],
  selectedFood: string,
  selectFood: (index: number) => void
}

export default {
  name: 'App',
  setup() {
    //规定了函数的类型,把要的方法属性等等,封装到一个对象中,直接返回data
    console.log("1开始创建组件----setup()")
    const data: dataProps = reactive({
      foods: ["五花肉", "黄焖鸡米饭", "肉末茄子"],
      selectedFood: "",
      selectFood: (index: number) => {
        data.selectedFood = data.foods[index]
      }
    }); onMounted(() => {
      console.log("3组件创建之后执行---onMounted")
    });
    onBeforeMount(() => {
      console.log("2组件挂载之间执行---onBeforeMount")
    });

    onBeforeUpdate(() => {
      console.log("4组件挂载到页面之后执行---onBeforeUpdate")
    });
    onUpdated(() => {
      console.log("5组件更新之后执行---onUpdated")
    })
    return data;
  },

};




//使用ref来操作
// const foods =ref(["五花肉", "黄焖鸡米饭", "肉末茄子"]);
// const selectedFood=ref("");
// const selectFood = (index:number)=>{
//  selectedFood.value=foods.value[index];
// }
//return {
//foods,selectedFood,selectFood
//}
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
