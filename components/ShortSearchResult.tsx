'use client';

import { useSearchParams } from 'next/navigation';

const ShortSearchResult = () => {
  const searchParams = useSearchParams();

  const q = searchParams.get('q');

  // const res = await fetch(
  //   `${process.env.FAKE_STORE_API_URL}/products/${q}`,
  // );

  // const products = await res.json();

  return <div>ShortSearchResult</div>;
};

export default ShortSearchResult;
