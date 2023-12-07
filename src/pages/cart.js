import Link from "next/link";
import useSWR from "swr";

export default function Cart() {
  const { data, error, isLoading } = useSWR("/api/cart");

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;
  console.log("data: ", data);
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
          <li key={item.product._id}>
            {item.product.name}
            <br />
            {/* {item.product.size} */}
            {item.product.price}€
            <br />
            {item.product.images[0]}
            <br />
            {item.product.description}
            <br />
            <br />
            <br />
          </li>
        ))}
      </ul>
    </>
  );
}
