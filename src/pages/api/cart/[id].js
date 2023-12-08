import Cart from "../../../../db/models/Cart";
import dbConnect from "../../../../db/connect";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();
  if (request.method === "DELETE") {
    console.log("id: ", id);
    await Cart.findByIdAndDelete(id);
    return response.status(200).json({ status: "Product deleted" });
  }
}
