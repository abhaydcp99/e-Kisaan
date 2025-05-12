const express = require("express");
const auth = require("../middleware/auth");
const Cart = require("../models/Cart");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user.id }).populate(
      "items.product",
      "name price imageUrl"
    );
    if (!cart) return res.json({ items: [] });
    res.json(cart);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.post("/", auth, async (req, res) => {
  const { productId, qty } = req.body;
  if (!productId || qty == null) {
    return res.status(400).json({ msg: "productId and qty are required" });
  }
  try {
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [] });
    }
    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId
    );
    if (qty > 0) {
      cart.items.push({ product: productId, qty });
    }
    await cart.save();
    cart = await cart.populate("items.product", "name price imageUrl");
    res.json(cart);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
