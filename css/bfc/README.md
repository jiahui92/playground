BFC 可以简单的理解为某个元素的一个 CSS 属性，只不过这个属性不能被开发者显式的修改，拥有这个属性的元素对内部元素和外部元素会表现出一些特性，这就是BFC。


### 触发BFC的条件
https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context
* 浮动元素float
* position: absolute | fixed
* display: inline-block | flex
* overflow: hidden | auto | scroll


### BFC的作用
* BFC是一个封闭的大箱子，里面无论怎么弄，都会包裹子元素
  * BFC父元素会包裹子元素的margin
  * BFC父元素会包裹浮动的子元素
  * 特殊情况：inline子元素只会被包裹content，其余被截断（overflow:hidden截断 | position:absolute则不截断，但不包裹，也就是超出了父元素的范围）
* 相邻块级BFC的垂直margin会发生折叠
* BFC元素不会被floatBox覆盖，普通元素会被覆盖（防止floatLeft覆盖rightDiv／取消img环绕效果）
* 两列布局：自适应宽度

