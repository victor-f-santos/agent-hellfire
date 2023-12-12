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

  const [selectedSize, setSelectedSize] = useState("");
  console.log({ selectedSize });
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  async function handleAddToCart(item, quantity, selectedSize) {
    const response = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product: item,
        quantity: quantity,
        size: selectedSize,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      await response.json();
      setIsAddedToCart(true);
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;
  if (data) {
    const { name, price, description, images, quantity } = data;
    console.log(quantity);
    const isButtonDisabled = selectedQuantity < 1;

    return (
      <div className="product">
        <h1>Product Details</h1>
        <p>{name}</p>
        {images.map((image) => (
          <Image
            className="images--shop"
            key={image}
            src={image}
            alt={name}
            width={300}
            height={300}
          />
        ))}
        <p> {price} €</p>

        {typeof quantity === "object" && (
          <>
            <label for="size">Size:</label>
            <select
              id="size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="not chosen">---Choose your size---</option>
              {Object.keys(quantity).map((size) => {
                const disabled = !quantity[size] ? "disabled" : null;
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
            {Array.from(
              { length: quantity[selectedSize] ?? quantity },
              (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              )
            )}
          </select>
        </label>
        <p> {description}</p>
        <button
          onClick={() =>
            handleAddToCart(productId, selectedQuantity, selectedSize)
          }
          disabled={isButtonDisabled}
        >
          Add to Cart
        </button>
        {isAddedToCart && <p>Item added to cart!</p>}
        <button onClick={() => router.push("/shop")}>Keep shopping</button>
        <button onClick={() => router.push("/cart")}>
          <Image
            src={"/img/shop/cart.png"}
            width={50}
            height={50}
            alt="Shop cart button"
          />
        </button>
      </div>
    );
  }
}
