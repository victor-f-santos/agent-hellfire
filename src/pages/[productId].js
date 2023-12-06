import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import { useState } from "react";

export default function ProductDetails() {
  const router = useRouter();
  const { productId } = router.query;

  const { data, error, isLoading } = useSWR(
    productId ? `/api/products/${productId}` : null
  );

  const [selectedQuantity, setSelectedQuantity] = useState(null);
  async function handleAddToCart(item, quantity) {
    const response = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ product: item, quantity: quantity }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;
  if (data) {
    const { name, price, description, images, sizes } = data;

    const isButtonDisabled = selectedQuantity < 1;

    return (
      <div>
        <h1>Product Details</h1>
        <p>{name}</p>
        {images.map((image) => (
          <Image key={image} src={image} alt={name} width={100} height={100} />
        ))}
        <p> {price} €</p>

        {sizes && (
          <>
            <label for="size">Size:</label>
            <select id="size">
              {Object.keys(sizes).map((size) => {
                const disabled = !sizes[size] ? "disabled" : null;
                return (
                  <option key={size} value={size} disabled={disabled}>
                    {size}
                  </option>
                );
              })}
            </select>
          </>
        )}

        <p>Quantity:</p>
        <label for="dropdown">
          <select
            name="quantity"
            id="dropdown"
            value={selectedQuantity}
            onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <p> {description}</p>
        <button
          onClick={() => handleAddToCart(productId, selectedQuantity)}
          disabled={isButtonDisabled}
        >
          Add to Cart
        </button>
        <button onClick={() => router.push("/shop")}>Keep shopping</button>
      </div>
    );
  }
}
