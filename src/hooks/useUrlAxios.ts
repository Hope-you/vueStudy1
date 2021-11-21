import { ref } from "vue";
import axios from "axios";
function useUrlAxios(url: string) {
    //这里给result指定了any类型,不然父组件会报错,其实也可以定义一个interface然后指定
    const result: any = ref(null);
    const loading = ref(true);
    const loaded = ref(false);
    const error = ref(null);


    axios.get(url).then((res) => {
        loading.value = false
        loaded.value = true
        result.value = res.data
    }).catch(e => {
        error.value = e
        loading.value = false
    })

    return {
        result, loading, loaded, error
    }
}
export default useUrlAxios