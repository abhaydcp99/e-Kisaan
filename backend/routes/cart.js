const express = require("express");
const Cart = require("../models/Cart");
const router = express.Router();

const DEMO_CART_ID = "demoCart123";
async function getDemoCart() {
  let cart = await Cart.findById(DEMO_CART_ID);
  if (!cart) {
    cart = new Cart({
      _id: DEMO_CART_ID,
      items: [],
    });
    await cart.save();
  }
  return cart;
}

router.get("/", async (req, res) => {
  try {
    const cart = await getDemoCart();
    res.json(cart);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.post("/", async (req, res) => {
  const { productId, qty } = req.body;

  if (!productId || qty == null) {
    return res.status(400).json({ msg: "productId and qty are required" });
  }

  try {
    const cart = await getDemoCart();

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId
    );
    if (qty > 0) {
      cart.items.push({ product: productId, qty });
    }
    await cart.save();
    res.json(cart);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
