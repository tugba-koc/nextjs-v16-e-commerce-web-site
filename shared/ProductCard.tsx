'use client';

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { ProductType } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = (props: ProductType) => {
  const { id, title, description, price, image } = props;
  return (
    <Link href={`/products/${id}`}>
      <Card>
        <CardHeader>
          <Image src={image} alt={title} width={200} height={200} />
          <CardDescription className='m-96'>{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <p>{price} $</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
