<template>
  <el-form
    :model="form"
    label-position="right"
    label-suffix="："
    label-width="120px"
  >
    <w-date
      prop="date"
      label="时间范围"
      type="daterange"
      v-model="form.date"
      value-format="yyyy-MM-dd"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    ></w-date>
    <p>您选中时间的值是：{{form.date}}</p>
  </el-form>
</template>

<script>
export default {
  name: 'date-demo-01',
  data() {
    return {
      form: {
        date: []
      }
    }
  }
}
</script>

<style scoped>
</style>