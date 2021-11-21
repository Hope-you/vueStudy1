
<template>
    <!-- 照着教程写的不知道为啥会报错,但是能显示 -->
    <h2>{{ result }}</h2>
</template>

<script  lang="ts">
import { defineComponent } from "vue";
export default defineComponent({

    setup() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve({ result: "你已经抓到我了呀!" })
            }, 3000);
        });
    }
});
</script>


<style>
</style>