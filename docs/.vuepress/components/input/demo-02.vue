<template>
  <el-form
    :model="form"
    :rules="rules"
    status-icon
    label-position="right"
    label-suffix="："
    label-width="120px"
    ref="ruleForm"
  >
    <w-input v-model="form.text" label="产品名称" prop="text" required></w-input>
    <w-input
      label="手机号"
      prop="mobile"
      v-model="form.mobile"
      required
      validation="tel"
    ></w-input>
    <w-input
      type="password"
      v-model="form.pass"
      label="密码"
      prop="pass"
      autocomplete="off"
    ></w-input>
    <w-input
      type="password"
      v-model="form.checkPass"
      label="确认密码"
      prop="checkPass"
      autocomplete="off"
    ></w-input>
    <w-input v-model.number="form.age" label="年龄" prop="age" :rules="ageRule"></w-input>
  </el-form>
</template>
<script>
export default {
  name: 'input-demo-02',
  data() {
    return {
      form: { text: '', mobile: '', age: '', pass: '', checkPass: '' }
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },
    checkAge(rule, value, callback) {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      if (!Number.isInteger(value)) {
        callback(new Error('请输入数字值'))
      } else {
        if (value < 18) {
          callback(new Error('必须年满18岁'))
        } else {
          callback()
        }
      }
    },
    validatePass(rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    },
    validatePass2(rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
  },
  computed: {
    ageRule() {
      return { validator: this.checkAge, trigger: 'blur' }
    },
    rules() {
      return {
        pass: { validator: this.validatePass, trigger: 'blur' },
        checkPass: { validator: this.validatePass2, trigger: 'blur' }
      }
    }
  }
}
</script>
