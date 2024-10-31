import { getSiteInfo, indexNowKey } from "../lib/const";
// xml在线测试: https://github.com/NaturalIntelligence/fast-xml-parser
import { XMLParser, XMLBuilder, XMLValidator} from 'fast-xml-parser';
import * as fs from 'fs';
import path from "path";
import axios from 'axios';

// TODO 本地根据生成的文件对比hash，对缓存中的hash值进行对比是否更新了文件以及更新频率权重之类的计算
interface XmlUrl {
  loc: string;
  lastmod: string; // string Date
  changeFreq: string;
  priority: number;
}

// Configuration
const host = getSiteInfo().url;
const key = indexNowKey;
const keyLocation = `${host}/${key}.txt`;

const modifiedSinceDate = new Date(process.argv[2] || '1970-01-01');

if (isNaN(modifiedSinceDate.getTime())) {
  console.error('Invalid date provided. Please use format YYYY-MM-DD');
  process.exit(1);
}

const parser = new XMLParser();
const builder = new XMLBuilder();

function getSitemapPath(index: number) {
  return path.resolve(path.dirname(''), `./out/sitemap-${index}.xml`);
}

function getXmlUrlList() {
  const xmlUrlList: XmlUrl[] = [];
  let i = 0;
  // TODO 改成从sitemap.xml读取文件，区分两种模式，兼容所有sitemap
  while (fs.existsSync(getSitemapPath(i))) {
    console.log('reading sitemap: ', getSitemapPath(i))
    const xmlData = fs.readFileSync(getSitemapPath(i));
    const data = parser.parse(xmlData);
    xmlUrlList.push(...(data?.urlset?.url || []));
    i++;
  }
  return xmlUrlList;
}


function filterUrlsByDate(xmlUrlList: XmlUrl[], date: Date) {
  return xmlUrlList
    .filter(url => new Date(url.lastmod) > date)
    .map(url => url.loc);
}

async function fetchIndexNow(urlList: string[]) {
  try {
    // https://www.bing.com/indexnow/getstarted#
    const res = await axios.post('https://api.indexnow.org/indexnow', {
      host,
      key,
      keyLocation,
      // urlList: urlList.slice(0, 1),
      urlList,
    })
    console.log(res.status, res.data);
  } catch(e: any) {
    console.error(e);
    console.error(e?.message);
  }
}

async function main() {
  console.log(`ready push urls where date > ${modifiedSinceDate.toISOString()}`)
  try {
    const xmlUrlList = getXmlUrlList();
    const urlList = filterUrlsByDate(xmlUrlList, modifiedSinceDate);
    console.log('ready to push after 5s: ', urlList.length);
    setTimeout(async () => {
      await fetchIndexNow(urlList);
    }, 5000)
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
