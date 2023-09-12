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
 brand: brands[1], name: 'Air Jordan 1', price: 200, size: 14,image: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-Black-Gym-Red-White-2019.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1566585064' },
{
brand: brands[3], name: 'Yeezy 350 V2', price: 350, size: 11, image: 'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Core-Black-Red-2017.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1566585064' },
{
brand: brands[1],name: 'Air Jordan 4',price: 220,size: 12,image: 'https://images.stockx.com/images/Air-Jordan-4-Retro-What-The-4.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1566585064' },
{
brand: brands[1],name: 'Air Jordan 11',price: 220,size: 9,image: 'https://images.stockx.com/images/Air-Jordan-11-Retro-Low-IE-Space-Jam-2019.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1566585064' },
{
brand : brands[3], name: 'Nike Air Max 1',  price: 140,  size: 10,image: 'https://images.stockx.com/images/Nike-Air-Max-1-Susan-Missing-Link.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1566585064' },
{
brand : brands[4], name: 'Adidas Pro',price: 100, size: 11,image: 'https://images.stockx.com/images/adidas-Pro-Model-2G-White-Black-2020.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1566585064' },


]);
  console.log(shoes)

  process.exit();
})();
    



















  
