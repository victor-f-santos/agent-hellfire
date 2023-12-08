import Link from "next/link";
import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Cart() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR("/api/cart");

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;
  console.log("data: ", data);

  const totalOneProduct = data.map((item) => {
    return item.quantity * item.product.price;
  });
  console.log("totalOneProduct: ", totalOneProduct);

  const totalSum = totalOneProduct.reduce((a, b) => a + b);

  async function deleteProduct(item) {
    const response = await fetch(`/api/cart/product/${item}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      return;
    }
    router.push("/");
  }

  if (!data || data.length === 0) {
    return (
      <p>
        Your cart is empty. Dont be such a cheap fuck and{" "}
        <Link href={"/shop"}>buy our shit!</Link> We got good prices and great
        quality!
      </p>
    );
  }

  return (
    <>
      <h1>Cart</h1>
      <ul>
        {data.map((item) => (
          <>
            <li key={item.product._id}>
              {item.product.name}
              <br />
              {item.size}
              {item.product.price}€
              <br />
              <Image
                src={item.product.images[0]}
                alt={item.product.name}
                width={100}
                height={100}
              />
              <br />
              {item.product.description}
              <br />
              <button
                onClick={() => deleteProduct(item.product._id)}
                type="button"
              >
                Delete
              </button>
              <br />
              <br />
            </li>
          </>
        ))}
      </ul>
      <h2>Total: {totalSum}</h2>
      <button onClick={() => router.push("/shop")}>
        Spend mo' money on us!
      </button>
    </>
  );
}
