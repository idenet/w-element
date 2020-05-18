<template>
  <el-form :model="form" label-position="right" label-suffix="：">
    <w-input
      v-model="form.text"
      label="产品名称"
      @change="handleChange"
      label-width="120px"
    ></w-input>
  </el-form>
</template>

<script>
export default {
  name: 'input-demo-01',
  data() {
    return {
      form: { text: '' }
    }
  },
  methods: {
    handleChange(val) {
      this.$message.success(val)
    }
  }
}
</script>
