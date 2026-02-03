import ProductCard from '@/shared/ProductCard';

export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return (
    <div className=''>
      {products.slice(0, 10).map((product: any) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
