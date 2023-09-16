require('dotenv').config();
require('./config/database');

const Brand = require('./models/brand');
const Shoe = require('./models/shoe');

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
  name: 'Air Jordan 1', brand: brands[1],price: 200, size: 14,image: 'https://images.unsplash.com/photo-1513188732907-5f732b831ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8am9yZGFuJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
{
 name: 'Yeezy 350 V2',brand: brands[3],price: 350, size: 11, image: 'https://images.unsplash.com/photo-1606297255627-c58c609140e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHllZXp5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
{
name: 'Air Jordan 4',brand: brands[1],price: 220,size: 12,image: 'https://images.unsplash.com/photo-1610897600804-c36e2336ad3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGpvcmRhbiUyMDR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
{
name: 'Air Jordan 11',brand: brands[1],price: 220,size: 9,image: 'https://images.unsplash.com/photo-1608197492882-4ab08b61f78c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8am9yZGFuJTIwMTF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
{
name: 'Nike Air Max 1', brand : brands[2], price: 140,  size: 10,image: 'https://images.unsplash.com/photo-1561095884-bb4b8d43c18b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlyJTIwbWF4JTIwMXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
{
name: 'Adidas Pro',brand : brands[3],price: 100, size: 11,image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFkaWRhcyUyMHNzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },


]);
   console.log(brands);
  console.log(shoes);


  process.exit();
})();
    



















  
