const { getOptions } = require('loader-utils');

module.exports = function (source) {
  const options = getOptions(this);

  const stack = [{
    tagName: 'root',
    children: [],
  }];

  parseHtml(source, {
    // 处理开始标签
    onStartTag (tagName, props) {
      const parent = stack[stack.length - 1];
      const tagObj = {
        tagName,
        props,
        parent,
        children: [],
      };

      parent.children.push(tagObj);
      stack.push(tagObj);
    },

    // 处理结束标签
    onEndTag () {
      const tagObj = stack.pop();
      tagObj
    },

    // 处理标签中间的text，暂不考虑存在变量{{var}}的情况
    onText (text) {
      const tagObj = stack[stack.length - 1];
      if (tagObj) {
        tagObj.children.push({
          tagName: 'text',
          text,
        });
      }
    }
  })


  const code = generate(stack[0]);
  // console.log(options);
  // console.log(source);
  // console.log(code);
  return code;

  // const callback = this.async();
  // return callback(code);
}


// 将html字符串解析成对象
function parseHtml (html, options) {

  options = {
    onStartTag () {},
    onEndTag () {},
    onText () {},
    ...options,
  }

  // var ncname = '[a-zA-Z_][\\w\\-\\.]*';
  // var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
  // var startTagOpen = new RegExp('^<' + qnameCapture);
  // var startTagClose = /^\s*(\/?)>/;
  // var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');

  const tagNameCapture = '[a-zA-Z_]\\w*'; // 不考虑带"."的tagName
  // const startTagReg = new RegExp(`^<${tagNameCapture}`);
  const endTagReg = new RegExp(`^<\\/${tagNameCapture}>`);


  while (html) {

    // 不是'<'开头的话，就表示从text开始处理
    if (/^</.test(html)) {

      /** 开始处理结束标签 **/
      const endTagRes = html.match(endTagReg);
      if (endTagRes) {
        advance(endTagRes[0].length + 1);
        options.onEndTag();
        continue;
      }

      /** 开始处理新标签 **/
      const temp = html.match(new RegExp(tagNameCapture));
      const tagName = temp ? temp[0] : '';
      const props = {};

      /** 开始处理新标签的属性 **/
      // 匹配属性和赋值 <div someProp="xxx"> | 自闭合终止符'/>' | 终止符 '>'
      const propReg = /(([:@]?[\w\-]+)="([^"]*)")|(\/>)|>/g;

      let res;
      let isSelfClosing = false; // 是否为自闭合标签
      while ((res = propReg.exec(html)) !== null) {

        if (res[0] === '/>') {
          advance(res.index + 2);
          isSelfClosing = true;
          break;
        }

        if (res[0] === '>') {
          advance(res.index + 1);
          break;
        }

        props[res[2]] = res[3];
      }

      options.onStartTag(tagName, props);
      if (isSelfClosing) {
        options.onEndTag();
      }

    } else {
      /** 开始处理 text等 children **/
      const res = html.match(/[^<]*/); // 暂不考虑 {{"<div"}}这种情况
      const text = res[0];
      advance(text.length);
      options.onText(text);
    }
  }

  function advance (len) {
    html = html.substring(len);
  }
}

// 将htmlObj解析成js代码
function generate (htmlObj) {

  function f (obj) {

    let propStr = '';
    for (let key in obj) {
      if (!/^tagName|parent|children$/.test(key)) {
        propStr += `
          ${key}: ${JSON.stringify(obj[key])},
        `
      }
    }

    let childrenStr = '';
    const children = (obj.children || []).map((t) => f(t));

    if (children.length) {
      childrenStr += `
        children: [${children}]
      `
    }

    return `
      createElement('${obj.tagName}', {
        ${propStr}
        ${childrenStr}
      })
    `;
  }

  return f(htmlObj);
}
