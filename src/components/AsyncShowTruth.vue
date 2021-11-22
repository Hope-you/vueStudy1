<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
export default defineComponent({
  async setup() {
    const rowData = await axios.get(
      'https://api.al.52hz.cyou/playlist/detail?id=6737969190'
    )
    return { result: rowData.data.playlist.tracks }
  },
})
</script>
<template>
  <el-table
    :data="result"
    stripe
  >
    <el-table-column
      prop="name"
      label="名字"
    ></el-table-column>
    <el-table-column
      prop="id"
      label="id"
    ></el-table-column>
    <el-table-column
      prop="ar[0].name"
      label="歌手"
    ></el-table-column>
    <el-table-column
      prop="al.name"
      label="专辑"
    ></el-table-column>
    <el-table-column
      prop="al.picUrl"
      label="封面"
    >
      <template #default="scope">
        <!-- 这个size可以不用v-bind 但是只能有三个固定的值"large", "medium", "small" 如果用v-bind可以用数值 -->
        <el-avatar
          icon="el-icon-user-solid"
          :size="50"
          shape="square"
          :src="scope.row.al.picUrl"
          fit="fill"
        ></el-avatar>
      </template>
    </el-table-column>
  </el-table>
</template>
<style></style>
