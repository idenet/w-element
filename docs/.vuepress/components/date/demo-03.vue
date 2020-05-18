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
      type="datetime"
      v-model="form.date"
      value-format="yyyy-MM-dd HH:mm:ss"
      placeholder="选择日期"
    ></w-date>
    <p>您选中时间的值是：{{form.date}}</p>
  </el-form>
</template>

<script>
export default {
  name: 'date-demo-03',
  data() {
    return {
      form: {
        date: ''
      }
    }
  }
}
</script>

<style scoped>
</style>