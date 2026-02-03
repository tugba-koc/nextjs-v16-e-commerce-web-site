export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: ProductRateType;
}

interface ProductRateType {
  rate: number;
  count: number;
}
