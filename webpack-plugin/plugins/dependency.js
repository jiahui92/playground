// 获取 dependencies list
// 根据 dependencies list 获取 文件大小

const path = require('path');

class DependencyPlugin {
  constructor(options) {
    // this.options = options;
  }

  apply(compiler) {

    const projectDir = compiler.context;
    const dependencies = []; // 项目的npm依赖

    compiler.hooks.compilation.tap('DependencyPlugin', compilation => {
      compilation.hooks.finishModules.tap('DependencyPlugin', modules => {
        modules.forEach(t => {
          // console.log('request', t.request) // loaders/vue.js??ref--7-0!/src/my.vue
          // console.log('resource', t.resource); // /src/my.vue

          const dp = [];
          t.dependencies.forEach(d => {
            if (d.request) {
              const p = path.resolve(t.context, d.request.replace('!!', '')); // 计算绝对路径
              dp.push(p.replace(projectDir, '')); // 计算相对项目的路径
            }
          })
          // console.log(dp);

          dependencies.push({
            url: t.resource.replace(projectDir, ''),
            dependencies: dp
          });

        })
      })
    })

    compiler.hooks.done.tap('DependencyPlugin', () => {
      debugger;
      // console.log(dependencies); // 到这里为止，获取到项目所有的依赖了
      // 
      /**
       [{
         url: '/src/index.js',
         dependencies: ['/src/index.less', ...],
        }, ...]
       */


       // 其实可以使用 `./node_modules/.bin/webpack --profile --json > stats.json`
       // 来输出更详细的信息，包括项目依赖，每个依赖打包后的大小之类的
       // 然后在这个网站上可视化分析 http://webpack.github.io/analyse/
       // 或者使用插件:
       // https://github.com/zouhir/jarvis
       // https://github.com/webpack-contrib/webpack-bundle-analyzer
    })


    
    // compiler.hooks.normalModuleFactory.tap('DependencyPlugin', normalModuleFactory => {

    //   normalModuleFactory.hooks.parser
    //     .for("javascript/auto")
    //     .tap('DependencyPlugin', parser => {
    //       parser.hooks.import.tap("DependencyPlugin", (statement, source) => {
    //         console.log(source);
    //       });
    //     })

    // })

    

  }
}

module.exports = DependencyPlugin;