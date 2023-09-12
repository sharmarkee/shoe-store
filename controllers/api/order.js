const Item = require('../../models/item');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const shoes = await Shoe.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the populated categories
//   items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(items);
}

async function show(req, res) {
  const shoe = await Shoe.findById(req.params.id);
  res.json(item);
}