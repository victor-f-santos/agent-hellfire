import useSWR from "swr";

export default async function Cart() {
  //   const { data, error, isLoading } = useSWR("/api/cart");

  //   if (error) return <p>failed to load</p>;
  //   if (isLoading) return <p>loading...</p>;
  //   console.log("data: ", data);
  //   if (!data || data.length === 0) {
  //     return <p>No products available</p>;
  //   }

  return <h1>hello</h1>;
  return (
    <ul>
      {/* {data.map((item) => (
        <li key={item._id}>{item.product}</li>
      ))} */}
    </ul>
  );
}
