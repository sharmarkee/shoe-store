const Schema = require('mongoose').Schema;

const shoeSchema = new Schema({
  name: { type: String, required: true },
  image: String,
  brand: {type: Schema.Types.ObjectId, ref: 'Brand'},
  price: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = shoeSchema;