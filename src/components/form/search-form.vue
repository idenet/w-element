<template>
  <el-form :model="form" v-bind="$attrs" ref="wForm">
    <template v-for="(item,index) in formItems">
      <template>
        <form-item-grid :key="index" :cols="item.cols" :item="item">
          <template v-slot="{col,item}">
            <component
              :is="col?col.comp:item.comp"
              v-bind="col||item"
              v-model="form[col?col.prop:item.prop]"
              :key="index"
              :ref="col?col.prop:item.prop"
            ></component>
            <slot :name="col?col.slot:item.slot" v-bind="{form,item}"></slot>
          </template>
        </form-item-grid>
      </template>
    </template>
    <slot name="submit" v-bind="{form}">
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </slot>
    <slot></slot>
  </el-form>
</template>

<script>
import FormItemGrid from './form-item-grid'
export default {
  name: 'w-search-form',
  components: { FormItemGrid },

  props: {
    formItems: {
      type: Array,
      default: () => []
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      form: this.value
    }
  },
  created() {
    this.formItems.forEach(item => {})
  },
  methods: {
    submitForm() {
      this.$refs.wForm
        .validate()
        .then(() => {
          this.$emit('submit', this.form)
          Promise.resolve(this.form)
        })
        .catch(() => {
          Promise.reject()
        })
    },
    resetForm() {
      this.$refs.wForm.resetFields()
    }
  },
  computed: {},
  watch: {}
}
</script>

<style scoped>
</style>
