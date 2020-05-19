---
title: input
sidebarDepth: 2
---

## 基础用法

<demo-block>
<input-demo-01 slot="source"></input-demo-01>
<<< docs/.vuepress/components/input/demo-01.vue

支持`el-input`的其他任何属性

</demo-block>

## 校验
::: tip
校验支持多种方式,需传入`prop`:
- 可直接在`el-form`上传入`rules`属性,与`el-form`的原生用法一致
- `w-input`传入`rules`属性,与`el-form-item`的`rules`属性用法一致
- `w-input`传入 `required`属性,此时会自动校验必填
:::

<demo-block>
<input-demo-02 slot="source"></input-demo-02>
<<< docs/.vuepress/components/input/demo-02.vue
</demo-block>


## 金额输入
后端一般传入前端的值为分 前端需做一些金钱转换传给后端分为单位

<demo-block>
<input-demo-03 slot="source"></input-demo-03>
<<< docs/.vuepress/components/input/demo-03.vue
</demo-block>

## `textarea`和`el-input`一致

<demo-block>
<input-demo-04 slot="source"></input-demo-04>
<<< docs/.vuepress/components/input/demo-04.vue
</demo-block>


## attribute
| 参数       | 说明           | 类型    | 默认值                                                    |
| ---------- | -------------- | ------- | --------------------------------------------------------- |
| rules      | 表单验证规则   | object  |                                                           |
| validation | 验证的默认规则 | string  | idCard/carNumber/integer/tel/price/towPointReg/percentReg |
| cent       | 分化百元       | boolean | false                                                     |
