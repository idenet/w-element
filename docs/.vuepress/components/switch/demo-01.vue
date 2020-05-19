<template>
  <el-form
    :model="form"
    label-position="right"
    label-suffix="："
    label-width="120px"
  >
    <w-switch
      label="付费情况"
      prop="value"
      v-model="form.value"
      active-text="按月付费"
      inactive-text="按年付费"
      required
    ></w-switch>
  </el-form>
</template>
<script>
export default {
  name: 'switch-demo-01',
  data() {
    return {
      form: {
        value: true
      }
    }
  }
}
</script>