const Order = require('../../models/order');
const Shoes = require('../../models/shoe');

module.exports = {
  cart,
  addCart,
  setShoeQuantity,
  checkout,
  forUser
};

async function forUser(req, res) {
  const orders = await Order.find({user: req.user._id, isPaid: true}).sort('-updatedAt');
  res.json(orders);
}

async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

async function addCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addShoeCart(req.params.id);
  res.json(cart);
}

async function setShoeQuantity(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setShoeQuantity(req.body.shoeId, req.body.newQuantity);
  res.json(cart);
}
