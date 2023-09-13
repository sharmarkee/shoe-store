const Shoe = require('../../models/shoe');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const shoes = await Shoe.find({}).sort('name').populate('brand').exec();
  res.json(shoes);
}

async function show(req, res) {
  const shoe = await Shoe.findById(req.params.id);
  res.json(shoe);
}