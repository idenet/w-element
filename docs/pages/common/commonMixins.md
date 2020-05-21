---
title: 公共mixins
sidebarDepth: 2
---

```vue
<template></template>

<script>
// import request from '@/utils/request'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      pageSize: 10,
      pageNum: 1,
      total: 0,
      totalPage: 0,
      list: [],
      chooseList: [],
      fts: {
        name: '',
        id: '',
        date: [new Date(Date.now()), new Date(Date.now() + 86400000)],
      },
      host: process.env.BASE_API, //
      pickerOptions2: {
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              end.setTime(start.getTime() + 3600 * 1000 * 24 * 1)
              picker.$emit('pick', [start, end])
            },
          },
        ],
      },
    }
  },
  filters: {},
  created() {},
  watch: {},
  methods: {
    // 返回
    back() {
      this.$router.back()
    },
    // 选中
    handleSelectionChange(list) {
      this.chooseList = list
    },
    // 多行删除
    deleteBatch() {
      if (this.chooseList.length == 0) {
        return
      }
      this.$confirm(
        '改操作无法撤销',
        `确认要删除${this.chooseList.length}条吗？`,
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error',
        }
      ).then(() => {
        request({
          url: this.serviceUrl + 'delete/batch',
          data: {
            ids: this.chooseList.map((v) => v.id).join(','),
          },
        }).then(() => {
          this.fetchData()
        })
      })
    },
    // 删除单行
    deleteUser(user) {
      let index = this.list.map((item) => item.id).indexOf(user.id)
      this.$confirm('改操作无法撤销', `确认要删除吗？`, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error',
      }).then(() => {
        request({
          url: this.serviceUrl + 'update',
          data: {
            id: user.id,
            data: JSON.stringify({
              deleted: 1,
            }),
          },
        }).then(() => {
          this.list.splice(index, 1)
        })
      })
    },
    // 组合页面内的filter
    getFinalFilter() {
      let data = this.baseFilter()
      if (typeof this.getFilters === 'function') {
        data = Object.assign(data, this.getFilters())
      }
      return data
    },
    // 请求数据
    fetchData() {
      this.listLoading = true
      let data = this.getFinalFilter()
      request({
        url: this.serviceUrl + 'all',
        data,
      })
        .then((response) => {
          this.list = response.data.list || []
          this.total = response.data.total
        })
        .catch((res) => {})
    },
    // 基础filter
    baseFilter() {
      let data = {
        pageSize: this.pageSize,
        pageNum: (this.pageNum || 1) - 1,
      }
      if (this.fts.date && this.fts.date.length === 2) {
        data.start_time = this.date[0].Format('yyyy-MM-dd 00:00:00')
        data.end_time = this.date[1].Format('yyyy-MM-dd 00:00:00')
      }
      if (this.fts.name) {
        data.name = this.fts.name
      }
      return data
    },
    // 改变页面
    handleCurrentChange(p) {
      this.changePage(p)
      this.fetchData()
    },
    getRecord(p = 1) {
      if (!(p > 0)) {
        p = 1
      }
      this.changePage(p)
      this.pageNum = p
      this.chooseList = []
      this.fetchData()
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      let pageNum = Number(to.query.pageNum)
      if (pageNum > 0) {
        vm.pageNum = pageNum
      }
      vm.getRecord()
    })
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
}
</script>
```
