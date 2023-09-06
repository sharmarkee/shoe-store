const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shoeItemSchemas = require('./shoeItem');

const shoeItemSchema = new Schema({
  qty: { type: Number, default: 1 },
  item: itemSchema
}, {
  timestamps: true,
  toJSON: {virtuals: true}
});

shoeItemSchema.virtual('extPrice').get(function() {
  return this.qty * this.item.price;
});

const orderSchema = new Schema({
  // An order belongs to a user
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  // Makes sense to embed an order's line items
  shoeItems: [shoeItemSchema],
  // A user's unpaid order is their "cart"
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