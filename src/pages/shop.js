import Link from "next/link";
import useSWR from "swr";
import Image from "next/image";

export default function Shop() {
  const { data, error, isLoading } = useSWR("/api/products");

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  if (!data || data.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <>
      <h1 id="shop">Merch</h1>
      <div className="product-list">
        {data.map((product) => (
          <div key={product._id} className="product">
            <Link href={`${product._id}`}>
              <h2>{product.name}</h2>
              {product.images.map((image) => (
                <Image
                  key={image}
                  src={image}
                  alt={product.name}
                  width={100}
                  height={100}
                />
              ))}
            </Link>
            <p>Price: {product.price} €</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
