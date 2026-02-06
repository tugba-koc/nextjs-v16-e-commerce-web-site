import { ProductType } from '@/interfaces';
import ProductCard from '@/shared/ProductCard';

export default async function Home() {
  const res = await fetch(`${process.env.FAKE_STORE_API_URL}/products`);
  const products = await res.json();

  return (
    <div className='grid grid-cols-2 gap-4'>
      {[...products].slice(0, 10).map((product: ProductType) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
