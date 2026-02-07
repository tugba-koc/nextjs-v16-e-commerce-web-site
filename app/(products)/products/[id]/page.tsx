import getProduct from '@/lib/getProduct';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const product = await getProduct(id);

  return {
    title: product.title,
    description: 'detail product',
    openGraph: {
      images: ['/some-specific-page-image.jpg'],
    },
  };
}

const ProductDetailPage = () => {
  return <div>page</div>;
};

export default ProductDetailPage;
