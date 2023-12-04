import Link from "next/link";
import useSWR from "swr";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Shop() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);
  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;
  console.log(data);
  if (!data || data.length === 0) {
    return <p>No products available</p>;
  }
  return (
    <>
      <h1 id="shop">Merch</h1>
      <div className="product-list">
        {data.map((product) => (
          <div key={product._id} className="product">
            <h2>{product.name}</h2>
            {product.images.map((image) => {
              return (
                <Image
                  key={image}
                  src={image}
                  alt={product.name}
                  width={100}
                  height={100}
                />
              );
            })}

            <p>Price: {product.price} €</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
