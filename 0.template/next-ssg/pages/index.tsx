import {Link} from "@nextui-org/react";
import React from 'react';

interface Props {
  count: number;
}
export default function Index({ count }: Props) {
  return (
    <>
      <div>count: {count}</div>
      <Link href='/detail/1'>detail Page 1</Link>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      count: 4,
    } as Props,
  };
}
