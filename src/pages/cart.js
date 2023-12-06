import useSWR from "swr";

export default function Cart() {
  const { data, error, isLoading } = useSWR("/api/cart");

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  if (!data || data.length === 0) {
    return <p>No products available</p>;
  }
  return (
    <ul>
      {data.map((item) => (
        <li key={item._id}>{item.product}</li>
      ))}
    </ul>
  );
}
