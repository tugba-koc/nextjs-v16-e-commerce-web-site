"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ProductType } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

const ProductCard = (props: ProductType) => {
  const { id, title, description, price, image } = props;
  return (
    <Link href={`/products/${id}`}>
      <Card>
        <CardHeader className="flex flex-col items-center">
          <Image src={image} alt={title} width={120} height={120} />
          <CardDescription className="">
            {description.slice(0, 100)}...
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <p>{price} $</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
