import dbConnect from "../../../../db/connect";
import Product from "../../../../db/models/Product";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const products = await Product.find();
    return res.status(200).json(products);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
