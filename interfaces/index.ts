export interface ProductType {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: ProductRateType;
}

interface ProductRateType {
  rate: number;
  count: number;
}

export interface HomeType {
  searchParams: Promise<{
    q?: string;
  }>;
}

export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;
