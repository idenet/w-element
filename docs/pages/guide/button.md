---
title: button
sidebarDepth: 2
---

## 防抖

禁止用户频繁点击，多用于频繁点击操作，500ms 之内重复点击只会执行一次

<demo-block>
<button-demo-01 slot="source"></button-demo-01>

<<< docs/.vuepress/components/button/demo-01.vue

</demo-block>

## 自动 loading

自动添加 loading 效果,方便点击处理事件

## 操作确认

有时候我们点击按钮需弹窗确认后方可继续,`pl-button`封装了这个步骤

## Attributes

| 参数              | 说明                                                                                             | 类型        | 可选值 | 默认值 |
| ----------------- | ------------------------------------------------------------------------------------------------ | ----------- | ------ | ------ |
| debounce          | 是否启用防抖                                                                                     | boolean     | —      | false  |
| loading           | 点击后自动开启 loading(按钮上)                                                                   | boolean     | —      | false  |
| fullscreenLoading | 点击后自动开启 loading(全屏)                                                                     | boolean     | —      | false  |
| confirmType       | 操作按钮确认方式,可自动渲染`el-popconfirm`或`element-ui`的`confirm`弹窗                          | pop/confirm | —      | —      |
| popConfig         | 当传入 confirmType 为 pop 时,`el-popconfirm`属性的对象,可传入`el-popconfirm`组件支持的所有属性值 | object      | —      | —      |
| confirmConfig     | 当传入 confirmType 为 confirm 时,`element-ui`的`Messagebox.confirm`的属性值对象                  | —           | —      | —      |

除以上列出的为本组件封装的新属性,其他`el-input`的任何属性均可直接继承

## Events

| 事件名  | 描述                                                       | 参数      |
| ------- | ---------------------------------------------------------- | --------- |
| click   | 点击事件,如使用了 loading,可用回调函数 done 来清除 loading | (fn:done) |
| confirm | 当传入 confirmType 的时候,操作按钮确认事件                 | (fn:done) |
