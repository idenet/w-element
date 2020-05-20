---
title: form
sidebarDepth: 2
---

## 基础展示

此示例展示了`pl-form`的基础使用,基于配置式,代码量大大减少,同时表单校验也简单了许多,在配置比较繁琐不如模板清晰的时候,可使用 slot 用模板编写.如 demo 中活动时间这个表单项

<demo-block>

<form-demo-01 slot="source"></form-demo-01>

<<< docs/.vuepress/components/form/demo-01.vue

</demo-block>

## 栅格布局

<demo-block>

<form-demo-02 slot="source"></form-demo-02>

<<< docs/.vuepress/components/form/demo-02.vue

</demo-block>

## 响应式

主要用于查询表格

<demo-block>

<form-demo-03 slot="source"></form-demo-03>

<<< docs/.vuepress/components/form/demo-03.vue

</demo-block>

## attribute

| 参数         | 说明                       | 类型    | 默认值 |
| ------------ | -------------------------- | ------- | ------ |
| isSearchForm | 判断是否是表格的搜索`form` | boolean | false  |
| formItems    | 表单元素的对象格式         | object  |        |
| cols         | 用于栅格布局               | array   |        |
| rules        | B 自定义的校验规则         | array   |        |

## formItems

| 参数     | 说明                                                | 类型    | 默认值 |
| -------- | --------------------------------------------------- | ------- | ------ |
| comp     | 组件名称 `w-select`                                 | string  |        |
| label    | 名称                                                | sting   |        |
| prop     | 字段名也是 rules 使用的条件，所有组件都默认的 rules | string  |        |
| required | 是否必填                                            | boolean |        |
| options  | 选项内容                                            | array   |        |
| type     | 类型                                                | string  |        |
| slot     | 如果填了 slot 可自定义模板                          | string  |        |
| span     | 用于栅格布局的所占区域大小                          | number  |        |
