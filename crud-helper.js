require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Shoe = require('./models/shoe');
const Brand = require('./models/brand');
const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, shoe, brand, order;
let users, shoes, brands, orders;
