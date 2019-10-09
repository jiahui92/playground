####一、混合/组合继承的不足
　　上一篇[JS继承](http://www.cnblogs.com/jiahuix/p/4722691.html)终于混合继承，认真思考一下，发现其还是有不足之处的：

> * 空间上的冗余：在使用原型链的方法继承父类的原型属性（Animal.prototype）的同时，也在子类的原型（Person.prototype）中继承多了一份父类属性（Animal.property）；具体来说：p与p.prototype中都保存了type,children，而p.prototype这一份是冗余的；

####二、寄生式组合继承
　　为了解决上面的问题，所以需要在混合继承的基础上进行改造。那么如何避免冗余呢？

* 避免使用 `Person.prototype = new Animal()` 来继承整个Animal实例；
* 这样将代码改写为 `Person.prototype = Animal.prototype`；
* 那么又会引入一个问题，Person.prototype与Animal.prototype共用一个空间（在正常继承中，Person.prototype应该有自己独立的空间），也就是说一旦我们修改了Person.prototype，同时也修改了Animal.prototype；
* 所以继续修改代码为 `Person.prototype=Object.create(Animal.prototype)` <br>下图为Object.create的实现（在支持ES5的浏览器中可以直接使用）；<br>![](http://images0.cnblogs.com/blog2015/743264/201508/121204024738283.png)<br>函数中返回的F即为Person.prototype的独立空间
* 完美主义者，constructor的指向问题（改不改都不影响）：原来返回的F.constructor指向Animal，要修改为指向Person；

![](http://images0.cnblogs.com/blog2015/743264/201508/121206110676131.png)
