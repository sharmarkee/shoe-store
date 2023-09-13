const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shoeSchema = require('./shoeSchema');




const shoeItemSchema = new Schema({
  qty: { type: Number, default: 1 },
  shoe: shoeSchema
}, {
  toJSON: { virtuals: true }
});

shoeItemSchema.virtual('extPrice').get(function() {
  return this.qty * this.shoe.price;
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
  return this.shoeItems.reduce((total, shoe) => total + shoe.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function () {
  return this.shoeItems.reduce((total, shoe) => total + shoe.qty, 0);
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
    const shoeItem = cart.shoeItems.find(shoeItem => shoeItem.item._id === shoeId);

    if (shoeItem) {
      shoeItem.qty += 1;
    } else {
      const Shoe = mongoose.model('Shoe');
      const shoe = await Shoe.findyById(shoeId);
      cart.shoeItems.push({ shoe}); 
    }
    return cart.save();
  };

  orderSchema.methods.setShoeQuantity = async function(shoeId, newQty) {
    cart = this;
    const shoeItem = cart.shoeItems.find(shoeItems => shoeItems.shoe._id === shoeId);

    if (shoeItem && newQuantity <= 0) {
      await cart.removeShoe(shoeId);
    } else if (shoeItem) {
      shoeItem.quantity = newQuantity;
    }
    return cart.save();
  };

  module.exports = mongoose.model('Order', orderSchema);