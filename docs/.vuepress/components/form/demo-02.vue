<template>
  <w-form
    label-position="right"
    label-suffix="："
    label-width="120px"
    v-model="form"
    :form-items="formItems"
    class="form-demo-02"
  >
    <!-- <template v-slot:date="{form,item}">
      <el-form-item label="活动时间" class="form-demo-02-date-item">
        <el-col :span="11">
          <w-date v-model="form.date1" prop="date1" value-format="timestamp"></w-date>
        </el-col>
        <el-col class="line" :span="2" style="text-align:center;">-</el-col>
        <el-col :span="11">
          <w-date v-model="form.date2" prop="date2"></w-date>
        </el-col>
      </el-form-item>
    </template>-->
  </w-form>
</template>

<script>
export default {
  name: 'form-demo-02',
  data() {
    return {
      form: {
        name: '',
        region: '',
        date: [],
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  computed: {
    formItems() {
      return [
        {
          comp: 'grid',
          cols: [
            { span: 12, comp: 'w-input', label: '活动名称', prop: 'name' },
            {
              span: 12,
              comp: 'w-select',
              label: '活动区域',
              prop: 'region',
              options: this.regionOptions,
              required: true
            }
          ]
        },
        {
          comp: 'grid',
          cols: [
            {
              span: 12,
              comp: 'w-date',
              label: '活动时间',
              prop: 'date',
              required: true,
              type: 'daterange',
              valueFormat: 'yyyy-MM-dd'
            },
            {
              span: 12,
              comp: 'w-switch',
              label: '即时配送',
              prop: 'delivery',
              required: true
            }
          ]
        },
        {
          comp: 'w-checkbox',
          label: '活动性质',
          prop: 'type',
          options: [
            '美食/餐厅线上活动',
            '地推活动',
            '线下主题活动',
            '单纯品牌曝光'
          ],
          required: true
        },
        {
          comp: 'w-radio',
          label: '特殊资源',
          prop: 'resource',
          options: ['线上品牌商赞助', '线下场地免费'],
          required: true
        },
        {
          comp: 'grid',
          cols: [
            {
              span: 16,
              comp: 'w-input',
              label: '说明',
              prop: 'desc',
              type: 'textarea',
              maxlength: 300,
              'show-word-limit': true,
              required: true
            }
          ]
        }
      ]
    },
    regionOptions() {
      return [
        { label: '北京', value: 'beijing' },
        { label: '上海', value: 'shanghai' },
        { label: '广州', value: 'guangzhou' },
        { label: '深圳', value: 'shenzhen' }
      ]
    }
  }
}
</script>

<style lang="stylus">
.form-demo-02 {
  .el-input {
    width: 100%;
  }

  .el-select {
    width: 100%;
  }
}

.form-demo-02-date-item {
  .el-input {
    width: 100%;
  }
}
</style>
