require('dotenv').config();
require('./config/database');

const Brand = require('./models/brand');
const Shoe = require('./models/shoes');

(async function() {
  await Brand.deleteMany({});
  const brands = await Brand.create([
    {name: 'Air Jordan', sortOrder: 1},
    {name: 'Nike', sortOrder: 2},
    {name: 'Yeezy', sortOrder: 3},
    {name: 'Adidas', sortOrder: 4},
  ]);




  await Shoe.deleteMany({});
  const shoes = await Shoe.create([ 
  { 
  name: 'Air Jordan 1', brand: brands[1],price: 200, size: 14,image: 'https://imgur.com/a/7YR29ah' },
{
 name: 'Yeezy 350 V2',brand: brands[3],price: 350, size: 11, image: 'https://imgur.com/a/2YgnIkk' },
{
name: 'Air Jordan 4',brand: brands[1],price: 220,size: 12,image: 'https://imgur.com/a/tJQtugI' },,
{
name: 'Air Jordan 11',brand: brands[1],price: 220,size: 9,image: 'https://imgur.com/a/PIYv9sJ' },
{
name: 'Nike Air Max 1', brand : brands[3], price: 140,  size: 10,image: 'https://imgur.com/a/VBjPL0B' },
{
name: 'Adidas Pro',brand : brands[4],price: 100, size: 11,image: 'https://imgur.com/a/ZOzWlSQ' },


]);
  console.log(shoes)

  process.exit();
})();
    



















  
