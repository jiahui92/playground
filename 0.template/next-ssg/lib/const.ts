// TODO 使用以下网站生成，并在public下创建txt
// https://www.bing.com/indexnow/getstarted
export const indexNowKey = '';

export function getSiteInfo() {
  const name = 'yoursite name';
  const baseUrl = 'https://yoursite.com';
  return {
    name, // 50 words
    description: `desc`, // 150 words
    keywords: `${name},k1,k2`, // useless seo
    url: baseUrl,
    favicon: `/favicon.ico`,
  }
}
