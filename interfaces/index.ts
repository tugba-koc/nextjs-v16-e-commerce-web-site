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
