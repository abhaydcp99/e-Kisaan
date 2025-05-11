
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    trim: true
  },
  userType: {
    type: String,
    enum: ['customer', 'farmer', 'producer', 'admin'],
    default: 'customer'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Export the model so you can require('models/User') elsewhere
module.exports = mongoose.model('User', UserSchema);
