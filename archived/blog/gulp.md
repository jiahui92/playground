##前端自动构建工具Gulp入门
>基于nodeJs；通过不同插件能自动完成一系列动作，比如压缩js/css/img、解析模版标签、解析less等；

###一、安装gulp
1. [安装nodeJs](http://jingyan.baidu.com/article/a948d6515d4c850a2dcd2e18.html)
2. 打开Node.js command prompt<br>
![](http://i.imgur.com/4nwVu9p.png)
3. 输入`npm install gulp -g`全局安装gulp
4. 在C盘根目录创建gulpTest文件夹
5. 在命令行使用`cd c:/gulpTest`进入该文件夹
6. 在该文件夹内创建文件package.json(后面会提及该文件作用)，并输入`{"name":"projectName"}`，保存文件
7. 下面开始输入命令局部安装gulp，并写入package.json：`npm install gulp --save-dev`
8. 安装完毕后，可以看到package.json中已经添加了依赖<br>![](http://i.imgur.com/0DIKmhU.png)<br>
经过以上步骤，已经在项目中安装了gulp


###二、使用gulp插件压缩css
1. 输入`npm install gulp-minify --save-dev`
2. 在项目根目录（c:/gulpTest/）创建gulpfile.js，输入以下代码并保存<br>
        var gulp = require('gulp'),
	minifycss = require('gulp-minify-css');
    
    	    gulp.task('minifycss', function() {
    		return gulp.src('src/css/*.css') //设置要压缩的文件
    			.pipe(minifycss()) //执行压缩
    			.pipe(gulp.dest('dest/css')); //输出到文件夹
    			
    	});
    	
    	gulp.task('default',function(){ //设置默认任务
    		gulp.start('minifycss');
    	})
    	
    	gulp.watch('src/css/*.css', ['minifycss']);
3. 在项目根目录创建文件src/css/index.css,随意输入一些css<br>
	![](http://i.imgur.com/EF5Q3wh.png)
4. 在命令行输入`gulp`，即开始执行压缩，可以看到文件目录自动生成了压缩好的css文件dest/css/index.css；因为添加了watch，所以当文件发生改变时，gulp会自动压缩css。

###三、gulp其他资料
>
1. [API说明](http://gulps.net/doc/api)
2. [常用插件](http://www.cnblogs.com/2050/p/4198792.html#part4)
3. [Gulp相对于Grunt的优势](http://blog.jobbole.com/81007/)
4. [package.json的作用](https://cnodejs.org/topic/51d4e222d44cbfa30469baad)