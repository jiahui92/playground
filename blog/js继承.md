####一、原型链
![](http://images0.cnblogs.com/blog2015/743264/201508/112319278173116.png)<br>

* 利用 `Person.prototype = new Animal("Human")` 实现继承；
* static式继承、能继承Animal.prototype、不可多重继承；

####二、借用构造函数
![](http://images0.cnblogs.com/blog2015/743264/201508/112319472398016.png)<br>

* 对象冒充、apply、call三个方法的原理都是使用Person的this调用Animal；
* property式继承、不能继承Animal.prototype、可多重继承；

####三、混合
![](http://images0.cnblogs.com/blog2015/743264/201508/112319591602208.png)<br>

* 使用static式（原型链的方法）继承Animal（Animal的属性和原型）；
* 使用property式（借用构造函数的方法）继承Animal.property；

####四、总结
<table>
<tr><th></th><th>继承方式</th><th>继承Animal.protptype</th><th>多重继承</th></tr>
<tr><td>原型链</td><td>static</td><td>Y</td><td>N</td></tr>
<tr><td>借用构造函数</td><td>property</td><td>N</td><td>Y</td></tr>
<tr><td>混合</td><td>static,property</td><td>Y</td><td></td></tr>
</table>

> 部分参考《JavaScript高级程序设计》