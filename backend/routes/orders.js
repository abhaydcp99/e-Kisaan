const express = require("express");
const auth = require("../middleware/auth");
const Order = require("../models/Order");
const router = express.Router();

/**
 * @route   POST /api/orders
 * @desc    Place a new order
 * @body    { items: [{ product, qty }], total }
 * @access  Private
 */
router.post("/", auth, async (req, res) => {
  const { items, total } = req.body;
  if (!items || !items.length || total == null) {
    return res.status(400).json({ msg: "Items and total are required" });
  }
  try {
    const order = new Order({
      user: req.user.id,
      items,
      total,
    });
    await order.save();
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

/**
 * @route   GET /api/orders
 * @desc    Get current user’s orders
 * @access  Private
 */
router.get("/", auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .populate("items.product", "name price imageUrl")
      .sort("-date");
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
