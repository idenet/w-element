<template>
  <el-form-item
    :label="label"
    :prop="prop"
    :rules="mergedRules"
    :label-width="labelWidth"
    v-bind="{...formItemAttrs}"
  >
    <el-input
      v-model="message"
      v-bind="{...defaultAttrs,...$attrs}"
      :placeholder="$attrs.placeholder||`请输入${label}`"
      @change="handleChange"
      @input="handleInput"
      @blur="$emit('blur')"
    >
      <slot slot="suffix"></slot>
    </el-input>
  </el-form-item>
</template>

<script>
import {
  idCardReg,
  telReg,
  integerNumberReg,
  carNumReg,
  priceReg,
  towPointReg,
  percentReg
} from '../../utils/regs'
import NP from 'number-precision'

export default {
  name: 'w-input',
  props: {
    rules: {
      type: [Object, Array],
      default: () => []
    },
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    },
    value: { default: '' },
    labelWidth: {
      type: [String, Number],
      default: ''
    },
    formItemAttrs: {
      type: Object,
      default: () => ({})
    },
    required: {
      type: Boolean,
      default: null
    },
    validation: {
      type: String,
      default: ''
    },
    cent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      message: '',
      defaultAttrs: {
        clearable: true
      }
    }
  },
  methods: {
    isNaN(num) {
      return Number.isNaN(parseFloat(num))
    },
    handleChange(val) {
      let message = this.message
      if (this.cent && !this.isNaN(this.message)) {
        message = NP.round(NP.times(this.message, 100), 0)
        this.message = NP.round(this.message, 2)
      }
      this.$emit('input', message)
      this.$emit('change', this.message)
    },
    handleInput(val) {
      if (!this.cent) {
        this.$emit('input', val)
      }
    },
    init() {
      if (this.cent) {
        if (this.value !== undefined && this.value != null) {
          this.message = NP.divide(this.value, 100) || 0
          return
        }
      }
      this.message = this.value
    }
  },
  computed: {
    mergedRules() {
      let trigger = 'blur'
      if (this.trigger) {
        trigger = this.trigger
      }
      const required = this.required ?? 'no-required'
      const validation = this.validation
      const map = {
        idCard: {
          pattern: idCardReg,
          message: '请输入正确的身份证号',
          trigger
        },
        carNumber: {
          pattern: carNumReg,
          message: '请输入正确的车牌号',
          trigger
        },
        integer: {
          pattern: integerNumberReg,
          message: '请输入正整数',
          trigger
        },
        tel: { pattern: telReg, message: '请输入正确的手机号码', trigger },
        price: { pattern: priceReg, message: '请输入正确的金额', trigger },
        towPointReg: {
          pattern: towPointReg,
          message: '请输入正确的两位小数',
          trigger
        },
        percentReg: {
          pattern: percentReg,
          message: '请输入正确的百分比',
          trigger
        }
      }
      let rules = [
        required !== 'no-required'
          ? {
              required: this.required,
              message: `${this.label}不能为空`,
              trigger
            }
          : undefined,
        map[validation]
      ]
      if (this.rules && this.rules instanceof Array) {
        rules = [...rules, ...this.rules]
      } else {
        rules = [...rules, this.rules]
      }
      rules = rules.filter(v => v)
      return rules.length ? rules : undefined
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.init()
      }
    }
  }
}
</script>
