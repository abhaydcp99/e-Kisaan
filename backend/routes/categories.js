// backend/routes/categories.js
const express  = require('express');
const Category = require('../models/Category');
const auth     = require('../middleware/auth');
const router   = express.Router();

// @route   POST /api/categories
// @desc    Create a new category
// @access  Private (admin/farmer)
router.post('/', auth, async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ msg: 'Name is required' });
    const exists = await Category.findOne({ name });
    if (exists) return res.status(400).json({ msg: 'Category exists' });
    const cat = await Category.create({ name });
    res.json(cat);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// @route   GET /api/categories
// @desc    List all categories
// @access  Public
router.get('/', async (_req, res) => {
  const cats = await Category.find().sort('name');
  res.json(cats);
});

module.exports = router;
