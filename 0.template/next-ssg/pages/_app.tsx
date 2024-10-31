/* eslint-disable @next/next/no-sync-scripts */
import './globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google';
import { NextUIProvider } from "@nextui-org/react";
import { getSiteInfo } from '@/lib/const';

function getCommonLayout(Component: React.ComponentType<any>, pageProps: any) {
  const { name, description, keywords } = getSiteInfo();
  return (
    <>
      <Head>
        <title>{`${name} - xxx`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {getOpenGraph()}
        {getBaseJsonLd()}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = (Component as any).getLayout ?? getCommonLayout;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {getExternalLink()}
      </Head>
      <NextUIProvider>
        <div className="container mx-auto">
          {getLayout(Component, pageProps)}
        </div>
      </NextUIProvider>
      <GoogleAnalytics gaId="// TODO" />
    </>
  )
}

export default MyApp;

function getOpenGraph() {
  const { name, description, url, favicon } = getSiteInfo();
  return <>
    <meta property="og:title" content={name} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={favicon} />
    <meta property="og:site_name" content={name} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={'// TODO'} />
    {/* <meta http-equiv='content-language' content='zh-CN' /> */}
  </>
}

export function getBaseJsonLd() {
  // https://schema.org/WebPage
  const { name, description, keywords, url, favicon } = getSiteInfo();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url,
    image: favicon,
    description,
    keywords,
    // breadcrumb:
  }
  const jsonStr = JSON.stringify(jsonLd, null);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: jsonStr}}></script>
}

function getExternalLink() {
  return (
    <>
      <script defer src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
      <script defer src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
    </>
  )
}

// 处理next_data
// https://github.com/vercel/next.js/issues/40143
// import { NextScript } from "next/document";
// // eslint-disable-next-line @typescript-eslint/unbound-method
// const nextInlineScriptSource = NextScript.getInlineScriptSource;
// NextScript.getInlineScriptSource = (props) => {
//     const value = nextInlineScriptSource(props);
//     // return Buffer.from(value).toString("base64");
//     return value;
// };
