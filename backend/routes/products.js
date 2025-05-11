const express = require('express');
const Product = require('../models/Product');
const auth    = require('../middleware/auth');
const router  = express.Router();

// @route   POST /api/products
// @desc    Create a new product
// @access  Private (farmer/producer)
router.post('/', auth, async (req, res) => {
  try {
    const { name, description, price, category, imageUrl } = req.body;
    if (!name || !price || !category) {
      return res.status(400).json({ msg: 'Name, price & category required' });
    }
    const prod = await Product.create({
      name, description, price, category, imageUrl
    });
    res.json(prod);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// @route   GET /api/products
// @desc    List all products
// @access  Public
router.get('/', async (_req, res) => {
  const prods = await Product.find().populate('category', 'name');
  res.json(prods);
});

// @route   GET /api/products/:id
// @desc    Get single product
// @access  Public
router.get('/:id', async (req, res) => {
  const prod = await Product.findById(req.params.id).populate('category', 'name');
  if (!prod) return res.status(404).json({ msg: 'Product not found' });
  res.json(prod);
});

module.exports = router;
