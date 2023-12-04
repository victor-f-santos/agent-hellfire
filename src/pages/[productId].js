import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductDetails() {
  const router = useRouter();
  const { productId } = router.query;
  const { data, error, isLoading } = useSWR(
    `/api/products/${productId}`,
    fetcher
  );
  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;
  if (!data || data.length === 0);
  console.log("data:", data);
  const { name, price, description, images, size } = data;
  return (
    <div>
      <h1>Product Details</h1>
      {name}
      {/* {images} */}
      {price}
      {size}
      {description}
    </div>
  );
}
