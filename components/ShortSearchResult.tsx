import { ProductType, SearchParams } from '@/interfaces';

const ShortSearchResult = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const params = await searchParams;

  const searchQuery = typeof params.q === 'string' ? params.q : '';

  const queryParams = new URLSearchParams();

  console.log('queryParams', queryParams);
  if (searchQuery) {
    queryParams.append('q', searchQuery);
  }

  const res = await fetch(
    `${process.env.FAKE_STORE_API_URL}/products?${queryParams.toString()}`,
  );

  const products = await res.json();

  return <div>ShortSearchResult</div>;
};

export default ShortSearchResult;
