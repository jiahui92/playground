import Head from "next/head";
import {  getSiteInfo } from '@/lib/const';
import { GetStaticPropsResult } from 'next';
import { getBaseJsonLd } from '@/pages/_app';

const mockData = [
  { id: '1', title: 'test1' },
  { id: '2', title: 'test2' },
  { id: '3', title: 'test3' },
  { id: '4', title: 'test4' },
  { id: '5', title: 'test5' },
];
type MockData = typeof mockData[number];

export default function Index({ id }: MockData) {
  return (
    <>
      pageId: {id}
    </>
  );
}

Index.getLayout = (Component: React.ComponentType<any>, props: MockData) => {
  const { name } = getSiteInfo();
  const title = `${props.title} - ${name}`; // better 50 words
  const desc = ``; // 150 words
  const keywords = `k1,k2,k3`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
        {getOpenGraph(props)}
        {getBaseJsonLd()}
        {getJsonLd(props)}
      </Head>
      <Component {...props} />
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: mockData.map(m => ({ params: { id: m.id } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const props = mockData.find(t => t.id === params.id);
  return {
    props,
  } as GetStaticPropsResult<any>
}

function getOpenGraph(data: any) {
  const { name, url } = getSiteInfo();
  return <>
    <meta property="og:title" content={data.title + ' - ' + name} />
    <meta property="og:description" content={data.desc?.slice(0, 100) + '...'} />
    <meta property="og:image" content={`// TODO img.url`} />
    <meta property="og:site_name" content={name} />
    <meta property="og:url" content={`${url}/detail/${data.id}`} />
    <meta property="og:type" content={'// TODO'} />
  </>
}

function getJsonLd(data: any) {
  const { url } = getSiteInfo();
  // https://schema.org/Movie
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Movie",
    url: `${url}/detail/${data.id}`,
    name: data.title,
    alternateName: data.titles?.join(','),
    image: `// TODO img.url`,
    // description: data.desc.slice(0, 100),
    // datePublished: data.year,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: data.rate,
      ratingCount: data.rateCount,
      worstRating: 0,
      bestRating: 10,
    },
    countryOfOrigin: {
      name: data.countries?.join(','),
    },
  }
  const jsonStr = JSON.stringify(jsonLd, null);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: jsonStr}}></script>
}
