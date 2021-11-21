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
  <!-- 教程里面说要添加data.selectedFood 但是我好像直接不用写data,写data反而会报错
  好像也不是,可能return有问题,可以用toRefs()转化成渐进式数据
  -->
  <div>您选择了{{ selectedFood }}</div>

  <el-button type="success" size="medium" @click="overAction()">选择完毕</el-button>
  <div>{{ overText }}</div>
</template>

<script lang="ts">

//reactive()
import { defineComponent, ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, toRefs, watch } from 'vue';

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
    });
    const overText = ref("请点餐");
    const overAction = () => {
      overText.value = "点餐完成";
      // document.title = overText.value
    }

    //看不明白,为啥鉴定setup中的数据要用箭头函数
    watch([overText, () => data.selectedFood], (newValue, oldValue) => {
      console.log(`new--->${newValue}`);
      console.log(`old--->${oldValue}`);
      document.title = newValue[0];
    })

    return {
      ...toRefs(data),
      overText,
      overAction
    };
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
