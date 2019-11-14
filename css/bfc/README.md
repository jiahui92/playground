BFC 可以简单的理解为某个元素的一个 CSS 属性，只不过这个属性不能被开发者显式的修改，拥有这个属性的元素对内部元素和外部元素会表现出一些特性，这就是BFC。



### BFC的作用
* BFC是一个封闭的大箱子，里面无论怎么弄，都会包裹子元素
  * BFC父元素会包裹子元素的margin
  * BFC父元素会包裹浮动的子元素
  * inline子元素只会被包裹content，其余被截断（overflow:hidden截断 | position:absolute则不截断，但不包裹，也就是超出了父元素的范围）
* BFC元素不会被floatBox覆盖

> 或者更简单来说
* overflow:hidden
  * 让父元素包裹所有子元素（通常是包裹float子元素）
  * 防止被float同级元素覆盖（取消img环绕效果／rightDiv防止被aside覆盖）
* 两列布局：自适应宽度



### 触发BFC的条件
* 浮动元素float
* position: absoulte | fixed
* display: inline-block | flex
* overflow: hidden | auto | scroll
