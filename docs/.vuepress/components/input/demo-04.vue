<template>
  <el-form :model="form">
    <w-input
      v-model="form.textarea"
      type="textarea"
      maxlength="100"
      show-word-limit
      :autosize="{ minRows: 2, maxRows: 4}"
    ></w-input>
  </el-form>
</template>

<script>
export default {
  name: 'input-demo-04',
  data() {
    return {
      form: {
        textarea: ''
      }
    }
  }
}
</script>

<style scoped>
</style>
