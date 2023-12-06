import Cart from "../../../../db/models/Cart";
import dbConnect from "../../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const products = await Cart.find();
    console.log("=============================", products);
    return response.status(200).json(products);
  }
  if (request.method === "POST") {
    console.log("request.body: ", request.body);
    await Cart.create(request.body);
    return response
      .status(200)
      .json({ success: true, status: "Added to cart" });
  }
}
