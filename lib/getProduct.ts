interface Post {
  id: string;
  title: string;
  content: string;
}

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

export async function generateStaticParams() {
  const posts: Post[] = await fetch("https://api.vercel.app/blog").then((res) =>
    res.json(),
  );
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function getProduct(id: string) {
  const response = await fetch(
    `${process.env.FAKE_STORE_API_URL}/products/${id}`,
    {
      cache: "no-store",
    },
  );
  return await response.json();
}
