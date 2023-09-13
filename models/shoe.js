const mongoose = require('mongoose');

// Ensure that the Category model is loaded in Mongoose
require('./brand');

// We want to re-use the itemSchema
const shoeSchema = require('./shoeSchema');

module.exports = mongoose.model('Shoe', shoeSchema);