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
        Your cart is empty. Go back to our <Link href={"/shop"}>shop.</Link>
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
      <button onClick={() => router.push("/shop")}>Keep shopping</button>
      <h2>Total: {totalSum} €</h2>
    </>
  );
}
