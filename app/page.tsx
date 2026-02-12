import ShortSearchResult from "@/components/ShortSearchResult";
import type { HomeType, ProductType } from "@/interfaces";
import ProductCard from "@/shared/ProductCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Tgb.com",
  description: "Find the best product in the world",
  keywords: ["t-shirt", "mom", "dad", "travel"],
  openGraph: {
    title: "best product in the world",
    description: "find the best match what you are looking for",
    siteName: "tgb.com",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "",
        width: 100,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "product",
    description: "",
    creator: "tgb",
    images: ["https://example.com/seo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default async function Home({ searchParams }: HomeType) {
  const res = await fetch(`${process.env.FAKE_STORE_API_URL}/products`);
  const products: ProductType[] = await res.json();

  const query = await searchParams;

  const q = query?.q;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-4">
      {!q &&
        [...products]
          .slice(0, 10)
          .map((product: ProductType) => (
            <ProductCard key={product.id} {...product} />
          ))}

      {q && <ShortSearchResult q={q} />}
    </div>
  );
}
