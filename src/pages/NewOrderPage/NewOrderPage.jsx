import { useState, useEffect, useRef } from 'react';
import * as shoesAPI from "../../utilities/shoes-api"; 
import * as ordersAPI from "../../utilities/orders-api";
import Logo from '../../components/Logo/Logo';
import './NewOrderPage.css';
import { Link } from 'react-router-dom';
import InventoryList from '../../components/InventoryList/InventoryList';
import BrandList from '../../components/BrandList/BrandList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import LogOut from '../../components/LogOut/LogOut';



export default function NewOrderPage({ user, setUser }) {
  const [inventoryShoes, setInventoryShoes] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const brandsRef = useRef([]);
  const [activeStripe, setActiveStripe] = useState(false)


  useEffect(function () {
    async function getShoes() {
      const shoes = await shoesAPI.getAll()
      console.log(shoes)
      brandsRef.current = [
        ...new Set(shoes?.map((shoe) => shoe.brand.name))
      ]
      setInventoryShoes(shoes)
      setActiveCat(brandsRef.current[0])
  }
  getShoes();
  
  async function getCart() {
    const cart = await ordersAPI.getCart();
    setCart(cart);
    // console.log(cart);
  }
  getCart();
}, []);


async function handleAddToOrder(shoeId) {
  const updateCart = await ordersAPI.addCart(shoeId);
  setCart(updateCart);
}

async function handleChangeQuantity(shoeId, newQty) {
  const updateCart = await ordersAPI.setShoeQuantity(shoeId, newQty);
  setCart(updateCart);
}


async function handleCheckout() {
    // await ordersAPI.checkout()
    // navigate('/payment')
    setActiveStripe(true)

  
}

return (
  <main className="NewOrderPage">
  <aside>
    <Logo />
    <BrandList
      brands={brandsRef.current}
      activeCat={activeCat}
      setActiveCat={setActiveCat}
    />
    <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
    <LogOut user={user} setUser={setUser} />
  </aside>
  <InventoryList
    inventoryShoes={inventoryShoes.filter(shoe => shoe.brand.name === activeCat)}
    handleAddToOrder={handleAddToOrder}
    />
  <OrderDetail 
  order={cart}
  handleChangeQuantity={handleChangeQuantity}
  handleCheckout={handleCheckout}
  activeStripe={activeStripe}
  setActiveStripe={setActiveStripe}
   />
 </main>
 );

}
