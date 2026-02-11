type ShortSearchResultType = {
  query: {
    q?: string;
  };
};

export default async function ShortSearchResult({
  query,
}: ShortSearchResultType) {
  const { q } = query;
  const res = await fetch(`${process.env.FAKE_STORE_API_URL}/products/${q}`);

  const products = await res.json();

  console.log("res", products);

  return <div>ShortSearchResult</div>;
}
