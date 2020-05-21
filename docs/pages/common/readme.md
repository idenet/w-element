---
title: 介绍
sidebarDepth: 2
---

# 介绍

在工作过程中，发现可以将一些共有的方法和请求整合成一个`mixins`，可以显著提高开发效率

## 为什么选择 mixins

使用 mixins 不使用组件是因为 mixins 的方法可以被重写

## 请求

所有请求要和后端约定好格式，可以是 restful 的，也可以是自定义的比如

```
**/*/all  --- 代表获取表格数据

返回值为
{
  list: [] ---       表格数据
  totalPage： xx  ---总页数
  page： 1 ----      当前第几页
  total： ------     总数据量
  otherData： {}     表格数据统计
}

**/*/add  ---- 新增单据详情

返回值

{
  id: xx -------单据id
}

**/*/get   -------  单据详情的表头 类似打印出来的表格上的时间，类型， 制表人等

{
  author: xx
  date: xx
}

**/*/updateStatus ---- 更新单据状态  通过/拒绝等

```
