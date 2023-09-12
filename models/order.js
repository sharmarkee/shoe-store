const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shoeSchema = require('./shoeSchema');


module.exports = mongoose.model('Order', orderSchema);

const shoeSchema = new Schema({
  qty: { type: Number, default: 1 },
  item: shoeSchema
}, {
  timestamps: true,
  toJSON: {virtuals: true}
});

shoeSchema.virtual('extPrice').get(function() {
  return this.qty * this.item.price;
});

const orderSchema = new Schema({
  // An order belongs to a user
  user: { type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true },
  
    shoeItems: [shoeSchema],

  isPaid: { type: Boolean, default: false },
}, {
  timestamps: true,

  toJSON: {virtuals: true}
});

orderSchema.virtual('orderTotal').get(function () {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function () {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual('orderId').get(function () {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = async function(userId) {
  return this.findOneAndUpdate(
    {user: userId, isPaid: false},
    {user: userId},
    {upsert: true, new: true}
    );
  };

  orderSchema.methods.addShoeCart = async function(shoeId) {
    const cart = this;
    const shoeItems = cary.shoeItems.find(sjhoeItem => shoeItem.item._id === shoeId);

    if (shoeItem) {
      shoeItems.qty += 1;
    } else {
      const Shoe = mongoose.model('Shoe');
      const shoe = await Shoe.findyBYID(shoeId);
      cart.shoeItems.push({item: shoe}); 
    }
    return cart.save();
  };

  orderSchema.methods.setShoeQuantity = async function(shoeId, newQuantity) {
    cart = this;
    const shoeItems = cart.shoeItems.find(shoeItems => shoeItems.shoe._id === shoeId);

    if (shoeItem && newQuantity <= 0) {
      await cart.removeShoe(shoeId);
    } else if (shoeItem) {
      shoeItem.quantity = newQuantity;
    }
    return cart.save();
  };

  module.exports = mongoose.model('Order', orderSchema);