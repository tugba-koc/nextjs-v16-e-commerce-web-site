export default async function getProduct(id: string) {
  const response = await fetch(
    `${process.env.FAKE_STORE_API_URL}/products/${id}`,
  );
  return await response.json();
}
