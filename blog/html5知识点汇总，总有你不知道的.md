#html5知识点汇总，总有你不知道的

###一、html5发展历程以及规划
<p>&nbsp;&nbsp;html5从2006年开始立项，用于替代1999年的html4，历经12年，完成了第一个版本html5.0，并于2014年底发布。</p>

<p>&nbsp;&nbsp;在接下来的日子里，html5.1将于2016年面世，目的是去掉html5.0中不稳定的部分，加入少量更新。而在html5.2版本中则将会迎来部分新功能。w3c计划每年迭代产生html5下一子版本，这意味着html5在2022年才能全部完工(┬＿┬)。</p>

[以上句句属实，不是瞎说o(︶︿︶)o ，有链接有真相！！！](http://www.iteye.com/news/26113)

<p>&nbsp;&nbsp;没错o(︶︿︶)o，看到这里，笔者也是才知道原来现在只是html5.0时代。但还是要提醒广大狼友一句：跟紧潮流！！！虽然有些功能（草案）尚未纳入html5.0，但有部分高大上功能还是值得我们去玩玩的，并且它们的浏览器支持度也不错了。</p>



###二、脑图汇总
![](http://images0.cnblogs.com/blog2015/743264/201506/201412291705340.png)

###三、知识点介绍
	*因部分知识点在网上已有大量的介绍，所以就直接引用了（确实不是懒-_-!）。

#####a.表单
表单中新增内容有，新的类型type、属性attritube、元素element
感觉里面比较有趣的内容是：
>* pattern和require，这两个属性用于简化表单检验，之前是通过jq插件实现，现在已经被纳入标准了。
>* keygen，用于不对称加密，但支持力度不好。具体是采用公钥私钥的方法：当提交表单时，keygen产生一个公钥和私钥，私钥保存在本地，而公钥随着表单信息被提交到服务器。

[--> 详细内容传送门(*^__^*) ](http://www.w3school.com.cn/html5/html_5_form_input_types.asp)

#####b.audio video canvas svg drag&drop 语义化标签
>* audio与video标签的引入，替换了之前的object，并且可通过js API
轻松实现一些播放控制逻辑。
>* canvas非常强大，可以做游戏，目前虽然是支持2d，但经过一些处理后，也能应用于3d。通常与canvas一起的WebGL。
>* svg用xml描述的方式来绘图（矢量图）。
>* drag&drop拖拽行为
>* 语义化标签：SEO，可用性

[--> 不要问我：为啥又是w3school o(︶︿︶)o ](http://www.w3school.com.cn/html5/html_5_video.asp)<br>
[--> drag&drop](http://www.cnblogs.com/jiahuix/p/4586953.html)<br>
[--> 语义化标签](http://www.cnblogs.com/jiahuix/p/4587030.html)<br>
[--> HTML5 Canvas,WebGL,CSS Shaders,GLSL的暧昧关系](http://www.zhangxinxu.com/wordpress/2011/10/html5-canvas-webgl-css-shaders-glsl的暧昧关系/)

#####c.地理定位
html5提供的定位API，在电脑中基于IP定位（可能会是服务提供商的位置），而在手机中则会采用GPS或基站定位。<br>
一般配合百度地图使用（告诉你一个秘密(￣︶￣)↗，v1.3版本的不需要注册账号即可使用，但功能就少了些）。<br>
[--> 不用猜，还是w3school -_-!的资料](http://www.w3school.com.cn/html5/html_5_geolocation.asp)

#####d.web存储
localStorage与sessionStorage，这个没啥好说的，就是用来保存数据，一般根据浏览器不同，有不同的容量限制，一般是5MB。
>* localStorage存储的数据永久保存，除非被清除了缓存。
>* sessionStorage存储的数据关闭浏览器后即被删除。

[--> 点点点](http://www.w3school.com.cn/html5/html_5_webstorage.asp)

#####e.应用缓存
给我最大的印象是，就算没网，也能打开之前的网站了！！！特别适用于离线应用，比如chm类型的网站o(≧v≦)o~~。<br>
[--> w3school资料](http://www.w3school.com.cn/html5/html_5_app_cache.asp)

#####f.服务器发送事件
用于替代ajax轮询，大大减轻了服务器的压力。<br>
[--> 戳戳戳](http://www.w3school.com.cn/html5/html_5_serversentevents.asp)

#####g.webWorker
开启新的线程执行js文件，并提供信息传输的API。有效解决js单线程阻塞的问题。<br>
[--> 这真的是最后一份w3school资料了-_-!](http://www.w3school.com.cn/html5/html_5_webworkers.asp)


#####h.草案
1. **全屏**：js开启浏览器全屏显示，常用于网页游戏中；
2. **桌面通知**：微信网页版中有使用，用于通知用户新消息；
3. **链接预加载**：类似于预加载img，现在整个网页也可以预加载了；
4. **webSocket**：socket协议，特点是全双工通信，快快快！!!将在html5.1中成为标准；
5. **本地数据库**：Web SQL Database已经被抛弃了o(︶︿︶)o，取而代之的是IndexDB，一种非关系型的数据库。相比localStorage的存储限制，本地数据库应该大得多； 
6. **Device API**：最强大，也是支持度最参差不齐的部分-_-！但里面的js调用摄像头貌似支持度不错了，其他部分的还是作为了解吧，指不定哪天就被阉割了(+﹏+)~；

开启传送大法o(≧v≦)o~~，前方高能！！<br>
[--> 全屏](http://itindex.net/detail/49770-html5-js-浏览器)<br>
[--> 桌面通知](http://www.cnblogs.com/lxshanye/p/3560188.html)<br>
[--> 链接预加载 <br>](http://blog.csdn.net/renfufei/article/details/9946183)
[--> webSocket <br>](http://www.cnblogs.com/wei2yi/archive/2011/03/23/1992830.html)
[--> web SQL Database（已经被抛弃的娃儿）](http://www.cnblogs.com/dolphinX/p/3405335.html)<br>
[--> IndexDB](http://bbs.9ria.com/thread-241664-1-1.html) <br>
[--> Device API](http://blog.csdn.net/hfahe/article/details/7338032) <br>
[--> js调用摄像头一（注意要部署的本地服务器上测试）](http://www.silverlightchina.net/html/HTML_5/study/2012/0606/16525.html) <br>
[--> js调用摄像头二（里面有在线演示，可下载源码）](http://www.guokr.com/post/407262/)<br>
[--> 电池、震动等API](http://cube.qq.com/?p=426)<br>
[--> Sensor API](http://www.cnblogs.com/jiahuix/p/4590497.html) <br>
[--> 其他Device API](https://www.baidu.com/s?wd=html5%20device%20api&rsv_spt=1&issp=1&f=3&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&inputT=9501&rsv_pq=d8c1a5300000bbcd&rsv_t=b3b5KsOs5RolKBv3jLcobG7y%2FuWz0fWPTJDGKe7q7F6orpuk22gNr5HOYUyrdBvEmFwB&oq=html5%20Device&rsv_sug3=78&rsv_sug1=58&rsv_sug2=0&rsp=1&rsv_sug4=9563)


<br><br>
###如有错误，请指正~>_<~
###如有遗漏，请补充~>_<~