#html5 drag和drop事件
先上效果图：<br>
![](http://images0.cnblogs.com/blog2015/743264/201506/182003143264832.gif)

代码：<br>
![](http://images0.cnblogs.com/blog2015/743264/201506/182005405132937.png)

![](http://images0.cnblogs.com/blog2015/743264/201506/182008539046122.png)


1. 代码里仅使用了dragstart、dragover、drop事件。另外还有dragenter、dragleave、drag、dragend事件。
2. 还有比较特别的是增加了一个event.dataTransfer对象。下面会详细介绍一下。

<br>特别要注意:
> 1. ondragover处要使用event.preventDefault(),不然不会触发ondrop事件！
> 2. 被拖动元素的html里要设置draggable="true"。
> 3. 在拖动过程中，mouseover是不会被触发的。


###dataTransfer对象
1. effectAllowed、dropEffect:指定被拖拽元素和放置元素能接收什么操作；
2. setData、getData、clearData:设置、获取、删除数据；
3. addElement:添加某个元素跟随被拖拽元素；
4. setDragImage:设置拖放过程中跟随鼠标的图片，默认为元素本身；

[[详细参数说明点击此处]](http://jingyan.baidu.com/article/6dad5075cf6e62a123e36e11.html)
