import type { ProductType } from '@/interfaces';
import ProductCard from '@/shared/ProductCard';

export default async function Home() {
  const res = await fetch(`${process.env.FAKE_STORE_API_URL}/products`);
  const products: ProductType[] = await res.json();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-4'>
      {[...products].slice(0, 10).map((product: ProductType) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
