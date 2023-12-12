import Link from "next/link";
import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Cart() {
  const router = useRouter();
  const { data, mutate, error, isLoading } = useSWR("/api/cart");
  const [totalSum, setTotalSum] = useState(null);
  useEffect(() => {
    const totalOneProduct = data?.map((item) => {
      return item.quantity * item.product.price;
    });
    console.log("totalOneProduct: ", totalOneProduct);
    if (!totalOneProduct || totalOneProduct.length > 0) {
      setTotalSum(totalOneProduct?.reduce((a, b) => a + b));
    }
  }, [data]);

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;
  console.log("data: ", data);

  async function deleteProduct(item) {
    const response = await fetch(`/api/cart/${item}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      return;
    }
    mutate();
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
            <li className="product" key={item.product._id}>
              {item.product.name}
              <br />
              <p>Quantity: {item.quantity}</p>
              <br />
              <p> Size: {item.size}</p>
              <br />
              <p>Price: {item.product.price}€</p>
              <br />
              <Image
                className="images--shop"
                src={item.product.images[0]}
                alt={item.product.name}
                width={300}
                height={300}
              />
              <br />
              <p>{item.product.description}</p>
              <br />
              <button onClick={() => deleteProduct(item._id)} type="button">
                Delete
              </button>
              <br />
              <br />
            </li>
          </>
        ))}
      </ul>
      <h2>Total: {totalSum} €</h2>
      <button onClick={() => router.push("/shop")}>Give us more money!</button>
    </>
  );
}
