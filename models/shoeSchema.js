const Schema = require('mongoose').Schema;

const shoeSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  brandId: {type: Schema.Types.ObjectId, ref: 'Brand'},
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = shoeSchema;