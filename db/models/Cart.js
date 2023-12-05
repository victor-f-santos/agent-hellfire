import mongoose from "mongoose";

const { Schema } = mongoose;

const cartSchema = new Schema({
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
