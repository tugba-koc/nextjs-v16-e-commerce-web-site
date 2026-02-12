import ProductCard from "@/shared/ProductCard";

type ShortSearchResultType = {
  q?: string;
};

export default async function ShortSearchResult({ q }: ShortSearchResultType) {
  const res = await fetch(`${process.env.FAKE_STORE_API_URL}/products/${q}`);
  const product = (await res.json()) || {};

  return <ProductCard key={product.id} {...product} />;
}
