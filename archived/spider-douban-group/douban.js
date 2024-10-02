const request = require('superagent');
const cheerio = require('cheerio');
const Koa = require('koa');
const app = new Koa();

const blackList = [
  '闲林', '建国', '萧山', '上沙', '下沙', '下城', '上城', '武林', '江干', '科技城', '北山', '古翠', '钱江', '滨江', '五常', '余杭', '拱墅', '龙湖', '江南国际', '教工路', '黄龙', '环北', '三墩', '桔子里', '高教路', '申花', // 地区
  '银泰', '万达', '万科', '公寓', '印象城', '科技园', '体育场', '软件园', '浙大', '梦想小镇', '华星时代', '海创园', '融创', '汽车北站', '矩阵国际', '文化广场', '和平广场', '软件园', '宋城', // 地标
  '新世纪花苑', '圣苑', '世纪新城', '云溪香山', '西溪北苑', '临江', '万家花城', '南都花园', '翠苑', '枫华府第', '紫金文苑', '西溪水岸', '百大', '景芳', '九莲', '庆隆', '佳丰', '泊岸', '西溪花园', '三宝郡庭', // 小区
  '求租', '已租', '号线', '学院', '地铁', '大学', '海量', '房源', '火车', '近阿里', '阿里附近', '市区', '阿里', '网易', '华为', '支付宝大', '滨', '奥', // 其他
  // '室友', '整租', '合租', // 合租过滤
];
const importantList = ['嘉绿景苑', '文化新村', '皇朝花园', '蒋村', '山水人家', '香港城', '古墩路', '莲花街', '浙商财富', '康乐新村', '城市心境', '蘑菇街', '新安嘉苑', '西城', '古荡', '康新', '益乐', '金都', '莲花', '康乐新村', '西荡', '亚洲城花园', '骆家庄'];

let result = [];
const list = [];
const arr = [];
// const doubanUrl = 'http://www.douban.com/group/145219/discussion?start='; // 杭州租房中介免入
const doubanUrl = 'http://www.douban.com/group/560075/discussion?start='; // 西湖区租房

let timer = null;
let page = 0;
let maxPage = 50;

timer = setInterval(() => {

  if (page === maxPage) {
    clearInterval(timer);
    return;
  }

  console.log(`${page + 1} / ${maxPage}`);

  request
    .get(doubanUrl + page * 25)
    .set('Host', 'www.douban.com')
    .set('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36')
    .then(res => {
      const $ = cheerio.load(res.text);
      const domList = $('table.olt .title a') || [];
      domList.each((i, item) => {
        const title = $(item).attr('title');

        const fn = val => title.indexOf(val) !== -1;
        // 重点关注
        let isImportant = importantList.some(fn);
        // 过滤
        if (!blackList.some(fn)) {
          list.push({
            isImportant,
            title,
            link: $(item).attr('href')
          });
        }
      });
    });

  page++;

}, 1000);

// response
app.use(ctx => {

  list.sort((a, b) => a.isImportant > b.isImportant ? -1 : 1);

  result = `
    <style>
      a {
        margin-bottom: 5px;
        font-size: 14px;
      }
      a:visited {
        color: grey !important;
      }
      .important {
        color: #ff5777;
      }
    </style>
    <div>${list.length}</div>
  `;

  result += list.map(item => `
    <a class="${item.isImportant ? 'important' : ''}" href="${item.link}" target="_blank">${item.title}</a>
  `).join('<br/>');

  ctx.body = result;
});

app.listen(3000);
